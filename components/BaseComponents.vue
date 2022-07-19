<template>
  <div>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <ul>
        <li>Informations</li>
        <li>Mentions légales</li>
        <li>Version : 2.0</li>
      </ul>
      <ul>
        <li>Mes réseaux</li>
        <li>
          <a
            href="https://github.com/HugoAloche"
            target="_blank"
            rel="noopener noreferrer"
            title="lien vers github"
          ><i class="devicon-github-original" /></a>
          <a
            href="https://discord.gg/gseaf2ZfVs"
            target="_blank"
            rel="noopener noreferrer"
            title="lien vers mon serveur discord"
          ><img
            src="../assets/images/discord.webp"
            alt="logo discord"
          ></a>
          <a
            href="https://www.linkedin.com/in/hugo-aloche/"
            target="_blank"
            rel="noopener noreferrer"
            title="lien vers linkedin"
          ><i class="devicon-linkedin-plain" /></a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
if (process.browser) {
  window.axeptioSettings = {
    clientId: '627f7fb5df797dcf02331b77'
  }
  ;(function (d, s) {
    const t = d.getElementsByTagName(s)[0]
    const e = d.createElement(s)
    e.async = true
    e.src = '//static.axept.io/sdk.js'
    t.parentNode.insertBefore(e, t)
  })(document, 'script')
}
export default {
  name: 'BaseComponents',
  head () {
    let route = this.$route.path
    if (route === '/') {
      route = 'https://portfolio-hugo.herokuapp.com'
    } else {
      route = 'https://portfolio-hugo.herokuapp.com' + route
    }
    return {
      link: [
        {
          rel: 'canonical',
          href: route
        }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-EZFPVETYLH',
          async: true
        }
      ]
    }
  },
  beforeMount () {
    function loadGoogleAnalyticsTag () {
      window.dataLayer = window.dataLayer || []
      function gtag () {
        // eslint-disable-next-line no-undef
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'G-EZFPVETYLH')
    }
    // eslint-disable-next-line no-void
    void 0 === window._axcb && (window._axcb = [])
    window._axcb.push(function (axeptio) {
      axeptio.on('cookies:complete', function (choices) {
        if (choices.google_analytics) {
          loadGoogleAnalyticsTag()
        }
      })
      axeptio.on('consent:saved', function (choices) {
        if (choices.google_analytics) {
          loadGoogleAnalyticsTag()
        }
      })
    })
  }
}
</script>
