/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // sidebarDefault: [{ type: 'autogenerated', dirName: '.' }],

  sidebarWallet: [
    {
      type: 'category',
      label: 'Wallet',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'wallet',
        },
      ],
    },
  ],
  sidebarSmartnodes: [
    {
      type: 'category',
      label: 'Smartnodes',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'smartnodes',
        },
        { type: 'ref', id: 'wallet/bootstrap' },
      ],
    },
  ],
  sidebarMining: [
    {
      type: 'category',
      label: 'Mining',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'mining',
        },
      ],
    },
  ],
  sidebarAbout: [
    {
      type: 'category',
      label: 'About RTM',
      collapsible: false,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'raptoreum/what-is-raptoreum',
      },
      items: [

        {
          type: 'category',
          label: 'Whitepapers',
          link: {
            type: 'generated-index',
            title: 'Whitepapers',
            description: 'Read the whitepapers & other legal documentation',
            slug: 'whitepapers',
            keywords: ['whitepaper'],
          },
          items: [
            {
              label: 'Litepaper',
              type: 'link',
              href: '/public/whitepapers/Raptoreum_Litepaper.pdf',
            },
            {
              label: 'RTM Assets',
              type: 'doc',
              id: 'raptoreum/papers/assets-whitepaper',
            },
            {
              label: 'GhostRider Algorithm',
              type: 'link',
              href: '/public/whitepapers/GhostRider_Whitepaper.pdf',
            },
            {
              label: 'RTM Contracts',
              type: 'link',
              href: '/public/whitepapers/Raptoreum_Contracts_Whitepaper_EN.pdf',
            },
            {
              label: 'Reward Structure',
              type: 'link',
              href: '/public/whitepapers/Raptoreum_Rewards_Structure_Whitepaper.pdf',
            },
          ],
        },
        {
          label: 'RTM Futures',
          type: 'doc',
          id: 'raptoreum/futures',
        },
        {
          label: 'Exchanges',
          type: 'doc',
          id: 'raptoreum/exchanges',
        },
        {
          label: 'Shared nodes',
          type: 'doc',
          id: 'raptoreum/shared-nodes',
        },
        {
          label: 'Social Media',
          type: 'doc',
          id: 'raptoreum/raptoreumsocial',
        },
      ],
    },
  ]
};

module.exports = sidebars;
