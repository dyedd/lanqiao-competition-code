import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import sidebar from './configs/sidebar'
import navbar from './configs/navbar'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: '蓝桥杯（Web 应用开发）备赛知识库',
  description: '欢迎来到蓝桥杯（Web 应用开发）备赛知识库',
  base:"/lanqiao-competition-code/",
  head: [
    ['link', { rel: 'icon', href: './logo.png' }]
  ],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: './logo.png',
    sidebar: sidebar,
    navbar: navbar,
  },
})