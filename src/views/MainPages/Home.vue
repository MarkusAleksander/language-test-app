<template>
  <div class="home-page-wrapper">
    <div class="col-1">
      <language-selector></language-selector>
    </div>
    <div class="col-2">
      <transition name="router-anim" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
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
.home-page-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: 100%;

    .col-1,
    .col-2 {
      padding: 0.8rem;
      border-radius: 1.5rem;
      border: 0.2rem ridge rgb(236, 235, 235);
      box-shadow: 0.2rem 0.2rem 0.5rem #ccc;
    }

    .col-1 {
      width: 24%;
    }
    .col-2 {
      width: 74%;
    }
}
</style>
