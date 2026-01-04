import { defineConfig } from "vitepress";
import { registerContainers } from "./markdown/containers";

// v1 English documentation sidebar
const v1EnSidebar = [
  {
    text: "Documentation",
    items: [
      { text: "Overview", link: "/v1/en/" },
      { text: "Getting Started", link: "/v1/en/getting-started" },
      { text: "Configuration", link: "/v1/en/configuration" },
    ],
  },
];

// v1 Simplified Chinese documentation sidebar
const v1ZhSidebar = [
  {
    text: "文档",
    items: [
      { text: "概述", link: "/v1/zh/" },
      { text: "快速开始", link: "/v1/zh/getting-started" },
      { text: "配置", link: "/v1/zh/configuration" },
    ],
  },
];

// v1 Traditional Chinese documentation sidebar
const v1ZhTWSidebar = [
  {
    text: "文件",
    items: [
      { text: "概述", link: "/v1/zh-TW/" },
      { text: "快速開始", link: "/v1/zh-TW/getting-started" },
      { text: "配置", link: "/v1/zh-TW/configuration" },
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
  base: "/vitepress-i18n-template/",
  title: "My Documentation",
  head: [["link", { rel: "icon", href: "/vitepress-i18n-template/favicon.ico" }]],
  description: "A VitePress template with multi-language support and version-based documentation structure",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "v1",
        items: [
          { text: "v1 (Current)", link: "/v1/en/" },
          { text: "v2 (Next)", link: "/v2/en/" },
        ],
      },
      { text: "Docs", link: "/v1/en/" },
      { text: "Examples", link: "/examples/en/" },
      { text: "Resources", link: "/resources/en/" },
    ],

    sidebar: {
      // v1 documentation
      "/v1/en/": v1EnSidebar,
      "/v1/zh/": v1ZhSidebar,
      "/v1/zh-TW/": v1ZhTWSidebar,
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
        link: "https://github.com/your-username/your-repo",
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
