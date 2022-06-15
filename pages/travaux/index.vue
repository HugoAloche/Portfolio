<template>
  <BaseComponents>
    <template #main>
      <nuxt-link to="/" class="backLink">
        <img src="../../assets/images/back.svg" alt="bouton retour">
      </nuxt-link>
      <section id="flyenterprise" data-aos="fade-right" data-aos-duration="1000" class="travaux">
        <p class="title">
          video <br> omnia
        </p>
        <p class="subtitle">
          je vois tout
        </p>
        <img src="../../assets/images/logo-fly-enterprise.webp" alt="logo fly enteprise">
      </section>
      <section id="booki" data-aos="fade-left" data-aos-duration="1000" class="travaux">
        <p class="title">
          booki
        </p>
        <p class="subtitle">
          projet de formation
        </p>
        <img src="../../assets/images/logo-booki.png" alt="logo booki">
      </section>
      <section id="ohmyfood" data-aos="fade-right" data-aos-duration="1000" class="travaux">
        <p class="title">
          ohmyfood
        </p>
        <p class="subtitle">
          projet de formation
        </p>
        <img src="../../assets/images/logo-ohmyfood.png" alt="logo ohmyfood">
      </section>
      <section id="kanap" data-aos="fade-left" data-aos-duration="1000" class="travaux">
        <p class="title">
          kanap
        </p>
        <p class="subtitle">
          projet de formation
        </p>
        <img src="../../assets/images/logo-kanap.png" alt="logo kanap">
      </section>
      <section id="piquante" data-aos="fade-right" data-aos-duration="1000" class="travaux">
        <p class="title">
          piquante
        </p>
        <p class="subtitle">
          projet de formation
        </p>
        <img src="../../assets/images/logo-piquante.png" alt="logo piquante">
      </section>
      <section id="groupomania" data-aos="fade-left" data-aos-duration="1000" class="travaux">
        <p class="title">
          groupomania
        </p>
        <p class="subtitle">
          projet de formation
        </p>
        <img src="../../assets/images/logo-groupomania.png" alt="logo groupomania">
      </section>
    </template>
  </BaseComponents>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'TravauxPage',
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
        content: 'Portfolio d\'Hugo Aloche développeur fullstack passionnée par le développement d\'applications web prêt à réaliser tous les défis!'
      }
    ]
  },
  mounted () {
    AOS.init({ })
  }
}
</script>
