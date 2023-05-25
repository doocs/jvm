module.exports = {
  lang: 'zh-CN',
  title: 'JVM 底层原理最全知识总结',
  description: 'Doocs开源社区',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://avatars.githubusercontent.com/u/43716716?s=200&v=4',
      },
    ],
  ],
  base: '/jvm/',
  themeConfig: {
    repo: 'doocs/jvm',
    logo: 'https://avatars.githubusercontent.com/u/43716716?s=200&v=4',
    open: true,
    contributorsText: '贡献者',
    docsDir: 'docs',
    editLinkText: '编辑',
    lastUpdatedText: '最近更新时间',
    locales: {
      '/': {
        tip: '说明',
        warning: '注意',
        danger: '警告',
      },
    },
    sidebar: [
      {
        text: '指南',
        children: [
          '/00-quickstart.md',
          '/01-jvm-memory-structure.md',
          '/02-hotspot-jvm-object.md',
          '/03-gc-algorithms.md',
          '/04-hotspot-gc.md',
          '/05-memory-allocation-gc.md',
          '/06-jvm-performance-tuning.md',
          '/07-class-structure.md',
          '/08-load-class-time.md',
          '/09-load-class-process.md',
          '/10-class-loader.md',
        ],
      },
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        isSearchable: page => page.path !== '/',
      },
    ],
  ],
};
