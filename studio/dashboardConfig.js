export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61a47218409ba8171e0f0810',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-esuikw3p',
                  apiId: '9466df94-a487-48e9-a2c9-218629f7fef2'
                },
                {
                  buildHookId: '61a472186ee8416664e23dc7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-mdvswoj4',
                  apiId: '234078d0-37ab-4adb-aba0-2da54ed269e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justtrustbit710/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-mdvswoj4.netlify.app', category: 'apps'}
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
