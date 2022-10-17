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
          editUrl: 'https://github.com/Raptor3um/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    // @ts-ignore
    function customPlugin(context, options) {
      return {
        name: 'custom-plugin',
        configureWebpack(config, isServer, utils) {
          const { getCacheLoader } = utils;
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Raptoreum Docs',
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
                href: 'https://discord.gg/raptoreum',
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
            title: 'GitHub',
            items: [
              {
                label: 'RaptoreumCore',
                href: 'https://github.com/Raptor3um/raptoreum',
              },
              {
                label: 'Raptoreum Docs',
                href: 'https://github.com/Raptor3um/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Raptoreum team`,

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
