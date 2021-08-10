export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61130daa83d247184d4633ca',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-huo7newm',
                  apiId: 'c5d5d35e-3d2a-474b-b771-b932ba5a30c7'
                },
                {
                  buildHookId: '61130daab016ea16d8520ee7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p38si9v1',
                  apiId: '6f003f6e-8034-4ef2-b402-bdc8719c0495'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raviteja66/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p38si9v1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
