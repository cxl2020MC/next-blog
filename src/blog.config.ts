// import type { BlogConfig } from './types/blog.config'

const blogConfig = {
  api: "https://api.blog.cxl2020mc.top",
  title: "陈鑫磊的博客",
  description: "一个记录我学习和思考的博客",
  keywords: ["陈鑫磊", "博客", "前端", "后端", "全栈", "技术"],
  favicon: "https://cxl2020mc-1304820025.file.myqcloud.com/avatar-round.webp",
  author: {
    avatar: "https://cxl2020mc-1304820025.file.myqcloud.com/avatar.png",
    name: "陈鑫磊",
    // description: '一个热爱编程的少年',
    bio: "当你有机会做出选择的时候，不要让自己后悔。",
    github: "https://github.com/cxl2020MC",
  },
  repo: "https://github.com/cxl2020MC/next-blog",
  nav: {
    links: [
      {
        name: "友链",
        icon: "fa6-solid:link",
        link: "/links",
      },
      {
        name: "关于",
        icon: "fa6-solid:address-card",
        link: "/about",
      },
      {
        name: "归档",
        icon: "fa6-solid:box",
        link: "/archives",
      },
      {
        name: "标签",
        icon: "fa6-solid:tags",
        link: "/tags",
      },
    ],
  },
  twikoo: {
    envId: "https://twikoo.cxl2020mc.top",
  },
};

export const codeBlockLangTranslate: { [key: string]: string } = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  vue: "Vue",
  html: "HTML",
  css: "CSS",
  json: "JSON",
  python: "Python",
  rust: "Rust",
  c: "C",
  cpp: "C++",
  csharp: "C#",
};

export default blogConfig;
