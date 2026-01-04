// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import DynamicNav from './components/DynamicNav.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-content-before': () => h(DynamicNav),
      'nav-bar-content-after': () => h(LanguageSwitcher)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('LanguageSwitcher', LanguageSwitcher)
    app.component('DynamicNav', DynamicNav)
  }
} satisfies Theme
