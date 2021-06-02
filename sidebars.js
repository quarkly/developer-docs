module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'welcome-to-quarkly',
    },
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'Interface',
      collapsed: false,
      items: [
        'interface/overview',
        {
          type: 'category',
          label: 'Dashboard',
          items: [
            'interface/dashboard/overview',
            'interface/dashboard/create-project',
            'interface/dashboard/open-project',
            'interface/dashboard/remove-project',
            'interface/dashboard/restore-project',
            'interface/dashboard/delete-project',
          ],
        },
        {
          type: 'category',
          label: 'Top Bar',
          items: [
            'interface/top-bar/overview',
            'interface/top-bar/share',
            'interface/top-bar/preview',
            {
              type: 'category',
              label: 'Publication',
              items: [
                'interface/top-bar/publication/overview',
                'interface/top-bar/publication/structure',
                'interface/top-bar/publication/destination',
                'interface/top-bar/publication/publication',
                'interface/top-bar/publication/domain',
              ],
            },
            'interface/top-bar/account',
          ],
        },
        {
          type: 'category',
          label: 'Work Area',
          items: [
            'interface/work-area/overview',
            {
              type: 'category',
              label: 'View Bar',
              items: [
                'interface/work-area/view-bar/overview',
                'interface/work-area/view-bar/zoom',
                'interface/work-area/view-bar/resolutions',
                'interface/work-area/view-bar/breakpoints',
              ],
            },
            {
              type: 'category',
              label: 'Adding Panel',
              items: [
                'interface/work-area/elements/overview',
                {
                  type: 'category',
                  label: 'Primitives',
                  items: [
                    'interface/work-area/elements/primitives/overview',
                    'interface/work-area/elements/primitives/box',
                    'interface/work-area/elements/primitives/button',
                    'interface/work-area/elements/primitives/hr',
                    'interface/work-area/elements/primitives/icon',
                    'interface/work-area/elements/primitives/image',
                    'interface/work-area/elements/primitives/input',
                    'interface/work-area/elements/primitives/link',
                    'interface/work-area/elements/primitives/list',
                    'interface/work-area/elements/primitives/section',
                    'interface/work-area/elements/primitives/text',
                  ],
                },
                'interface/work-area/elements/components',
                'interface/work-area/elements/catalog',
              ],
            },
            'interface/work-area/pages-and-layers',
            'interface/work-area/page',
            'interface/work-area/selection',
            'interface/work-area/edit',
            {
              type: 'category',
              label: 'Props panel',
              items: [
                'interface/work-area/props-panel/overview',
                'interface/work-area/props-panel/styles',
                'interface/work-area/props-panel/props',
                'interface/work-area/props-panel/tips-and-tricks',
              ],
            },
            'interface/work-area/context-menu',
            {
              type: 'category',
              label: 'Theme',
              items: [
                'interface/work-area/theme/overview',
                'interface/work-area/theme/text-styles',
                'interface/work-area/theme/color-styles',
                'interface/work-area/theme/background-styles',
                'interface/work-area/theme/shadows',
                'interface/work-area/theme/transitions',
                'interface/work-area/theme/transforms',
                'interface/work-area/theme/filters',
                'interface/work-area/theme/breakpoints',
              ],
            },
            {
              type: 'category',
              label: 'Project Settings',
              items: [
                'interface/work-area/project-settings/overview',
                'interface/work-area/project-settings/general',
                'interface/work-area/project-settings/seo',
                'interface/work-area/project-settings/styles',
                {
                  type: 'category',
                  label: 'Custom code',
                  items: [
                    'interface/work-area/project-settings/custom-code/overview',
                    'interface/work-area/project-settings/custom-code/script',
                    'interface/work-area/project-settings/custom-code/meta',
                    'interface/work-area/project-settings/custom-code/style',
                    'interface/work-area/project-settings/custom-code/link',
                  ],
                },
                'interface/work-area/project-settings/dependencies',
              ],
            },
            {
              type: 'category',
              label: 'Code editor',
              items: [
                'interface/work-area/code-editor/overview',
                'interface/work-area/code-editor/add-components',
                'interface/work-area/code-editor/add-properties',
                'interface/work-area/code-editor/add-states',
                'interface/work-area/code-editor/add-styles',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Components',
          items: [
            'interface/components/overview',
            'interface/components/add',
            'interface/components/actions',
            'interface/components/code-editor',
          ],
        },
        'interface/shortcuts',
      ],
    },
    {
      type: 'doc',
      id: 'tutorials',
    },
    {
      type: 'doc',
      id: 'how-to',
    },
    {
      type: 'doc',
      id: 'resources',
    },
  ],
};
