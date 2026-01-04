# 配置

本頁面介紹如何配置您的文件網站。

## 網站配置

編輯 `docs/.vitepress/config.ts` 來配置您的網站：

```typescript
export default defineConfig({
  title: "我的文件",
  description: "您的網站描述",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [/* 導航項 */],
    sidebar: {/* 側邊欄配置 */},
    socialLinks: [/* 社交連結 */],
  },
});
```

## 導航

配置頂部導航欄：

```typescript
nav: [
  { text: "首頁", link: "/" },
  { text: "文件", link: "/v1/zh-TW/" },
  {
    text: "版本",
    items: [
      { text: "v1 (目前)", link: "/v1/zh-TW/" },
      { text: "v2 (下一版)", link: "/v2/zh-TW/" },
    ],
  },
],
```

## 側邊欄

為每個部分配置側邊欄：

```typescript
sidebar: {
  "/v1/zh-TW/": [
    {
      text: "文件",
      items: [
        { text: "概述", link: "/v1/zh-TW/" },
        { text: "快速開始", link: "/v1/zh-TW/getting-started" },
      ],
    },
  ],
},
```

## 添加語言

要添加新語言：

1. 在每個版本下創建新目錄（例如，`v1/ja/` 用於日語）
2. 在 `config.ts` 中添加側邊欄配置
3. 更新 `LanguageSwitcher.vue` 組件

## 自訂容器

模板包含自訂 Markdown 容器：

```markdown
::: tip 標題
提示內容
:::

::: warning 標題
警告內容
:::

::: danger 標題
危險內容
:::

::: details 標題
可摺疊內容
:::
```

## 樣式

在 `docs/.vitepress/theme/style.css` 中自訂樣式：

```css
:root {
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #535bf2;
}
```

