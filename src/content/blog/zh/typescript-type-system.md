---
title: TypeScript 类型系统比你想象的更强大
description: 深入条件类型、模板字面量类型和映射类型——让 TypeScript 真正成为类型层面编程语言的那些特性。
date: "2025-02-20"
updatedDate: "2025-02-20"
category: frontend
readTime: 7
lang: zh
---

## 基础用法够用，但远不是全部

大多数 TypeScript 代码停留在熟悉的范围里：`interface`、`type`、联合类型、`Partial<T>`、`Record<K, V>`。日常开发中这些已经够用。但类型系统在这之外还有很多层，理解更深层的部分会改变你建模问题的方式。

目的不是为了写出聪明的类型而写。目的是让编译器捕获运行时测试漏掉的错误，让 API 接口不需要额外注释就能自我说明。

## 条件类型让你在类型层面做分支

条件类型的形式是 `T extends U ? X : Y`。如果 `T` 可以赋值给 `U`，结果是 `X`，否则是 `Y`。这是类型层面的 `if` 表达式。

典型用法是从类型中提取部分信息：

```ts
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
```

`infer` 在模式匹配时引入一个类型变量。如果 `T` 是 `Promise<string>`，结果是 `string`。如果 `T` 本身就是 `string`，结果还是 `string`。组合起来很干净。

条件类型还会自动在联合类型上分发。`string | number extends SomeConstraint` 会对两个分支分别求值，然后把结果重新联合。标准库里大多数工具类型都依赖这个行为。

## 模板字面量类型把字符串校验带入编译器

从 TypeScript 4.1 开始，字符串类型可以用模板字面量语法组合：

```ts
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickHandler = EventName<"click">; // "onClick"
```

这意味着你可以把 `on*` 事件处理器命名、HTTP 方法前缀、环境变量命名规范这些约定描述成类型，而不是运行时检查。违规代码直接变成编译错误。

结合映射类型，模板字面量可以批量转换整个对象形状：

```ts
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
```

## 映射类型让你从现有类型派生新形状

映射类型遍历键并对其做变换。`[K in keyof T]: ...` 是核心模式。新版本的 `as` 子句允许在遍历时重映射键名。

一个实用的模式是递归去掉深层嵌套对象的可选性：

```ts
type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};
```

`-?` 修饰符去掉可选标记。结合条件类型的递归，可以得到任意嵌套类型的完全必填版本。

## 类型即文档，而且永不过期

实际收益不只是捕获 bug。类型完善的代码本身就是活文档。一个这样的函数签名：

```ts
function parseConfig<T extends Record<string, string>>(
  raw: T
): { [K in keyof T]: number };
```

不用读函数体就能知道它做什么：返回类型镜像输入形状，所有字符串值替换成数字。注释没法做到这种精确，而且注释可以过期，类型不会。

类型系统的投入会随时间产生复利。一旦核心数据形状被精确类型化，编译器就会在整个代码库里自动传播约束。重构变得更安全，因为类型错误在运行之前就会浮出来。
