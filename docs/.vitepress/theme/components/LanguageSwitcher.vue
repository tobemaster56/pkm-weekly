<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

// Language configuration
const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' }
]

// Parse current path to extract version and language info
const pathInfo = computed(() => {
  const path = route.path
  
  // Match versioned paths like /v1/en/xxx or /v2/zh/xxx
  const versionMatch = path.match(/^\/(v\d+)\/(en|zh|zh-TW)(\/.*)?$/)
  if (versionMatch) {
    return {
      type: 'versioned',
      version: versionMatch[1],
      lang: versionMatch[2],
      rest: versionMatch[3] || '/'
    }
  }
  
  // Match section paths like /examples/en/xxx or /resources/zh/xxx
  const sectionMatch = path.match(/^\/(examples|resources)\/(en|zh|zh-TW)(\/.*)?$/)
  if (sectionMatch) {
    return {
      type: 'section',
      section: sectionMatch[1],
      lang: sectionMatch[2],
      rest: sectionMatch[3] || '/'
    }
  }
  
  return null
})

// Current language
const currentLang = computed(() => {
  return pathInfo.value?.lang || 'en'
})

// Generate language switch link
function getLangLink(langCode: string): string {
  const info = pathInfo.value
  if (!info) return '/'
  
  if (info.type === 'versioned') {
    return `/${info.version}/${langCode}${info.rest}`
  } else if (info.type === 'section') {
    return `/${info.section}/${langCode}${info.rest}`
  }
  
  return '/'
}

// Whether to show language switcher (only on specific paths)
const showSwitcher = computed(() => {
  return pathInfo.value !== null
})
</script>

<template>
  <div v-if="showSwitcher" class="lang-switcher">
    <div class="lang-dropdown">
      <button class="lang-btn">
        <span class="lang-icon">🌐</span>
        <span class="lang-current">{{ languages.find(l => l.code === currentLang)?.label }}</span>
        <span class="lang-arrow">▾</span>
      </button>
      <div class="lang-menu">
        <a
          v-for="lang in languages"
          :key="lang.code"
          :href="getLangLink(lang.code)"
          :class="['lang-item', { active: lang.code === currentLang }]"
        >
          {{ lang.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.lang-dropdown {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}

.lang-btn:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.lang-icon {
  font-size: 16px;
}

.lang-arrow {
  font-size: 10px;
  opacity: 0.6;
}

.lang-menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 120px;
  padding: 4px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: all 0.2s ease;
  z-index: 100;
}

.lang-dropdown:hover .lang-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.lang-item {
  display: block;
  padding: 8px 12px;
  border-radius: 4px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  transition: background 0.2s ease;
}

.lang-item:hover {
  background: var(--vp-c-bg-soft);
}

.lang-item.active {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
</style>
