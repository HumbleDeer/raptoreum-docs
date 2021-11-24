// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raptoreum Docs',
  tagline: 'Documentation surrounding Raptoreum',
  url: 'https://docs.raptoreum.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Raptor3um', // Usually your GitHub org/user name.
  projectName: 'raptordocs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    // ...
    '@aldridged/docusaurus-plugin-lunr',
    require.resolve('docusaurus-lunr-search'),
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Raptoreum Documentation',
        logo: {
          alt: 'Ratporeum',
          src: 'img/raptoreum_logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'wallet/intro',
          //   position: 'left',
          //   label: 'Wallet',
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          // {
          //   href: 'https://github.com/Raptor3um/raptoreum',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/docs/general',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/2T8xG7e',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/raptoreum',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Raptor3um/raptoreum',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Raptoreum`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
