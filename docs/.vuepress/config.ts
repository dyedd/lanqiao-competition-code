import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: '蓝桥杯（Web 应用开发）备赛知识库',
  description: '蓝桥杯（Web 应用开发）备赛知识库，染念',
  base:"/lanqiao-competition-code/",

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: './logo.png',
  },
})