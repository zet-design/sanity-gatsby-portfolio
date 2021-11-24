export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619daba6e6234371c4d18de0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9ps8b6hh',
                  apiId: 'f6b66375-4e18-4183-9deb-4d302fdc0111'
                },
                {
                  buildHookId: '619daba629264e6dfc92d65a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-c95d5rm9',
                  apiId: '03d69d28-ea01-4497-ae86-8ad0f7517675'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zet-design/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-c95d5rm9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
