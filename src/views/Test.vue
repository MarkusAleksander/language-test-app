<template>
  <div class="test">
    <h1>This is the test page</h1>
    <test-selector v-bind:languages="language_list" v-on:change="updateLanguage"></test-selector>
    <p>Selected Language: {{ selected_language }}</p>
    <div v-if="term_list.length">
      <test-form></test-form>
    </div>
  </div>
</template>

<script>
import localData from "@/local-data/local-data.js";
import TestSelector from "@/components/TestSelector.vue";
import TestForm from "@/components/TestForm.vue";

export default {
  name: "Test",
  components: {
    TestSelector,
    TestForm
  },
  data() {
    return {
      language_list: [],
      term_list: [],
      translation_list: [],
      selected_language: "",
      current_position: 0,
      score: 0
    };
  },
  methods: {
    updateLanguage: function(l) {
      this.selected_language = l;
    }
  },
  computed: {},
  mounted: function() {
    this.language_list = localData.languages;
  }
};
</script>

<style>
</style>
