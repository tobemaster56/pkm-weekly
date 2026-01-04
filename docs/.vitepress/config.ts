import { defineConfig } from "vitepress";
import { registerContainers } from "./markdown/containers";

// weekly English documentation sidebar
const weeklyEnSidebar = [
  {
    text: "Documentation",
    items: [
      { text: "Overview", link: "/weekly/en/" },
      {
        text: "2026",
        collapsed: false,
        items: [{ text: "Week 01", link: "/weekly/en/pkm-2026-w01" }],
      },
    ],
  },
];

// weekly Simplified Chinese documentation sidebar
const weeklyZhSidebar = [
  {
    text: "文档",
    items: [
      { text: "概述", link: "/weekly/zh/" },
      {
        text: "2026",
        collapsed: false,
        items: [{ text: "第一周", link: "/weekly/zh/pkm-2026-w01" }],
      },
    ],
  },
];

// weekly Traditional Chinese documentation sidebar
const weeklyZhTWSidebar = [
  {
    text: "文件",
    items: [
      { text: "概述", link: "/weekly/zh-TW/" },
      {
        text: "2026",
        collapsed: false,
        items: [{ text: "第一週", link: "/weekly/zh-TW/pkm-2026-w01" }],
      },
    ],
  },
];

// v2 English documentation sidebar (placeholder)
const v2EnSidebar = [
  {
    text: "Documentation (v2)",
    items: [{ text: "Overview", link: "/v2/en/" }],
  },
];

// v2 Simplified Chinese documentation sidebar (placeholder)
const v2ZhSidebar = [
  {
    text: "文档 (v2)",
    items: [{ text: "概述", link: "/v2/zh/" }],
  },
];

// v2 Traditional Chinese documentation sidebar (placeholder)
const v2ZhTWSidebar = [
  {
    text: "文件 (v2)",
    items: [{ text: "概述", link: "/v2/zh-TW/" }],
  },
];

// Examples sidebar
const examplesEnSidebar = [
  {
    text: "Examples",
    items: [{ text: "Overview", link: "/examples/en/" }],
  },
];

const examplesZhSidebar = [
  {
    text: "示例",
    items: [{ text: "概述", link: "/examples/zh/" }],
  },
];

const examplesZhTWSidebar = [
  {
    text: "範例",
    items: [{ text: "概述", link: "/examples/zh-TW/" }],
  },
];

// Resources sidebar
const resourcesEnSidebar = [
  {
    text: "Resources",
    items: [{ text: "Gallery", link: "/resources/en/" }],
  },
];

const resourcesZhSidebar = [
  {
    text: "资源",
    items: [{ text: "展示", link: "/resources/zh/" }],
  },
];

const resourcesZhTWSidebar = [
  {
    text: "資源",
    items: [{ text: "展示", link: "/resources/zh-TW/" }],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PKM Weekly",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "Personal Knowledge Management Weekly - Track updates, news, and insights from the PKM ecosystem",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 导航由自定义 DynamicNav 组件处理
    
    sidebar: {
      // weekly documentation
      "/weekly/en/": weeklyEnSidebar,
      "/weekly/zh/": weeklyZhSidebar,
      "/weekly/zh-TW/": weeklyZhTWSidebar,
      // v2 documentation
      "/v2/en/": v2EnSidebar,
      "/v2/zh/": v2ZhSidebar,
      "/v2/zh-TW/": v2ZhTWSidebar,
      // Examples
      "/examples/en/": examplesEnSidebar,
      "/examples/zh/": examplesZhSidebar,
      "/examples/zh-TW/": examplesZhTWSidebar,
      // Resources
      "/resources/en/": resourcesEnSidebar,
      "/resources/zh/": resourcesZhSidebar,
      "/resources/zh-TW/": resourcesZhTWSidebar,
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/tobemaster56/pkm-weekly",
      },
    ],
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    config(md) {
      registerContainers(md);
    },
  },
});
