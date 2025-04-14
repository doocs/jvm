import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "jvm",
  description: "Doocs 开源社区",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the CC-BY-SA-4.0 license.',
      copyright: `Copyright © 2018-${new Date().getFullYear()} <a href="https://github.com/doocs">Doocs</a>`
    },
    logo: '/favicon.png',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/doocs/jvm/edit/main/docs/:path',
      text: '在 GitHub 编辑'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    sidebar: [
      {
        items: [
          {
            'text': '开始学习',
            'link': '/00-quickstart'
          },
          {
            'text': 'JVM 内存结构',
            'link': '/01-jvm-memory-structure'
          },
          {
            'text': 'HotSpot 虚拟机对象探秘',
            'link': '/02-hotspot-jvm-object',
          },
          {
            'text': '垃圾收集策略与算法',
            'link': '/03-gc-algorithms'
          },
          {
            'text': 'HotSpot 垃圾收集器',
            'link': '/04-hotspot-gc'
          },
          {
            'text': '内存分配与回收策略',
            'link': '/05-memory-allocation-gc'
          },
          {
            'text': 'JVM 性能调优',
            'link': '/06-jvm-performance-tuning'
          },
          {
            'text': '类文件结构',
            'link': '/07-class-structure'
          },
          {
            'text': '类加载的时机',
            'link': '/08-load-class-time'
          },
          {
            'text': '类加载的过程',
            'link': '/09-load-class-process'
          },
          {
            'text': '类加载器',
            'link': '/10-class-loader'
          }
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/doocs/jvm' }
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-7W625EPRG6' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7W625EPRG6');`
    ]
  ],
  cleanUrls: true,
  sitemap: {
    hostname: 'https://jvm.doocs.org'
  }
})
