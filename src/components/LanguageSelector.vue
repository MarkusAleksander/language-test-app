<template>
    <div class="language-selector">
        <ul>
            <li v-for="language in language_list" :key="language.id">
                <img :src="`@/assets/${language.flag_image}`" />
                {{language.language}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "LanguageSelector",
  data: function () {
      return {}
  },
  computed: {
    language_list: function () {
      return this.$store.getters.getLanguages;
    }
  }
}
</script>
<style lang="scss" scoped>
.language-selector {
    width:100%;
    height: 100%;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        li {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 2rem;
        }
    }
}
</style>
