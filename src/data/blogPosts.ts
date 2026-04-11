import type { Lang } from '../i18n/utils';

export type BlogCategoryKey = 'frontend' | 'backend' | 'devops' | 'thoughts';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  updatedDate: string;
  category: BlogCategoryKey;
  readTime: number;
  sections: BlogSection[];
}

export const blogCategoryOrder: BlogCategoryKey[] = ['frontend', 'backend', 'devops', 'thoughts'];

const blogPosts: Record<Lang, BlogPost[]> = {
  zh: [
    {
      id: 'astro-static-sites',
      title: '使用 Astro 构建现代静态网站',
      description: '从信息架构、性能预算到内容组织，梳理如何用 Astro 做出真正适合长期维护的个人站。',
      date: '2024-12-15',
      updatedDate: '2025-01-10',
      category: 'frontend',
      readTime: 8,
      sections: [
        {
          heading: '先把页面拆成内容，而不是组件',
          paragraphs: [
            '很多个人主页一开始就陷入组件命名和视觉细节，结果内容结构反而是后补的。Astro 更适合先把页面当成信息架构来设计：哪些内容要长期存在，哪些内容只在首页露出，哪些内容应该单独成为可被索引的页面。',
            '当我把博客、项目、关于和联系方式拆成明确的内容节点之后，组件反而变得容易组织。页面职责清楚以后，再去决定哪些区域适合做成 Astro 组件、哪些内容继续保留成简单页面，会比一开始就追求炫技更稳定。',
          ],
        },
        {
          heading: 'Astro 真正有价值的是默认轻量',
          paragraphs: [
            '个人站的核心问题不是功能不够多，而是信息密度和加载速度常常互相拖累。Astro 的优势在于它默认输出静态 HTML，首屏不需要为了一个简单的内容页引入额外的客户端运行时。',
            '这意味着博客页、项目页、关于页这种内容导向页面，可以优先保证可读性和稳定性。只有确实需要交互的时候，再把交互限制到局部岛屿，而不是把整站都当成应用来加载。',
          ],
        },
        {
          heading: '个人站的长期维护，取决于内容输入成本',
          paragraphs: [
            '如果每次写文章都要改很多页面结构、更新多处文案、手动同步不同语言版本，内容系统很快就会失去维护动力。更好的做法是先把文章数据抽离出来，再决定它以什么界面呈现。',
            '这样一来，无论后面要做目录式阅读器、归档页还是文章详情页，底层内容都不需要重新组织。对个人站来说，这种低摩擦更新能力比额外的视觉装饰更重要。',
          ],
        },
      ],
    },
    {
      id: 'tailwind-v4',
      title: 'Tailwind CSS v4 新特性解析',
      description: '聚焦新版本在样式组织、性能与主题变量上的变化，适合准备升级现有项目的人快速评估。',
      date: '2024-11-20',
      updatedDate: '2024-12-05',
      category: 'frontend',
      readTime: 6,
      sections: [
        {
          heading: '从配置驱动转向样式驱动',
          paragraphs: [
            'Tailwind v4 最明显的变化，是把很多原来写在配置文件里的东西转回到 CSS 本身。主题变量、层级关系和设计令牌都更接近样式语言，而不是一套额外 DSL。',
            '这对内容型网站尤其有利，因为你可以在更少抽象层的前提下维持统一视觉系统。页面上的颜色、间距和字体不再需要在配置和样式之间来回跳转理解。',
          ],
        },
        {
          heading: '升级前先看设计系统是否稳定',
          paragraphs: [
            '不是所有项目都应该第一时间升级。对已经上线的个人站来说，先确认现有设计令牌是否清晰、暗色模式是否一致、是否依赖历史插件，比追版本号更重要。',
            '如果站点本身组件数量不多，但页面类型很多，那么 v4 的变量化主题会很有帮助；如果项目还在频繁试样式，先把样式层收敛，再升级会更稳。',
          ],
        },
        {
          heading: '写内容页时要避免工具类失控',
          paragraphs: [
            'Tailwind 很适合快速搭界面，但内容页最容易出现的问题是每个段落区块都长得不一样。结果不是阅读体验变强，而是视觉节奏被打散。',
            '比较稳的做法是先定义阅读器的骨架：标题层级、正文宽度、段落间距、边栏信息、强调块样式。只有这些基础规则定住了，工具类才是在放大系统，而不是制造噪音。',
          ],
        },
      ],
    },
    {
      id: 'node-backend-practices',
      title: 'Node.js 后端最佳实践',
      description: '从接口边界、错误治理和可维护性三个角度整理中小型 Node.js 服务最容易被忽略的问题。',
      date: '2024-10-10',
      updatedDate: '2024-11-15',
      category: 'backend',
      readTime: 12,
      sections: [
        {
          heading: '先定义边界，再讨论框架',
          paragraphs: [
            'Node.js 后端项目最常见的问题不是框架选错，而是边界不清：路由直接碰数据库、业务逻辑散在控制器里、输入验证和权限判断混在一起。',
            '只要边界不清，后面无论换 Express、Fastify 还是 Nest，复杂度都只是换个地方累积。先明确输入层、业务层、数据访问层分别负责什么，后面的技术决策才有意义。',
          ],
        },
        {
          heading: '错误处理要为排查服务',
          paragraphs: [
            '很多项目把错误处理理解成统一返回 JSON，其实这只解决了前端消费的问题，没有解决后端排查的问题。真正需要统一的是错误分类、日志字段和追踪上下文。',
            '一个好的错误模型至少要区分业务错误、依赖错误和未知错误，并且让日志里有请求 ID、用户上下文和关键输入摘要。这样出问题时，才能快速定位，而不是靠猜。',
          ],
        },
        {
          heading: '可维护性来自约束，而不是文档承诺',
          paragraphs: [
            '团队里常见一句话是“大家约定好就行”，但后端代码一旦开始堆积，仅靠约定通常不够。请求 schema、数据库访问方式、异常抛出模式、目录职责，都应该尽量体现在代码结构里。',
            '换句话说，最可靠的最佳实践不是写在 wiki 里，而是让错误写法难以出现，让正确路径足够顺手。这样项目扩大后，维护成本才不会指数级上升。',
          ],
        },
      ],
    },
    {
      id: 'docker-deployment-guide',
      title: 'Docker 容器化部署指南',
      description: '用部署视角重新看 Docker，不只讲命令，还解释镜像层、运行环境和交付流程如何影响线上稳定性。',
      date: '2024-09-05',
      updatedDate: '2024-10-20',
      category: 'devops',
      readTime: 10,
      sections: [
        {
          heading: '容器化不是把应用打包进去就结束',
          paragraphs: [
            '很多教程让人觉得 Docker 的目标只是“能跑起来”，但生产环境真正关心的是镜像体积、构建速度、基础镜像来源、环境一致性和安全更新。',
            '如果镜像过大、构建不可复现、依赖层混乱，那么即使本地能运行，交付流程依然脆弱。容器化的价值，是让交付过程变成可预测的工程系统。',
          ],
        },
        {
          heading: '多阶段构建通常是第一步优化',
          paragraphs: [
            '对前端站点和 Node.js 服务来说，多阶段构建几乎总是值得做。构建时需要的工具链，不应该被带入最终运行镜像。',
            '把编译环境和运行环境拆开后，最终镜像更小、攻击面更低，CI 的缓存策略也更容易做。对个人项目而言，这类优化带来的收益往往比复杂的编排更直接。',
          ],
        },
        {
          heading: '上线稳定性取决于默认操作是否正确',
          paragraphs: [
            '真正实用的部署指南，不该只告诉你 docker build 和 docker run 怎么写，而应该把健康检查、环境变量注入、日志输出和回滚路径一起考虑进去。',
            '当这些默认路径足够清晰时，发布流程就不再依赖某个人的经验记忆。容器化最大的价值，从来不是“新技术感”，而是让发布更稳定。',
          ],
        },
      ],
    },
    {
      id: 'technology-choices',
      title: '关于技术选型的思考',
      description: '技术选型不是列功能表，而是判断业务阶段、团队能力和未来维护成本是否匹配。',
      date: '2024-08-18',
      updatedDate: '2024-09-01',
      category: 'thoughts',
      readTime: 5,
      sections: [
        {
          heading: '选型不是抽象比较，而是上下文判断',
          paragraphs: [
            '很多技术选型讨论喜欢做横向对比表，但真正影响结果的，通常不是框架功能点，而是当前团队的经验、交付节奏和未来一年的维护模式。',
            '同一个技术栈，放在不同团队和业务阶段里，成本完全不同。所以选型的关键不是找到“最强方案”，而是判断什么方案最适合现在。',
          ],
        },
        {
          heading: '越早期的项目，越要避免过度设计',
          paragraphs: [
            '早期项目最常见的误区，是为了未来可能发生的复杂性，提前引入很多抽象层和工程设施。结果现实中的需求还没验证，系统已经先变重了。',
            '更稳的策略是优先选择理解成本低、替换路径明确的方案。把复杂性留到真正需要的时候处理，往往比一开始就构建宏大体系更有效。',
          ],
        },
        {
          heading: '好的选型标准要包含退出机制',
          paragraphs: [
            '技术选型不仅要看“用上以后能得到什么”，还要看“如果三个月后不合适，退出成本是多少”。迁移难度、生态锁定程度、团队学习曲线，都是必须提前考虑的部分。',
            '能够被替换的技术栈，通常比一开始看起来最先进的方案更安全。因为长期维护真正需要的不是激进，而是可控。',
          ],
        },
      ],
    },
  ],
  en: [
    {
      id: 'astro-static-sites',
      title: 'Building Modern Static Sites with Astro',
      description: 'A practical look at how Astro helps structure a personal site around content, performance, and long-term maintainability.',
      date: '2024-12-15',
      updatedDate: '2025-01-10',
      category: 'frontend',
      readTime: 8,
      sections: [
        {
          heading: 'Start by modeling content, not components',
          paragraphs: [
            'A lot of personal sites get stuck too early on component names and visual polish. The actual information architecture becomes an afterthought. Astro works better when you first decide what content should live permanently, what belongs on the homepage, and what deserves a standalone indexed page.',
            'Once blog posts, projects, about pages, and contact pages are treated as clear content nodes, components become much easier to organize. You stop designing abstractions first and start designing a site that is easier to extend.',
          ],
        },
        {
          heading: 'Astro matters because it stays light by default',
          paragraphs: [
            'The main problem for a personal site is rarely missing features. It is usually a poor tradeoff between information density and page weight. Astro gives you static HTML first, so content-heavy pages do not pay for client-side runtime they do not need.',
            'That makes blog, projects, and about pages more stable and easier to read. When interaction is necessary, it can stay local instead of turning the whole site into an application shell.',
          ],
        },
        {
          heading: 'Long-term maintenance depends on publishing cost',
          paragraphs: [
            'If every new article requires touching multiple page templates, syncing duplicated copy, and updating two language variants by hand, the content system will quickly become too expensive to maintain.',
            'A better approach is to separate article data from presentation. Once the content layer is clean, you can build a reader view, archive view, or dedicated article pages without rewriting the source material.',
          ],
        },
      ],
    },
    {
      id: 'tailwind-v4',
      title: "What's New in Tailwind CSS v4",
      description: 'A focused review of what changed in v4 and what matters most if you are planning to upgrade an existing site.',
      date: '2024-11-20',
      updatedDate: '2024-12-05',
      category: 'frontend',
      readTime: 6,
      sections: [
        {
          heading: 'The shift from config-driven to style-driven',
          paragraphs: [
            'One of the biggest changes in Tailwind v4 is that more of the design system moves closer to CSS itself. Theme variables and design tokens feel less like a separate DSL and more like styling primitives you can reason about directly.',
            'That is especially useful on content-first sites. Colors, spacing, and type can stay understandable in one place instead of being split across configuration files and utility usage.',
          ],
        },
        {
          heading: 'Upgrade only when the design system is ready',
          paragraphs: [
            'Not every project should upgrade immediately. For a personal site, it is more important to confirm that your tokens are already coherent, your dark mode is consistent, and your styling is not tightly coupled to old plugin behavior.',
            'If the site has many page types but a relatively small component surface, v4 can simplify a lot. If the visual system is still in flux, stabilizing that first is usually the better tradeoff.',
          ],
        },
        {
          heading: 'Content pages need stronger layout rules than apps',
          paragraphs: [
            'Tailwind is excellent for building quickly, but content pages often fall apart when every block gets styled independently. Instead of improving readability, the page starts to feel visually noisy.',
            'The stable approach is to define the reader skeleton first: title hierarchy, body width, paragraph rhythm, side metadata, and emphasis styles. Utility classes then reinforce the system instead of fragmenting it.',
          ],
        },
      ],
    },
    {
      id: 'node-backend-practices',
      title: 'Node.js Backend Best Practices',
      description: 'A practical set of backend rules that keep small and mid-sized Node.js services readable, debuggable, and easier to grow.',
      date: '2024-10-10',
      updatedDate: '2024-11-15',
      category: 'backend',
      readTime: 12,
      sections: [
        {
          heading: 'Define boundaries before debating frameworks',
          paragraphs: [
            'Most Node.js backend problems do not come from choosing the wrong framework. They come from unclear boundaries: routes talking directly to the database, business logic leaking into controllers, and validation mixed with permission checks.',
            'If those boundaries are weak, switching from Express to Fastify or Nest only moves complexity around. Clear responsibilities across input handling, business logic, and data access matter more than framework branding.',
          ],
        },
        {
          heading: 'Error handling should help diagnosis',
          paragraphs: [
            'A lot of teams treat error handling as standardized JSON responses. That helps the frontend, but it does not help the backend understand what actually went wrong. The real standard should be around error classes, logging fields, and trace context.',
            'A useful error model distinguishes business failures, dependency failures, and unexpected faults, while logging request identifiers and meaningful context. That turns debugging from guesswork into a repeatable process.',
          ],
        },
        {
          heading: 'Maintainability comes from constraints',
          paragraphs: [
            'Teams often say they will just follow conventions, but conventions without guardrails rarely survive code growth. Request schemas, data access patterns, exception styles, and folder responsibilities should be visible in the structure of the code.',
            'The strongest best practice is not the one written in documentation. It is the one that makes the correct path easy and the incorrect path uncomfortable.',
          ],
        },
      ],
    },
    {
      id: 'docker-deployment-guide',
      title: 'Docker Containerization Guide',
      description: 'A deployment-first guide to Docker that focuses on reproducibility, image shape, and release stability instead of commands alone.',
      date: '2024-09-05',
      updatedDate: '2024-10-20',
      category: 'devops',
      readTime: 10,
      sections: [
        {
          heading: 'Containerization is more than making it run',
          paragraphs: [
            'A lot of Docker tutorials stop once the application starts successfully. Production concerns are different: image size, build reproducibility, trusted base images, environment parity, and security updates all matter just as much.',
            'If the image is bloated or the dependency layers are unstable, local success does not translate into operational confidence. The real value of containerization is predictable delivery.',
          ],
        },
        {
          heading: 'Multi-stage builds are usually the first real win',
          paragraphs: [
            'For frontend sites and Node.js services, multi-stage builds are almost always worthwhile. The toolchain needed during build should not leak into the runtime image.',
            'Splitting build and runtime environments gives you smaller artifacts, a lower attack surface, and cleaner caching behavior in CI. That is often a better optimization than jumping straight into orchestration complexity.',
          ],
        },
        {
          heading: 'Stable releases depend on safe defaults',
          paragraphs: [
            'A useful deployment guide should not stop at docker build and docker run. It should also account for health checks, environment injection, logging behavior, and rollback paths.',
            'When those defaults are well-defined, releases stop depending on one person remembering the right sequence of steps. That is where Docker becomes operationally valuable.',
          ],
        },
      ],
    },
    {
      id: 'technology-choices',
      title: 'Thoughts on Technology Choices',
      description: 'Choosing technology is less about feature lists and more about matching team capability, business stage, and future maintenance cost.',
      date: '2024-08-18',
      updatedDate: '2024-09-01',
      category: 'thoughts',
      readTime: 5,
      sections: [
        {
          heading: 'Selection is contextual, not abstract',
          paragraphs: [
            'Technology discussions often turn into feature comparison tables. In practice, the stronger forces are team familiarity, delivery speed, hiring reality, and the maintenance model for the next year.',
            'The same stack can be cheap for one team and expensive for another. The goal is not to find the strongest option in the abstract. It is to choose the most appropriate option for the current context.',
          ],
        },
        {
          heading: 'Early projects should resist over-design',
          paragraphs: [
            'One of the most common mistakes in early-stage work is importing complexity for problems that have not happened yet. By the time real requirements arrive, the system is already heavier than necessary.',
            'A better strategy is to prefer tools with low cognitive overhead and obvious replacement paths. Real complexity should be paid for when it becomes real.',
          ],
        },
        {
          heading: 'Good selection criteria include exit cost',
          paragraphs: [
            'A technology decision should not only ask what value a tool provides. It should also ask what happens if the tool is no longer a fit three months from now. Migration cost, ecosystem lock-in, and learning curve are all part of that answer.',
            'Stacks that remain replaceable are often safer than stacks that look the most advanced up front. Long-term maintainability is usually about control, not novelty.',
          ],
        },
      ],
    },
  ],
};

export function getBlogPosts(lang: Lang): BlogPost[] {
  return blogPosts[lang];
}