<template>
    <li v-on:click="goToLanguageHomePage" class="flag-img-item"><img class="flag-img" :src="require(`@/assets/${img}`)" :alt="language" /></li>
</template>

<script>
export default {
  name: 'LanguageSelectorItem',
  props: ['language', 'img', 'colours'],
  methods: {
    goToLanguageHomePage: function () {
      this.$store.commit({
        type: 'setBackgroundColours',
        colours: this.colours
      })
      this.$store.commit({
        type: 'setLanguage',
        language: this.language.toLowerCase()
      })
      this.$router.push(`/home/${this.language.toLowerCase()}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.flag-img-item {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;

    .flag-img {
        width: 100%;
        max-width: 150px;
        height: auto;
        display: block;
        margin: 0 auto;
        cursor: pointer;

        &:hover,
        &:focus {
            position: relative;
            top: -1px;
            lefT: -1px;
            box-shadow: 0rem 0rem 0.5rem 0.2rem rgb(59, 169, 241);
        }
        &:active {
            top: 1px;
            left: 1px;
            box-shadow: -0.1rem -0.1rem 0rem 0.1rem rgb(70,70,70);
        }
    }
}
</style>
