/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// const path = require('path');

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

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
  projectName: 'docs', // Usually your repo name.
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
          // editUrl: 'https://github.com/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    '@aldridged/docusaurus-plugin-lunr',
    require.resolve('docusaurus-lunr-search'),
    // @ts-ignore
    function customPlugin(context, options) {
      return {
        name: 'custom-plugin',
        configureWebpack(config, isServer, utils) {
          const {getCacheLoader} = utils;
          return {
            module: {
              rules: [
                // {
                //   test: /\.foo$/,
                //   use: [getCacheLoader(isServer), 'my-custom-webpack-loader'],
                // },
                {
                  test: /\.pdf$/,
                  use: ['file-loader'],
                },
                {
                  test: /\.node$/,
                  use: ['node-loader'],
                }
              ],
            },
          };
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // colorMode: {
      //   defaultMode: 'light',
      //   disableSwitch: false,
      //   respectPrefersColorScheme: false,
      //   switchConfig: {
      //     darkIcon: '🌙',
      //     darkIconStyle: {
      //       marginLeft: '2px',
      //     },
      //     // Unicode icons such as '\u2600' will work
      //     // Unicode with 5 chars require brackets: '\u{1F602}'
      //     lightIcon: '\u{1F602}',
      //     lightIconStyle: {
      //       marginLeft: '1px',
      //     },
      // colorMode: { DEPRECATED
      //   switchConfig: {
      //     darkIcon: '🌑',
      //     darkIconStyle: {
      //       marginLeft: '2px',
      //       paddingRight: '2px',
      //     },
      //     lightIcon: '💡',
      //   }
      // },
      navbar: {
        // style: 'dark',
        title: 'Raptoreum Documentation',
        logo: {
          alt: 'Raptoreum',
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
            title: 'Links',
            items: [
              {
                label: 'Homepage',
                to: 'https://www.raptoreum.com',
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
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/raptoreum/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/raptoreum',
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
        // copyright: `Copyright © ${new Date().getFullYear()} Raptoreum`,

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
