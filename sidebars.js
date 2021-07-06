module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/overview',
        'components/creating',
        'components/importing',
        'components/structure',
        {
          type: 'category',
          label: 'How to Create Components Using Atomize',
          items: [
            'components/atomize/overview',
            'components/atomize/creating-component',
            'components/atomize/adding-effects',
            'components/atomize/using-breakpoints',
          ],
        },
        {
          type: 'category',
          label: 'Project API',
          items: [
            'components/project-api/overview',
            'components/project-api/getting-styles',
            'components/project-api/getting-theme',
          ],
        },
        {
          type: 'category',
          label: 'Properties',
          items: [
            'components/properties/overview',
            'components/properties/propinfo-object',
            'components/properties/default-props',
          ],
        },
        {
          type: 'category',
          label: 'Overrides',
          items: [
            'components/overrides/overview',
            'components/overrides/adding-overrides',
            'components/overrides/creating-overrides',
            'components/overrides/using-overrides',
            'components/overrides/exporting-overrides',
            'components/overrides/example-components-with-overrides',
            'components/overrides/example-imported-components',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/overview',
        'tutorials/create-a-counter',
        'tutorials/create-component-from-npm',
        'tutorials/create-card-component',
        'tutorials/make-a-staff-files',
        'tutorials/create-an-entertaining-app',
      ],
    },
    {
      type: 'category',
      label: 'How-to\'s',
      items: [
        'how-to/overview',
        'how-to/component-content',
        'how-to/process-events',
        'how-to/keyframe-animation',
      ],
    },
    {
      type: 'category',
      label: 'FAQ\'s',
      items: [
        'faq/overview',
        'faq/general',
        'faq/atomize',
        'faq/overrides',
        'faq/properties',
      ],
    },
    {
      type: 'doc',
      id: 'resources',
    },
  ],
};
