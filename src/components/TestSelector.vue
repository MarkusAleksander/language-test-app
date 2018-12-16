<template>
  <div class="language-selector">
    <select v-model="selected_language" v-on:change="updateLanguage">
      <option selected disabled value="null">Select A Language</option>
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
  name: "TestSelector",
  data: function() {
    return {
      selected_language: null
    };
  },
  props: {
    languages: Array
  },
  methods: {
    updateLanguage: function() {
      this.$emit("change", this.selected_language);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
