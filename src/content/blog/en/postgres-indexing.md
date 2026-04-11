---
title: PostgreSQL Indexing Beyond the Basics
description: Most developers know to add an index on foreign keys and filter columns. The interesting decisions start when queries get complex and indexes start interacting with each other.
date: "2025-01-18"
updatedDate: "2025-01-18"
category: backend
readTime: 9
lang: en
---

## An index is a separate data structure with a cost

Before getting into specific index types, it helps to be clear on what an index is. An index is a separate on-disk data structure maintained by PostgreSQL alongside the main table. It trades write overhead and storage space for faster reads on specific query patterns.

Every INSERT, UPDATE, and DELETE must update all relevant indexes. If a table has six indexes, every write touches six data structures. Understanding this tradeoff guides every indexing decision: add an index when the read gains outweigh the write costs, and remove indexes that no query uses.

## Composite indexes have a dominant left column

A composite index on `(a, b, c)` is not the same as three separate indexes. It is a B-tree ordered first by `a`, then by `b` within each `a` value, then by `c` within each `(a, b)` pair.

This structure means the index is useful for queries filtering on `a` alone, or on `(a, b)`, or on `(a, b, c)`. It is generally not useful for queries filtering on `b` alone or `c` alone, because the tree is not sorted by those columns independently.

The implication: when designing a composite index, put the most selective column first if queries will filter on it alone. Put equality filters before range filters, because a range filter terminates the sorted-order benefit for subsequent columns.

## Partial indexes cover a useful subset

A partial index includes only rows that satisfy a condition:

```sql
CREATE INDEX orders_pending_idx ON orders (created_at)
WHERE status = 'pending';
```

This index is smaller than a full index, faster to scan, and only maintained for rows that match the condition. Queries that filter on `status = 'pending'` and sort or filter on `created_at` can use it directly.

Partial indexes are underused. Any time a query always filters on a specific value of a low-cardinality column, consider whether a partial index on that subset would be more efficient than a full index covering all values.

## EXPLAIN ANALYZE tells you what actually happened

Reading query plans is a skill worth developing. `EXPLAIN ANALYZE` runs the query and shows both the planned strategy and actual execution statistics:

```sql
EXPLAIN ANALYZE SELECT * FROM events WHERE user_id = 42 ORDER BY created_at DESC LIMIT 10;
```

Key things to look for:
- **Seq Scan vs. Index Scan**: a sequential scan on a large table suggests a missing index
- **Rows** estimate vs. actual: large discrepancies suggest stale statistics — run `ANALYZE`
- **Bitmap Heap Scan**: PostgreSQL collected index hits, then fetched rows in heap order; common when returning many rows from an index
- **Nested Loop vs. Hash Join**: nested loops work well when the inner side is small; hash joins work better for larger datasets

The planner's cost estimates are in arbitrary units, but the relative values between nodes tell you where time is going.

## Index-only scans are the best case

When all columns in a query can be satisfied by the index without touching the heap, PostgreSQL performs an index-only scan. This is significantly faster because it avoids heap fetches entirely.

To enable index-only scans, the index must include every column the query projects. Use `INCLUDE` to add non-key columns:

```sql
CREATE INDEX users_email_idx ON users (email) INCLUDE (name, created_at);
```

The included columns are stored in the leaf pages but not sorted. They do not help with ordering or range filtering, but they allow the index to satisfy projections without a heap visit.

This is most valuable for frequently run queries that return a small, predictable set of columns.
