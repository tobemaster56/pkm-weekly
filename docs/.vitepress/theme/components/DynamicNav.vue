<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

// 获取当前语言
const currentLang = computed(() => {
  const path = route.path

  // 匹配首页路径 /en/, /zh/, /zh-TW/
  const homeMatch = path.match(/^\/(en|zh|zh-TW)\/?/)
  if (homeMatch) {
    return homeMatch[1]
  }

  // 匹配 section 路径 /weekly/en/xxx, /v2/zh/xxx
  const sectionMatch = path.match(/^\/[^/]+\/(en|zh|zh-TW)/)
  if (sectionMatch) {
    return sectionMatch[1]
  }

  return 'zh' // 默认语言
})

// 导航项配置
const navItems = computed(() => {
  const lang = currentLang.value

  const labels: Record<string, { home: string; weekly: string }> = {
    'en': { home: 'Home', weekly: 'Weekly' },
    'zh': { home: '首页', weekly: '周刊' },
    'zh-TW': { home: '首頁', weekly: '週刊' }
  }

  const l = labels[lang] || labels['zh']

  return [
    { text: l.home, link: `/${lang}/` },
    { text: l.weekly, link: `/weekly/${lang}/` }
  ]
})

// 判断当前路径是否匹配
function isActive(link: string): boolean {
  const path = route.path
  // 首页精确匹配
  if (link.match(/^\/(en|zh|zh-TW)\/$/)) {
    return path === link
  }
  // section 路径前缀匹配
  return path.startsWith(link.replace(/\/$/, ''))
}
</script>

<template>
  <nav id="custom-nav" class="dynamic-nav">
    <a
      v-for="item in navItems"
      :key="item.link"
      :href="item.link"
      :class="['nav-link', { active: isActive(item.link) }]"
    >
      {{ item.text }}
    </a>
  </nav>
</template>

<style scoped>
.dynamic-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-right: 24px;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--vp-c-brand-1);
}

.nav-link.active {
  color: var(--vp-c-brand-1);
}
</style>

