<template>
  <div class="home">
    <test-selector v-bind:languages="language_list"></test-selector>
  </div>
</template>

<script>
import localData from '@/local-data/local-data.js'
import TestSelector from '@/components/TestSelector.vue'

export default {
  name: 'home',
  components: {
    TestSelector
  },
  data: function () {
    return {
      hasLoaded: false,
      language_list: null
    }
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
