import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/what-is-gas-preprotools',
        'getting-started/system-requirements',
        'getting-started/installation',
        'getting-started/your-first-project',
      ],
    },
    {
      type: 'category',
      label: 'Script Tab',
      items: [
        'script-tab/importing-a-final-draft-script',
        'script-tab/editing-the-script',
        'script-tab/generating-page-breaks',
        'script-tab/generating-scene-markers',
        'script-tab/shot-markers',
      ],
    },
    {
      type: 'category',
      label: 'Blocking',
      items: [
        'blocking/starting-a-blocking-session',
        'blocking/animating-characters',
        'blocking/the-cast-panel',
        'blocking/director-view',
        'blocking/saving-and-exiting-blocking',
      ],
    },
    {
      type: 'category',
      label: 'Shot Design',
      items: [
        'shot-design/placing-cameras',
        'shot-design/the-shot-list',
        'shot-design/understanding-the-status-dot',
      ],
    },
    {
      type: 'category',
      label: 'Build & Watch',
      items: [
        'build-and-watch/building-a-scene-sequence',
        'build-and-watch/watch-mode',
        'build-and-watch/blocking-vs-previs-sequences',
        'build-and-watch/animating-cameras',
      ],
    },
    {
      type: 'category',
      label: 'Project Settings',
      items: [
        'project-settings/project-preferences',
        'project-settings/scene-and-shot-numbering',
        'project-settings/render-settings',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/script-wont-import',
        'troubleshooting/blocking-level-wont-load',
        'troubleshooting/scene-sequence-out-of-sync',
        'troubleshooting/faq',
      ],
    },
  ],
};

export default sidebars;
