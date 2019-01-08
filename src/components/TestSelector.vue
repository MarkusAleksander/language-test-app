<template>
  <div id="language-selector">
    <p v-if="selected_language === 0">Select a language</p>
    <select v-model="selected_language" v-on:change="updateLanguage">
      <option selected disabled value="0">Select A Language</option>
      <option
        v-for="language in languages"
        v-bind:value="language.id"
        :key="language.id"
      >{{ language.language }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TestSelector',
  data: function () {
    return {
      selected_language: 0
    }
  },
  props: {
    languages: Array
  },
  methods: {
    updateLanguage: function () {
      this.$emit('change', this.selected_language)
    }
  }
}
</script>

<style lang="scss" scoped>
#language-selector {
  padding: 8px 0;
}
select {
  width: 100%;
  background-color: #fff;
  padding: 5px;
  border: 2px inset rgb(245, 245, 245);
  border-radius: 5px;
  color: rgb(0, 0, 0);
  font-size: 16px;
}
</style>
