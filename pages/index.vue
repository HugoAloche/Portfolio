<template>
  <BaseComponents>
    <template #main>
      <section>
        <div class="container">
          <div class="content">
            <img
              id="logo"
              src="../assets/images/logo.webp"
              alt="Logo du portoflio de Hugo Aloche"
            >
            <div>
              <h1 id="title" class="title">
                Hugo Aloche
              </h1>
              <p id="subtitle" class="subtitle">
                Développeur fullstack
              </p>
            </div>
          </div>
          <ul id="stacks">
            <li>
              <abbr title="HTML 5"><i class="devicon-html5-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="CSS 3"><i class="devicon-css3-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="SASS"><i class="devicon-sass-original colored" /></abbr>
            </li>
            <li>
              <abbr title="Java Script"><i class="devicon-javascript-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="NodeJs"><i class="devicon-nodejs-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="React"><i class="devicon-react-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="PHP"><i class="devicon-php-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="SQL"><i class="devicon-mysql-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="PYTHON"><i class="devicon-python-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="Vue JS"><i class="devicon-vuejs-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="Nuxt"><i class="devicon-nuxtjs-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="MongoDb"><i class="devicon-mongodb-plain colored" /></abbr>
            </li>
            <li>
              <abbr title="Symfony"><i class="devicon-symfony-original colored" /></abbr>
            </li>
            <li>
              <abbr title="Git"><i class="devicon-git-plain colored" /></abbr>
            </li>
          </ul>
          <a href="#contactSection"><button id="contact" class="button">Contactez-moi</button></a>
        </div>
      </section>
      <section>
        <h2 class="title">
          Mes travaux
          <span class="emoji">💻</span>
        </h2>
        <div class="wrapper between">
          <div class="half">
            <p class="subtitle">
              Projets professionel
            </p>
            <div class="wrapper wrap">
              <Card
                type="pro"
                title="Fly Enterprise"
                subtitle="
              Développeur web de<br>
              2019 à Aujourd'hui"
                image="logo-fly-enterprise.webp"
                link="https://flyenterprise.net"
              />
              <Card
                type="pro"
                title="Optic Performance"
                subtitle="
              Développeur web de <br>
              2022 à Aujourd'hui"
                image="logo-optic-performance.webp"
                link="https://www.optic-performance.com"
              />
            </div>
          </div>
          <div class="half">
            <p class="subtitle">
              Projets d'études
            </p>
            <div class="wrapper wrap">
              <Card
                type="school"
                title="Booki"
                subtitle="Projet de formation, intégration de maquette"
                image="logo-booki.webp"
                link="https://hugoaloche.github.io/Booki/"
                class-img="none"
              />
              <Card
                type="school"
                title="Kanap"
                subtitle="Projet de formation, site marchand"
                image="logo-kanap.webp"
                class-img="none"
              />
              <Card
                type="school"
                title="Groupomania"
                subtitle="Projet de formation, création d'un réseaux social"
                image="logo-groupomania.webp"
              />
              <Card
                type="school"
                title="OhMyFood"
                subtitle="Projet de formation, intégration de maquette"
                image="logo-ohmyfood.webp"
                link="https://hugoaloche.github.io/HugoAloche_3_27012022/"
              />
              <Card
                type="school"
                title="Piquante"
                subtitle="Projet de formation, création d'API Rest"
                image="logo-piquante.webp"
              />
              <Card
                type="school"
                title="API Discord"
                subtitle="Projet perso, travailler avec l'API d'un serveur Discord"
                image="discord.webp"
                link="https://hugoaloche.github.io/Discord-API/"
                class-img="none"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contactSection">
        <h3 class="title">
          Me contacter
          <span class="emoji">📧</span>
        </h3>
        <div class="wrapper">
          <img
            class="item"
            src="../assets/images/letter.svg"
            alt="Illustration d'envoie de courrier"
          >
          <form class="item" action="" method="post" @submit.prevent="send">
            <input
              id="nom"
              v-model="nom"
              class="active"
              type="text"
              name="nom"
              placeholder="Votre nom et prénom *"
              required
            >
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              placeholder="Votre adresse e-mail *"
              required
            >
            <input
              id="tel"
              v-model="tel"
              type="tel"
              name="tel"
              placeholder="Votre numéro de téléphone *"
              required
            >
            <input
              id="objet"
              v-model="objet"
              type="text"
              name="objet"
              placeholder="Sujet de votre message *"
              required
            >
            <textarea
              id="message"
              v-model="message"
              name="message"
              cols="30"
              rows="10"
              placeholder="Votre message *"
              required
            />
            <button class="button" type="submit">
              ENVOYER LE MESSAGE
            </button>
          </form>
        </div>
      </section>
    </template>
  </BaseComponents>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      nom: '',
      email: '',
      tel: '',
      objet: '',
      message: '',
      timeout: null
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'
      }
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "Portfolio d'Hugo Aloche développeur fullstack passionnée par le développement d'applications web prêt à réaliser tous les défis!"
      }
    ]
  },
  async mounted () {
    try {
      await this.$recaptcha.init()
    } catch (e) {}
    const stacks = document.querySelectorAll('#stacks li')
    const logo = document.getElementById('logo')
    const title = document.getElementById('title')
    const subtitle = document.getElementById('subtitle')
    const contactBtn = document.getElementById('contact')
    this.timeout = setTimeout(() => {
      logo.style.opacity = '1'
      logo.style.transform = 'translateY(0)'
      setTimeout(() => {
        title.style.opacity = '1'
        title.style.transform = 'translateY(0)'
        setTimeout(() => {
          subtitle.style.opacity = '1'
          subtitle.style.transform = 'translateY(0)'
          setTimeout(() => {
            stacks.forEach((stack, index) => {
              setTimeout(() => {
                stack.style.opacity = '1'
                stack.style.transform = 'translateY(0)'
                setTimeout(() => {
                  contactBtn.style.opacity = '1'
                  contactBtn.style.transform = 'translateY(0)'
                }, 3000)
              }, index * 200)
            })
          }, 600)
        }, 600)
      }, 600)
    }, 400)
  },
  beforeDestroy () {
    this.$recaptcha.destroy()
    clearTimeout(this.timeout)
  },
  methods: {
    async send () {
      await this.$recaptcha.execute('login')
      this.GestionPromesse(
        this.$mail.send({
          from: 'haloche035@gmail.com',
          replyTo: this.email,
          subject: this.objet,
          text: `Nom : ${this.nom}\nEmail : ${this.email}\nTéléphone : ${this.tel}\nSujet : ${this.objet}\nMessage : ${this.message}`
        })
      )
      this.nom = ''
      this.email = ''
      this.tel = ''
      this.objet = ''
      this.message = ''
    },
    GestionPromesse (promise) {
      const toast = this.$toast
      promise.then(
        function () {
          toast.success('Envoie réussi !', {
            timeout: 3000
          })
        },
        function () {
          toast.error("Échec de l'envoie.", {
            timeout: 3000
          })
        }
      )
    }
  }
}
</script>
