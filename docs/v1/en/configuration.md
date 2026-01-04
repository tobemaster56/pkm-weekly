# Configuration

This page explains how to configure your documentation site.

## Site Configuration

Edit `docs/.vitepress/config.ts` to configure your site:

```typescript
export default defineConfig({
  title: "My Documentation",
  description: "Your site description",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [/* navigation items */],
    sidebar: {/* sidebar configuration */},
    socialLinks: [/* social links */],
  },
});
```

## Navigation

Configure the top navigation bar:

```typescript
nav: [
  { text: "Home", link: "/" },
  { text: "Docs", link: "/v1/en/" },
  {
    text: "Version",
    items: [
      { text: "v1 (Current)", link: "/v1/en/" },
      { text: "v2 (Next)", link: "/v2/en/" },
    ],
  },
],
```

## Sidebar

Configure the sidebar for each section:

```typescript
sidebar: {
  "/v1/en/": [
    {
      text: "Documentation",
      items: [
        { text: "Overview", link: "/v1/en/" },
        { text: "Getting Started", link: "/v1/en/getting-started" },
      ],
    },
  ],
},
```

## Adding Languages

To add a new language:

1. Create a new directory under each version (e.g., `v1/ja/` for Japanese)
2. Add sidebar configuration in `config.ts`
3. Update the `LanguageSwitcher.vue` component

## Custom Containers

The template includes custom markdown containers:

```markdown
::: tip Title
Tip content
:::

::: warning Title
Warning content
:::

::: danger Title
Danger content
:::

::: details Title
Collapsible content
:::
```

## Styling

Customize styles in `docs/.vitepress/theme/style.css`:

```css
:root {
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
  --vp-c-brand-3: #535bf2;
}
```

