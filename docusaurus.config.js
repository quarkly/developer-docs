module.exports = {
  title: "Quarkly docs",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/documentation/",
  plugins: [
    // ...
    require.resolve("docusaurus-lunr-search"),
  ],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "quarkly-team", // Usually your GitHub org/user name.
  projectName: "quarkly-docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },

    navbar: {
      title: "documentation",
      logo: {
        alt: "My Site Logo",
        src:
          "/img/quarkly-beta-sign-on-dark.svg",
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Spectrum",
              href: "https://spectrum.chat/quarkly",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/quarklyapp",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/AevfxmF3TM",
            },
            {
              label: "Github",
              href: "https://github.com/quarkly",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/AevfxmF3TM",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/quarklyapp",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
