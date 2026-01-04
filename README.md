# VitePress i18n Template

A VitePress template with multi-language support, version-based documentation structure, and custom components.

[中文文档](./README_zh.md)

## Features

- **Multi-language Support** - Built-in support for English, Simplified Chinese, and Traditional Chinese
- **Version-based Structure** - Organize documentation by product versions (v1, v2, etc.)
- **Language Switcher** - Custom Vue component for seamless language switching
- **Custom Containers** - Enhanced markdown containers (tip, warning, danger, details)
- **Modern Stack** - Built with VitePress 2.0 and Vue 3.5

## Quick Start

### Use This Template

1. Click the "Use this template" button on GitHub
2. Clone your new repository
3. Install dependencies:

```bash
pnpm install
```

4. Start development server:

```bash
pnpm dev
```

### Manual Setup

```bash
# Clone the repository
git clone https://github.com/your-username/vitepress-i18n-template.git
cd vitepress-i18n-template

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## Project Structure

```
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # Site configuration
│   │   ├── markdown/
│   │   │   └── containers.ts  # Custom markdown containers
│   │   └── theme/
│   │       ├── index.ts       # Theme entry
│   │       ├── style.css      # Custom styles
│   │       └── components/
│   │           └── LanguageSwitcher.vue
│   ├── v1/                    # Version 1 docs
│   │   ├── en/               # English
│   │   ├── zh/               # Simplified Chinese
│   │   └── zh-TW/            # Traditional Chinese
│   ├── v2/                    # Version 2 docs
│   ├── examples/              # Example content
│   ├── resources/             # Resources section
│   ├── public/               # Static assets
│   └── index.md              # Homepage
├── package.json
└── README.md
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint:md` | Lint markdown files |
| `pnpm lint:md:fix` | Fix markdown lint issues |

## Customization

### Site Configuration

Edit `docs/.vitepress/config.ts` to customize:

- Site title and description
- Navigation and sidebar
- Social links
- Theme settings

### Adding Languages

1. Create new language directories (e.g., `v1/ja/` for Japanese)
2. Add sidebar configuration in `config.ts`
3. Update `LanguageSwitcher.vue` with the new language

### Adding Versions

1. Create new version directories (e.g., `v3/en/`, `v3/zh/`, `v3/zh-TW/`)
2. Add sidebar configuration for the new version
3. Update navigation in `config.ts`

### Custom Containers

Use custom markdown containers in your docs:

```markdown
::: tip Title
Helpful tip content
:::

::: warning Title
Warning message
:::

::: danger Title
Critical warning
:::

::: details Title
Collapsible content
:::
```

## Tech Stack

- [VitePress](https://vitepress.dev/) 2.0.0-alpha.15
- [Vue.js](https://vuejs.org/) 3.5
- [Node.js](https://nodejs.org/) 22.x (via Volta)
- [pnpm](https://pnpm.io/) Package Manager

## Deployment

### GitHub Pages

1. Set up GitHub Actions for automatic deployment
2. Configure the repository settings for GitHub Pages

### Vercel / Netlify

1. Connect your repository
2. Set build command: `pnpm build`
3. Set output directory: `docs/.vitepress/dist`

## License

MIT License - feel free to use this template for your own projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
