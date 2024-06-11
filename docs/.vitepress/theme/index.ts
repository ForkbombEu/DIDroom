// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import matomo from "@datagouv/vitepress-plugin-matomo";
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp: ({ app, router, siteData })  => {
    matomo({
      router: router,
      siteID: 9, // Replace with your site id
      trackerUrl: "https://matomo.dyne.org/" // Replace with your matomo url
    })
  }
}  satisfies Theme

