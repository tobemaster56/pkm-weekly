# 快速开始

本指南将帮助您开始使用此 VitePress 模板。

## 前置要求

- Node.js 18+（推荐：使用 Volta 管理的 22.x）
- pnpm 包管理器

## 安装

1. 使用此模板在 GitHub 上创建新仓库
2. 克隆您的新仓库
3. 安装依赖：

```bash
pnpm install
```

## 开发

启动开发服务器：

```bash
pnpm dev
```

站点将在 `http://localhost:5173` 可用。

## 构建

构建生产版本：

```bash
pnpm build
```

预览生产构建：

```bash
pnpm preview
```

## 项目结构

```
docs/
├── .vitepress/
│   ├── config.ts          # 站点配置
│   ├── markdown/
│   │   └── containers.ts  # 自定义 Markdown 容器
│   └── theme/
│       ├── index.ts       # 主题入口
│       ├── style.css      # 自定义样式
│       └── components/    # Vue 组件
├── v1/                    # 版本 1 文档
│   ├── en/               # 英文
│   ├── zh/               # 简体中文
│   └── zh-TW/            # 繁体中文
├── v2/                    # 版本 2 文档
├── examples/              # 示例内容
├── resources/             # 资源展示
├── public/               # 静态资源
└── index.md              # 首页
```

## 下一步

- [配置](./configuration.md) - 了解如何配置站点
- [示例](/examples/zh/) - 查看示例内容

