<template>
    <div class="language-selector">
        <ul>
            <language-selector-item
                v-for="language in language_list"
                :key="language.id"
                :img="language.flag_image"
                :language="language.language"
                ></language-selector-item>
        </ul>
    </div>
</template>
<script>
import LanguageSelectorItem from '@/components/LanguageSelector/LanguageSelectorItem';

export default {
  name: "LanguageSelector",
  data: function () {
      return {}
  },
  components: {
      LanguageSelectorItem
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
