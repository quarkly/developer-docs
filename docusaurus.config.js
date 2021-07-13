module.exports = {
  title: "Guide for developers",
  tagline: "A tool for building websites and web applications",
  url: "https://developers.quarkly.io/",
  baseUrl: "/",
  plugins: [require.resolve("docusaurus-lunr-search")],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "quarkly-team",
  projectName: "quarkly-docs",
  themeConfig: {
    // image: "/img/q-og-1200.png",
    metadatas: [{ name: "twitter:card", content: "summary" }],
    image: "/img/q-og-1200.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "Guide for developers",
      style: "dark",
      logo: {
        alt: "Quarkly logo",
        src: "/img/quarkly-beta-sign-on-dark.svg",
        srcDark: "/img/quarkly-beta-sign-on-dark.svg",
        href: "/",
        target: "_self",
      },
      hideOnScroll: false,
    },
    footer: {
      style: "dark",
      logo: {
        alt: "My Site Logo",
        src: "/img/quarkly-beta-logo-on-dark.svg",
      },
      links: [
        {
          title: "Quarkly",
          items: [
            {
              label: "Features",
              href: "https://quarkly.io/features",
            },
            {
              label: "Updates",
              href: "https://quarkly.io/updates",
            },
            {
              label: "Pricing",
              href: "https://quarkly.io/pricing",
            },
            {
              label: "Contact",
              href: "https://quarkly.io/contact-form",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/quarklyapp",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/quarklyapp",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
            },
            {
              label: "Github",
              href: "https://github.com/quarkly",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Community",
              href: "https://community.quarkly.io/",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/AevfxmF3TM",
            },
            {
              label: "Feedback",
              href: "https://feedback.quarkly.io/",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} All Rights Reserved`,
    },
    prism: {
      theme: {
        plain: {
          color: "#000000",
          backgroundColor: "#F6F7F8",
        },
        styles: [
          {
            types: ["prolog", "constant", "symbol", "builtin"],
            style: {
              color: "#9C5D27",
            },
          },
          {
            types: ["inserted", "changed", "deleted"],
            style: {
              color: "#000000",
            },
          },
          {
            types: ["function"],
            style: {
              color: "#AA3731",
            },
          },
          {
            types: ["punctuation"],
            style: {
              color: "#91B3E0",
            },
          },
          {
            types: ["tag"],
            style: {
              color: "#4B69C6",
            },
          },
          {
            types: ["string", "char"],
            style: {
              color: "#448C27",
            },
          },
          {
            types: ["selector", "variable"],
            style: {
              color: "#7A3E9D",
            },
          },
          {
            types: ["keyword"],
            style: {
              color: "#4B69C6",
            },
          },
          {
            types: ["comment"],
            style: {
              fontStyle: "italic",
              color: "#AAAAAA",
            },
          },
          {
            types: ["attr-name"],
            style: {
              color: "#8190A0",
            },
          },
        ],
      },
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
          editUrl: "https://github.com/quarkly/developer-docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
