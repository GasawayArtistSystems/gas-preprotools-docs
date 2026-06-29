import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GAS PrePro Tools',
  tagline: 'Pre-visualization for film directors — inside Unreal Engine',
  favicon: 'img/favicon.ico',

  url: 'https://GasawayArtistSystems.github.io',
  baseUrl: '/gas-preprotools-docs/',

  organizationName: 'GasawayArtistSystems',
  projectName: 'gas-preprotools-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/GasawayArtistSystems/gas-preprotools-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'GAS PrePro Tools',
      logo: {
        alt: 'GAS PrePro Tools',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/GasawayArtistSystems/GAS_TestProjectCPP',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Getting Started', to: '/getting-started/what-is-gas-preprotools'},
            {label: 'Script Tab', to: '/script-tab/importing-a-final-draft-script'},
            {label: 'Blocking', to: '/blocking/starting-a-blocking-session'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/GasawayArtistSystems/GAS_TestProjectCPP'},
            {label: 'Report a Bug', href: 'https://github.com/GasawayArtistSystems/GAS_TestProjectCPP/issues/new'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gasaway Artist Systems.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
