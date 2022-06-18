<template>
  <div class="card">
    <img :class="setClass" :src="require(`@/assets/images/${image}`)" :alt="alt">
    <p class="title">
      {{ title }}
    </p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="subtitle" v-html="subtitle" />
    <hr>
    <nuxt-link :to="{ path: '/travaux', query: { title: title.split(' ').join('-'), subtitle: subtitle.split(' ').join('-'), image: image, id: id }}">
      Voir plus
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CardComponents',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    setClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      alt: this.image.split('.')[0].split('-').join(' ')
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
.card {
    border-radius: 10px;
    padding: 15px;
    box-shadow: $small-shadow;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: -100%;
        left: -100%;
        height: 100%;
        width: 100%;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        z-index: -1;
        border-radius: 10px;
        transition: top 600ms, left 600ms ease-in-out;
    }
    &:hover::before {
        top: 0;
        left: 0;
    }
    &:hover {
        .title,.subtitle {
            color: #FFF;
        }
    }
    .title {
        margin: 25px 0;
        font-size: 32px;
        font-weight: 400;
        text-align: left;
        transition: color 600ms ease-in-out;
    }
    .subtitle {
        margin-bottom: 25px;
        font-size: 20px;
        color: $gray;
        text-align: left;
        transition: color 600ms ease-in-out;
    }
    .none {
        object-fit: none;
        width: fit-content;
    }
    a {
        color: $blue;
    }
    img {
        object-fit: contain;
        width: 100%;
        height: 150px;
    }
    hr {
        width: 100%;
        height: 1px;
        background-color: $light-gray;
        border: none;
    }
}
</style>
