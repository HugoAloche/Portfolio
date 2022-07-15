<template>
  <div class="card" @click="showModal">
    <transition name="fade">
      <div v-if="modal" class="modal">
        <p class="title">
          {{ title }} <br>
          <br>
        </p>
        <img
          :class="classImg"
          :src="require(`@/assets/images/${image}`)"
          :alt="alt"
        >
        <p v-html="subtitle" />
        <a
          v-if="link !== ''"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
        >Vsisiter</a>
      </div>
    </transition>
    <img
      v-if="type === 'school'"
      :src="require(`@/assets/images/school.svg`)"
      :alt="alt"
    >
    <img v-else :src="require(`@/assets/images/work.svg`)" :alt="alt">
    <p>
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardComponents',
  props: {
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
    type: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false,
      default: ''
    },
    classImg: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      alt: this.image.split('.')[0].split('-').join(' '),
      modal: false,

      projet: {
        title: '',
        subtitle: '',
        image: ''
      }
    }
  },
  methods: {
    showModal () {
      this.projet.title = this.title
      this.projet.subtitle = this.subtitle
      this.projet.image = this.image
      this.modal = !this.modal
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
  background-color: $gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: fit-content;
  border: solid 1px $dark-gray;
  overflow: hidden;
  position: relative;
  z-index: 0;
  width: 250px;
  height: 200px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: $dark-gray;
    opacity: 0.5;
    z-index: -1;
    transition: left 600ms ease-in-out;
  }
  &:hover:before {
    left: 0;
  }
  img {
    width: 64px;
    object-fit: inherit !important;
    @media screen and (max-width: 1024px) {
      width: 48px !important;
    }
    &.none {
      width: fit-content !important;
    }
  }
  p {
    font-size: 24px;
    font-weight: 100;
    text-align: left;
    width: 100%;
    word-break: break-all;
    color: #fff;
  }
  a {
    color: rgb(18, 109, 214);
    font-weight: bold;
  }
  .none {
    object-fit: none;
    width: fit-content;
  }
  img {
    object-fit: none;
  }
}
.modal {
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: scroll;
  p {
    color: $gray;
    &:not(.title) {
      font-size: 18px;
    }
  }
  img {
    width: 100% !important;
    object-fit: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $gray;
    border-radius: 10px;
  }
}
</style>
