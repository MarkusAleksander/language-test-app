<template>
  <div class="home-page-wrapper">
    <div class="col-1">
      <language-selector></language-selector>
    </div>
  </div>
</template>

<script>
import localData from '@/local-data/local-data.js'

import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'

export default {
  name: 'home',
  components: {
    LanguageSelector
  },
  data: function () {
    return {
      language_list: null,
      max_width: 1200
    }
  },
  created: function () {
    this.$store.commit({
      type: 'setWidth',
      width: this.max_width
    })
  },
  beforeMount: function () {
    this.$store.commit({
      type: 'setLocalData',
      data: localData
    })
  },
  mounted: function () {
    this.language_list = this.$store.getters.getLanguages
  }
}
</script>

<style lang="scss" scoped>
.landing-page-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .col-1 {
      width: 25%;
      flex-grow: 1;
    }
    .col-2 {
      width: 75%;
      flex-grow: 2;
    }
}
</style>
