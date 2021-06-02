module.exports = {
	title: 'Quarkly docs',
	tagline: 'The tagline of my site',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	plugins: [require.resolve('docusaurus-lunr-search')],
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	organizationName: 'quarkly-team',
	projectName: 'quarkly-docs',
	themeConfig: {
		image: '/img/q-og-1200.png',
		metadatas: [{name: 'twitter:card', content: 'summary'}],
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
		},
		navbar: {
			title: 'Help',
			style: 'dark',
			logo: {
				alt: 'Quarkly logo',
				src: '/img/quarkly-beta-sign-on-dark.svg',
				srcDark: '/img/quarkly-beta-sign-on-dark.svg',
				href: '/',
				target: '_self',
			},
			hideOnScroll: true,
		},
		footer: {
			style: 'dark',
			logo: {
				alt: 'My Site Logo',
				src: '/img/quarkly-beta-logo-on-dark.svg',
			},
			links: [
				{
					title: 'Quarkly',
					items: [
						{
							label: 'Features',
							href: 'https://quarkly.io/features',
						},
						{
							label: 'Updates',
							href: 'https://quarkly.io/updates',
						},
						{
							label: 'Pricing',
							href: 'https://quarkly.io/pricing',
						},
						{
							label: 'Contact',
							href: 'https://quarkly.io/contact-form',
						},
					],
				},
				{
					title: 'Social',
					items: [
						{
							label: 'Facebook',
							href: 'https://www.facebook.com/quarklyapp',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/quarklyapp',
						},
						{
							label: 'Youtube',
							href: 'https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw',
						},
						{
							label: 'Github',
							href: 'https://github.com/quarkly',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Community',
							href: 'https://community.quarkly.io/',
						},
						{
							label: 'Discord',
							href: 'https://discord.com/invite/AevfxmF3TM',
						},
						{
							label: 'Feedback',
							href: 'https://feedback.quarkly.io/',
						},
					],
				},
			],
			copyright: `© ${new Date().getFullYear()} All Rights Reserved`,
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
