<template>
  <div>
    <div class="animation" />
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
    document.addEventListener('scroll', this.handleScroll)
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
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 500) {
        document.querySelector('.animation').style.zIndex = '-1'
      } else {
        document.querySelector('.animation').style.zIndex = '0'
      }
    }
  }
}
</script>

<style lang="scss">
.animation {
  position: fixed;
  height: 150px;
  width: 150px;
  top: 50%;
  transform: translateY(-50%);
  left: -75px;
  border-radius: 100%;
  background-color: rgb(255, 255, 255, 0.7);
  transition: transform 2s ease-in-out, border-radius 2s ease-in-out;
  animation: squeeze 5s alternate-reverse infinite;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // z-index: -1;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100%;
    left: -50px;
    height: 250px;
    width: 250px;
    background-color: rgb(255, 255, 255, 0.4);
    animation: border 5s alternate-reverse infinite;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100%;
    left: -100px;
    height: 350px;
    width: 350px;
    background-color: rgb(255, 255, 255, 0.2);
    animation: border 5s alternate-reverse infinite;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
@keyframes squeeze {
  0% {
    transform: scale(1);
    border-radius: 100%;
  }
  100% {
    transform: scale(1.2);
    border-radius: 25% 38% 25% 38%;
  }
}
@keyframes border {
  0% {
    border-radius: 100%;
  }
  100% {
    border-radius: 25% 38% 25% 38%;
  }
}
</style>
