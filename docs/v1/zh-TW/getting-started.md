# 快速開始

本指南將幫助您開始使用此 VitePress 模板。

## 前置要求

- Node.js 18+（推薦：使用 Volta 管理的 22.x）
- pnpm 套件管理器

## 安裝

1. 使用此模板在 GitHub 上創建新倉庫
2. 克隆您的新倉庫
3. 安裝依賴：

```bash
pnpm install
```

## 開發

啟動開發伺服器：

```bash
pnpm dev
```

網站將在 `http://localhost:5173` 可用。

## 構建

構建生產版本：

```bash
pnpm build
```

預覽生產構建：

```bash
pnpm preview
```

## 專案結構

```
docs/
├── .vitepress/
│   ├── config.ts          # 網站配置
│   ├── markdown/
│   │   └── containers.ts  # 自訂 Markdown 容器
│   └── theme/
│       ├── index.ts       # 主題入口
│       ├── style.css      # 自訂樣式
│       └── components/    # Vue 組件
├── v1/                    # 版本 1 文件
│   ├── en/               # 英文
│   ├── zh/               # 簡體中文
│   └── zh-TW/            # 繁體中文
├── v2/                    # 版本 2 文件
├── examples/              # 範例內容
├── resources/             # 資源展示
├── public/               # 靜態資源
└── index.md              # 首頁
```

## 下一步

- [配置](./configuration.md) - 了解如何配置網站
- [範例](/examples/zh-TW/) - 查看範例內容

