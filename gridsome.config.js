// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '哒哒哒前端老司机',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://118.24.113.225:8081/',
        queryLimit: 1000,
        typeName: 'Strapi',
        contentTypes: [
          'post', 'tag'
        ]
      }
    }
  ],
  templates: {
    StrapiPost: [
      {
        path: '/detail/:id',
        component: './src/templates/Detail.vue'
      }
    ]
  }
}
