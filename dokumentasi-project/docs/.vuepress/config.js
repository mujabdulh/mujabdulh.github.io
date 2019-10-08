module.exports = {
  title: 'Title Static Web',
  description: 'Deksripsi Static Web',
  themeConfig: {
    docsDir: 'docs',
    logo: '/sampleicon.png',
     nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      { text: 'Group', items: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
      ] }
     ]
  }
}
