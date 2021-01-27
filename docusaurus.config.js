module.exports = {
  title: 'Quarkly docs',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/documentation/',
  plugins: [
    // ...
    require.resolve('docusaurus-lunr-search')
  ],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'quarkly-team', // Usually your GitHub org/user name.
  projectName: 'quarkly-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-beta-logo-on-dark.svg?v=2020-10-30T09:51:10.304Z',
      },
      // items: [
      //   {
      //     to: 'docs/',
      //     activeBasePath: 'docs',
      //     label: 'Docs',
      //     position: 'left',
      //   },
      //   // {to: 'blog', label: 'Blog', position: 'left'},
      //   // {
      //   //   href: 'https://github.com/facebook/docusaurus',
      //   //   label: 'GitHub',
      //   //   position: 'right',
      //   // },
      // ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
