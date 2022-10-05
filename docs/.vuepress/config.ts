import { defineConfig } from 'vitepress'
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
      ]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ]
}


const config = {
  base: '/docs/',
  title: "Smarty-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar,
    siteTitle: 'Smarty-UI',
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },
  // markdown:{
  //   config:(md)=>{
  //     // 添加DemoBlock插槽
  //     // const {demoBlockPlugin} =
  //   }
  // }
}

export default defineConfig(config)