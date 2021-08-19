export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '611eb8baf0e0fa54b2da66a7',
                  title: 'Sanity Studio',
                  name: '11-ty-sanity-netlify-studio',
                  apiId: 'dc1b0b08-95e3-4978-884e-55ffae599cb1'
                },
                {
                  buildHookId: '611eb8ba8d7a64558c298bd4',
                  title: 'Blog Website',
                  name: '11-ty-sanity-netlify',
                  apiId: '204ca991-099d-4b86-b98f-7fbaa688af73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robpetrin/11ty-sanity-netlify',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://11-ty-sanity-netlify.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
