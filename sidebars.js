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
          label: 'View Bar',
          items: [
            'interface/view-bar/overview',
            'interface/view-bar/zoom',
            'interface/view-bar/resolutions',
            'interface/view-bar/breakpoints',
          ],
        },
        {
          type: 'category',
          label: 'Left Panels',
          items: [
            'interface/left-panels/overview',
            {
              type: 'category',
              label: 'Adding Panel',
              items: [
                'interface/left-panels/adding-panel/overview',
                {
                  type: 'category',
                  label: 'Primitives',
                  items: [
                    'interface/left-panels/adding-panel/primitives/overview',
                    'interface/left-panels/adding-panel/primitives/box',
                    'interface/left-panels/adding-panel/primitives/button',
                    'interface/left-panels/adding-panel/primitives/hr',
                    'interface/left-panels/adding-panel/primitives/icon',
                    'interface/left-panels/adding-panel/primitives/image',
                    'interface/left-panels/adding-panel/primitives/input',
                    'interface/left-panels/adding-panel/primitives/link',
                    'interface/left-panels/adding-panel/primitives/list',
                    'interface/left-panels/adding-panel/primitives/section',
                    'interface/left-panels/adding-panel/primitives/text',
                  ],
                },
                'interface/left-panels/adding-panel/components',
                'interface/left-panels/adding-panel/catalog',
              ],
            },
            'interface/left-panels/pages-and-layers',
            {
              type: 'category',
              label: 'Code editor',
              items: [
                'interface/left-panels/code-editor/overview',
                'interface/left-panels/code-editor/add-components',
                'interface/left-panels/code-editor/add-properties',
                'interface/left-panels/code-editor/add-states',
                'interface/left-panels/code-editor/add-styles',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Page',
          items: [
            'interface/page/overview',
            'interface/page/adding-elements',
            'interface/page/editing-elements',
            'interface/page/select-elements',
          ],
        },
        {
          type: 'category',
          label: 'Right Panels',
          items: [
            'interface/right-panels/overview',
            {
              type: 'category',
              label: 'Theme',
              items: [
                'interface/right-panels/theme/overview',
                'interface/right-panels/theme/text-styles',
                'interface/right-panels/theme/color-styles',
                'interface/right-panels/theme/background-styles',
                'interface/right-panels/theme/shadows',
                'interface/right-panels/theme/transitions',
                'interface/right-panels/theme/transforms',
                'interface/right-panels/theme/filters',
                'interface/right-panels/theme/breakpoints',
              ],
            },
            {
              type: 'category',
              label: 'Props panel',
              items: [
                'interface/right-panels/props-panel/overview',
                'interface/right-panels/props-panel/styles',
                'interface/right-panels/props-panel/props',
                'interface/right-panels/props-panel/tips-and-tricks',
              ],
            },
            {
              type: 'category',
              label: 'Project Settings',
              items: [
                'interface/right-panels/project-settings/overview',
                'interface/right-panels/project-settings/general',
                'interface/right-panels/project-settings/seo',
                'interface/right-panels/project-settings/styles',
                {
                  type: 'category',
                  label: 'Custom code',
                  items: [
                    'interface/right-panels/project-settings/custom-code/overview',
                    'interface/right-panels/project-settings/custom-code/script',
                    'interface/right-panels/project-settings/custom-code/meta',
                    'interface/right-panels/project-settings/custom-code/style',
                    'interface/right-panels/project-settings/custom-code/link',
                  ],
                },
                'interface/right-panels/project-settings/dependencies',
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
        'interface/context-menu',
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
