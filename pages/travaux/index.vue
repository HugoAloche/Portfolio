<template>
  <BaseComponents>
    <template #main>
      <nuxt-link to="/" class="backLink">
        <img src="../../assets/images/back.svg" alt="bouton retour">
      </nuxt-link>
      <section :id="id" data-aos="fade-down" data-aos-duration="1000" class="travaux">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="title" v-html="title" />
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="subtitle" v-html="subtitle" />
        <img :src="require(`@/assets/images/${image}`)" :alt="alt">
      </section>
    </template>
  </BaseComponents>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'TravauxPage',
  data () {
    return {
      id: this.$route.query.id,
      title: this.$route.query.title.split('-').join('<br>'),
      subtitle: this.$route.query.subtitle.split('-').join(' '),
      image: this.$route.query.image,
      alt: this.$route.query.image.split('.')[0].split('-').join(' ')
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
        content: 'Portfolio d\'Hugo Aloche développeur fullstack passionnée par le développement d\'applications web prêt à réaliser tous les défis!'
      }
    ]
  },
  mounted () {
    AOS.init({ })
  }
}
</script>
