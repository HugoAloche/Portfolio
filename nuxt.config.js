/* eslint-disable no-useless-escape */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hugo Aloche - Portoflio développeur web full stack',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
    '@nuxtjs/redirect-module',
    '@nuxtjs/recaptcha',
    [
      'nuxt-mail',
      {
        message: {
          to: 'haloche035@gmail.com'
        },
        smtp: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'h.aloche@optic-performance.com',
            pass: '7wOtn2Awiq2;;NbK]rS?'
          }
        }
      }
    ]
  ],
  axios: {
    credentials: false
  },
  sitemap: {
    hostname: 'https://portfolio-hugo.herokuapp.com',
    exclude: ['/loading', '/mentions']
  },
  recaptcha: {
    siteKey: '6LdOqOkfAAAAACfvNOSeYqziF-GtiH5aXIJ4zTGG',
    version: 3 // Version
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[name].[ext]')
    }
  },
  redirect: [
    {
      from: '(?!^/$|^/[?].*$)(.*/[?](.*)$|.*/$)',
      to: (from, req) => {
        const base = req._parsedUrl.pathname.replace(/\/$/, '')
        const search = req._parsedUrl.search
        return base + (search != null ? search : '')
      }
    }
  ]
}
