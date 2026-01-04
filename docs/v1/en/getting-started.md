# Getting Started

This guide will help you get started with this VitePress template.

## Prerequisites

- Node.js 18+ (recommended: 22.x with Volta)
- pnpm package manager

## Installation

1. Use this template to create a new repository on GitHub
2. Clone your new repository
3. Install dependencies:

```bash
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`.

## Building

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Project Structure

```
docs/
├── .vitepress/
│   ├── config.ts          # Site configuration
│   ├── markdown/
│   │   └── containers.ts  # Custom markdown containers
│   └── theme/
│       ├── index.ts       # Theme entry
│       ├── style.css      # Custom styles
│       └── components/    # Vue components
├── v1/                    # Version 1 docs
│   ├── en/               # English
│   ├── zh/               # Simplified Chinese
│   └── zh-TW/            # Traditional Chinese
├── v2/                    # Version 2 docs
├── examples/              # Example content
├── resources/             # Resource gallery
├── public/               # Static assets
└── index.md              # Homepage
```

## Next Steps

- [Configuration](./configuration.md) - Learn how to configure the site
- [Examples](/examples/en/) - See example content

