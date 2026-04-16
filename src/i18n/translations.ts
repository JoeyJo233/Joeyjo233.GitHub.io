export const languages = {
  zh: "中文",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "zh";

export const translations: Record<Lang, Record<string, string>> = {
  zh: {
    // Nav
    "nav.about": "关于我",
    "nav.projects": "项目作品",
    "nav.blog": "技术博客",
    "nav.contact": "联系方式",

    // Hero
    "hero.badge": "欢迎来到我的个人空间",
    "hero.title.line1": "你好，我是",
    "hero.title.line2": "一名开发者",
    "hero.subtitle":
      "热爱技术，专注于全栈开发与用户体验设计。在这里你可以了解我的项目作品、技术博客和职业经历。",
    "hero.cta.projects": "查看我的项目",
    "hero.cta.about": "了解更多",

    // Featured Section
    "featured.title": "精选项目",
    "featured.project1.title": "项目一",
    "featured.project1.desc": "一个全栈 Web 应用，使用现代技术栈构建。",
    "featured.project2.title": "项目二",
    "featured.project2.desc": "移动端优先的响应式设计项目，注重用户体验。",
    "featured.project3.title": "项目三",
    "featured.project3.desc": "开源工具库，帮助开发者提高工作效率。",

    // Footer
    "footer.section.projects": "项目",
    "footer.section.content": "内容",
    "footer.section.contact": "联系",
    "footer.link.project1": "项目一",
    "footer.link.project2": "项目二",
    "footer.link.project3": "项目三",
    "footer.link.blog": "技术博客",
    "footer.link.notes": "学习笔记",
    "footer.copyright": "All rights reserved.",
    "footer.slogan": "用心构建，持续迭代。",

    // About Page
    "about.badge": "个人介绍",
    "about.title": "关于我",
    "about.subtitle": "了解我的背景、技能和兴趣爱好。",
    "about.bio.title": "个人简介",
    "about.bio.content":
      "我是一名全栈开发者，热衷于用技术解决实际问题。拥有多年的软件开发经验，擅长前端和后端技术。",
    "about.skills.title": "技能专长",
    "about.interests.title": "兴趣爱好",
    "about.interests.content":
      "除了编程，我还热爱阅读、摄影和户外运动。喜欢探索新技术，参与开源社区。",

    // Projects Page
    "projects.badge": "作品集",
    "projects.title": "项目时间线",
    "projects.subtitle": "记录我的项目历程，从构思到实现。",
    "projects.viewSource": "查看源码",

    // Blog Page
    "blog.badge": "知识分享",
    "blog.title": "技术博客",
    "blog.subtitle": "分享我的技术心得、学习笔记和行业观察。",
    "blog.sidebar.categories": "文章分类",
    "blog.sidebar.all": "全部",
    "blog.sidebar.frontend": "前端开发",
    "blog.sidebar.backend": "后端技术",
    "blog.sidebar.devops": "DevOps",
    "blog.sidebar.thoughts": "随笔思考",
    "blog.sidebar.harness-engineering": "Harness Engineering",
    "blog.sidebar.hermes-agent": "Hermes Agent",
    "blog.sidebar.openclaw": "Openclaw",
    "blog.readMore": "阅读全文",
    "blog.min": "分钟阅读",
    "blog.sort.label": "排序",
    "blog.sort.date": "创建时间",
    "blog.sort.title": "标题",
    "blog.sort.updated": "最后更新",
    "blog.sort.asc": "升序",
    "blog.sort.desc": "降序",
    "blog.reader.articleList": "文章列表",
    "blog.reader.nextSection": "下一节 →",
    "blog.reader.onThisPage": "本文目录",

    // Contact Page
    "contact.badge": "保持联系",
    "contact.title": "联系方式",
    "contact.subtitle": "如果你有任何问题或合作意向，欢迎通过以下方式联系我。",
    "contact.email.title": "电子邮件",
    "contact.email.desc": "发送邮件给我，我会尽快回复。",
    "contact.github.title": "GitHub",
    "contact.github.desc": "查看我的开源项目和代码。",
    "contact.social.title": "社交媒体",
    "contact.social.desc": "在社交平台上关注我。",
    "contact.form.title": "发送消息",
    "contact.form.name": "您的姓名",
    "contact.form.email": "电子邮件",
    "contact.form.message": "消息内容",
    "contact.form.send": "发送消息",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Welcome to my personal space",
    "hero.title.line1": "Hi, I'm",
    "hero.title.line2": "a Developer",
    "hero.subtitle":
      "Passionate about technology, focusing on full-stack development and user experience design. Explore my projects, blog posts, and career journey here.",
    "hero.cta.projects": "View My Projects",
    "hero.cta.about": "Learn More",

    // Featured Section
    "featured.title": "Featured Projects",
    "featured.project1.title": "Project One",
    "featured.project1.desc":
      "A full-stack web application built with modern tech stack.",
    "featured.project2.title": "Project Two",
    "featured.project2.desc":
      "Mobile-first responsive design project focused on user experience.",
    "featured.project3.title": "Project Three",
    "featured.project3.desc":
      "Open-source utility library to boost developer productivity.",

    // Footer
    "footer.section.projects": "Projects",
    "footer.section.content": "Content",
    "footer.section.contact": "Contact",
    "footer.link.project1": "Project One",
    "footer.link.project2": "Project Two",
    "footer.link.project3": "Project Three",
    "footer.link.blog": "Tech Blog",
    "footer.link.notes": "Study Notes",
    "footer.copyright": "All rights reserved.",
    "footer.slogan": "Built with care, iterated with passion.",

    // About Page
    "about.badge": "Introduction",
    "about.title": "About Me",
    "about.subtitle": "Learn about my background, skills, and interests.",
    "about.bio.title": "Bio",
    "about.bio.content":
      "I'm a full-stack developer passionate about solving real-world problems with technology. With years of software development experience, I specialize in both frontend and backend technologies.",
    "about.skills.title": "Skills",
    "about.interests.title": "Interests",
    "about.interests.content":
      "Beyond coding, I enjoy reading, photography, and outdoor activities. I love exploring new technologies and contributing to open-source communities.",

    // Projects Page
    "projects.badge": "Portfolio",
    "projects.title": "Project Timeline",
    "projects.subtitle":
      "Documenting my project journey, from idea to implementation.",
    "projects.viewSource": "View Source",

    // Blog Page
    "blog.badge": "Knowledge Sharing",
    "blog.title": "Tech Blog",
    "blog.subtitle":
      "Sharing my tech insights, study notes, and industry observations.",
    "blog.sidebar.categories": "Categories",
    "blog.sidebar.all": "All",
    "blog.sidebar.frontend": "Frontend",
    "blog.sidebar.backend": "Backend",
    "blog.sidebar.devops": "DevOps",
    "blog.sidebar.thoughts": "Thoughts",
    "blog.sidebar.harness-engineering": "Harness Engineering",
    "blog.sidebar.hermes-agent": "Hermes Agent",
    "blog.sidebar.openclaw": "Openclaw",
    "blog.readMore": "Read More",
    "blog.min": "min read",
    "blog.sort.label": "Sort",
    "blog.sort.date": "Date",
    "blog.sort.title": "Title",
    "blog.sort.updated": "Updated",
    "blog.sort.asc": "Asc",
    "blog.sort.desc": "Desc",
    "blog.reader.articleList": "Articles",
    "blog.reader.nextSection": "Next →",
    "blog.reader.onThisPage": "On This Page",

    // Contact Page
    "contact.badge": "Get in Touch",
    "contact.title": "Contact",
    "contact.subtitle":
      "If you have any questions or collaboration ideas, feel free to reach out.",
    "contact.email.title": "Email",
    "contact.email.desc": "Send me an email and I'll get back to you soon.",
    "contact.github.title": "GitHub",
    "contact.github.desc": "Check out my open-source projects and code.",
    "contact.social.title": "Social Media",
    "contact.social.desc": "Follow me on social platforms.",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
  },
};
