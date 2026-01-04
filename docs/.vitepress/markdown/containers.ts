import mdContainer from "markdown-it-container";

// VitePress 使用 MarkdownItAsync，此处使用宽松类型兼容
type MarkdownItLike = Parameters<typeof mdContainer>[0];

/**
 * 注册所有自定义 Markdown 容器
 */
export function registerContainers(md: MarkdownItLike) {
  registerTermContainer(md);
  registerCalloutContainer(md);
  registerFigureContainer(md);
}

/**
 * term 容器 - 术语解释
 * 使用方式: ::: term termTitle
 */
function registerTermContainer(md: MarkdownItLike) {
  md.use(mdContainer, "term", {
    validate(params: string) {
      return /^term(?:\s+.*)?$/.test(params.trim());
    },
    render(tokens: any[], idx: number) {
      const info = tokens[idx].info.trim();
      const match = info.match(/^term(?:\s+(.*))?$/);
      const termTitle = match?.[1]?.trim() || "";

      if (tokens[idx].nesting === 1) {
        return `<div class="term">
  <div class="term-title">${escapeHtml(termTitle)}</div>
  <div class="term-content">\n`;
      }

      return `</div></div>\n`;
    },
  });
}

/**
 * callout 容器 - Notion 风格提示框
 * 使用方式: ::: callout / ::: callout-red / ::: callout-blue ...
 */
function registerCalloutContainer(md: MarkdownItLike) {
  md.use(mdContainer, "callout", {
    validate(params: string) {
      return /^callout(?:-[a-z]+)?(?:\s+.*)?$/.test(params.trim());
    },
    render(tokens: any[], idx: number) {
      const info = tokens[idx].info.trim();

      // info: "callout-blue icon=/x.svg alt=xx" 或 "callout-blue 🔥"
      const m = info.match(/^callout(?:-([a-z]+))?(?:\s+(.*))?$/);
      const colorType = (m?.[1] || "default").toLowerCase();
      const rest = (m?.[2] || "").trim();

      if (tokens[idx].nesting === 1) {
        const iconPath = pickAttr(rest, "icon");
        const alt = pickAttr(rest, "alt") || "icon";
        const size = pickAttr(rest, "size") || "28";
        const emoji = !iconPath ? rest || "💡" : "";

        const iconHtml = iconPath
          ? `<img class="notion-callout-icon-img" src="${escapeHtml(
              iconPath
            )}" alt="${escapeHtml(alt)}"${
              size
                ? ` width="${escapeHtml(size)}" height="${escapeHtml(size)}"`
                : ""
            } />`
          : `<span class="notion-callout-icon-emoji" aria-hidden="true">${escapeHtml(
              emoji
            )}</span>`;

        return `<div class="notion-callout ${escapeHtml(colorType)}">
  <div class="notion-callout-icon">${iconHtml}</div>
  <div class="notion-callout-content">\n`;
      }

      return `</div></div>\n`;
    },
  });
}

/**
 * figure 容器 - 居中图片
 * 使用方式: ::: figure
 */
function registerFigureContainer(md: MarkdownItLike) {
  md.use(mdContainer, "figure", {
    validate(params: string) {
      return !!params.trim().match(/^figure(\s+.*)?$/);
    },
    render(tokens: any[], idx: number) {
      if (tokens[idx].nesting === 1) {
        return '<figure class="figure-center">\n';
      } else {
        return "</figure>\n";
      }
    },
  });
}

// ============ 工具函数 ============

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function pickAttr(input: string, name: string) {
  // 支持：icon=/a.png  或  icon="/a.png"  或 icon='/a.png'
  const re = new RegExp(
    String.raw`(?:^|\s)${name}=(?:"([^"]+)"|'([^']+)'|([^\s]+))`
  );
  const m = input.match(re);
  return (m?.[1] ?? m?.[2] ?? m?.[3] ?? "").trim();
}

