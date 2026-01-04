# VitePress 多语言模板

一个支持多语言、版本化文档结构和自定义组件的 VitePress 模板。

[English](./README.md)

## 功能特点

- **多语言支持** - 内置英文、简体中文和繁体中文支持
- **版本化结构** - 按产品版本（v1、v2 等）组织文档
- **语言切换器** - 自定义 Vue 组件，实现无缝语言切换
- **自定义容器** - 增强的 Markdown 容器（提示、警告、危险、详情）
- **现代技术栈** - 基于 VitePress 2.0 和 Vue 3.5 构建

## 快速开始

### 使用此模板

1. 点击 GitHub 上的 "Use this template" 按钮
2. 克隆您的新仓库
3. 安装依赖：

```bash
pnpm install
```

4. 启动开发服务器：

```bash
pnpm dev
```

### 手动设置

```bash
# 克隆仓库
git clone https://github.com/your-username/vitepress-i18n-template.git
cd vitepress-i18n-template

# 安装依赖
pnpm install

# 启动开发
pnpm dev
```

## 项目结构

```
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # 站点配置
│   │   ├── markdown/
│   │   │   └── containers.ts  # 自定义 Markdown 容器
│   │   └── theme/
│   │       ├── index.ts       # 主题入口
│   │       ├── style.css      # 自定义样式
│   │       └── components/
│   │           └── LanguageSwitcher.vue
│   ├── v1/                    # 版本 1 文档
│   │   ├── en/               # 英文
│   │   ├── zh/               # 简体中文
│   │   └── zh-TW/            # 繁体中文
│   ├── v2/                    # 版本 2 文档
│   ├── examples/              # 示例内容
│   ├── resources/             # 资源部分
│   ├── public/               # 静态资源
│   └── index.md              # 首页
├── package.json
└── README.md
```

## 命令

| 命令 | 描述 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm lint:md` | 检查 Markdown 文件 |
| `pnpm lint:md:fix` | 修复 Markdown 检查问题 |

## 自定义

### 站点配置

编辑 `docs/.vitepress/config.ts` 来自定义：

- 站点标题和描述
- 导航和侧边栏
- 社交链接
- 主题设置

### 添加语言

1. 创建新的语言目录（例如，`v1/ja/` 用于日语）
2. 在 `config.ts` 中添加侧边栏配置
3. 在 `LanguageSwitcher.vue` 中更新新语言

### 添加版本

1. 创建新的版本目录（例如，`v3/en/`、`v3/zh/`、`v3/zh-TW/`）
2. 为新版本添加侧边栏配置
3. 在 `config.ts` 中更新导航

### 自定义容器

在文档中使用自定义 Markdown 容器：

```markdown
::: tip 标题
有用的提示内容
:::

::: warning 标题
警告信息
:::

::: danger 标题
严重警告
:::

::: details 标题
可折叠内容
:::
```

## 技术栈

- [VitePress](https://vitepress.dev/) 2.0.0-alpha.15
- [Vue.js](https://vuejs.org/) 3.5
- [Node.js](https://nodejs.org/) 22.x（通过 Volta）
- [pnpm](https://pnpm.io/) 包管理器

## 部署

### GitHub Pages

1. 设置 GitHub Actions 进行自动部署
2. 在仓库设置中配置 GitHub Pages

### Vercel / Netlify

1. 连接您的仓库
2. 设置构建命令：`pnpm build`
3. 设置输出目录：`docs/.vitepress/dist`

## 许可证

MIT 许可证 - 可以自由使用此模板用于您自己的项目。

## 贡献

欢迎贡献！请随时提交 Pull Request。
