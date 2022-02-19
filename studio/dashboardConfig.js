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
                  buildHookId: '62117bedb99f447ed1cb767c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-c9p4ejwm',
                  apiId: '4d16a42a-7c85-4d3e-8127-739ea27c208c'
                },
                {
                  buildHookId: '62117bedc302d4dc83f1bf1c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-39skexk6',
                  apiId: '776c4b27-920b-4f1a-b6f0-fcfdad60ad47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BryanSchuetz/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-39skexk6.netlify.app', category: 'apps'}
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
