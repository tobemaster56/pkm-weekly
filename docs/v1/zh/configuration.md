# 配置

本页面介绍如何配置您的文档站点。

## 站点配置

编辑 `docs/.vitepress/config.ts` 来配置您的站点：

```typescript
export default defineConfig({
  title: "我的文档",
  description: "您的站点描述",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [/* 导航项 */],
    sidebar: {/* 侧边栏配置 */},
    socialLinks: [/* 社交链接 */],
  },
});
```

## 导航

配置顶部导航栏：

```typescript
nav: [
  { text: "首页", link: "/" },
  { text: "文档", link: "/v1/zh/" },
  {
    text: "版本",
    items: [
      { text: "v1 (当前)", link: "/v1/zh/" },
      { text: "v2 (下一版)", link: "/v2/zh/" },
    ],
  },
],
```

## 侧边栏

为每个部分配置侧边栏：

```typescript
sidebar: {
  "/v1/zh/": [
    {
      text: "文档",
      items: [
        { text: "概述", link: "/v1/zh/" },
        { text: "快速开始", link: "/v1/zh/getting-started" },
      ],
    },
  ],
},
```

## 添加语言

要添加新语言：

1. 在每个版本下创建新目录（例如，`v1/ja/` 用于日语）
2. 在 `config.ts` 中添加侧边栏配置
3. 更新 `LanguageSwitcher.vue` 组件

## 自定义容器

模板包含自定义 Markdown 容器：

```markdown
::: tip 标题
提示内容
:::

::: warning 标题
警告内容
:::

::: danger 标题
危险内容
:::

::: details 标题
可折叠内容
:::
```

## 样式

在 `docs/.vitepress/theme/style.css` 中自定义样式：

```css
:root {
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #535bf2;
}
```

