<template>
  <div class="test">
    <h1>This is the test page</h1>
    <!-- Form Selector -->
    <test-selector v-bind:languages="language_list" v-on:change="updateTerms"></test-selector>
    <!-- Test Form -->
    <p v-if="testArray.length === 0">Select a language</p>
    <test-form
      v-else
      :key="testArray[current_position].id"
      v-bind:term="testArray[current_position].term"
      v-bind:answer="testArray[current_position].translation"
      v-on:answered="updateScore"
      v-on:complete="updatePosition"
    ></test-form>
    <p>Current Score: {{score}} / {{ term_list.length }}</p>
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
      selected_language: 0,
      current_position: 0,
      score: 0,
      testArray: []
    };
  },
  methods: {
    updateTerms: function(l) {
      this.selected_language =
        this.selected_language != 0 ? (this.reset(), l) : l;
      // Get terms for the selected language
      this.term_list = localData.terms.filter(
        t => t.language === this.selected_language
      );
      // Update the test Array
      this.updateTestArray();
    },
    updateTestArray: function() {
      // If called and language not selected, return
      if (this.selected_language === 0) return;
      // Reset array
      this.testArray = [];
      // For each item in the term list, create an object containing the term and translation
      for (let i = 0; i < this.term_list.length; i++) {
        this.testArray.push({
          id: i + 1,
          term: this.term_list[i].term,
          translation: localData.translations.find(
            b => b.id === this.term_list[i].translation
          ).translation
        });
      }
    },
    updateScore: function(s) {
      this.score += s;
    },
    updatePosition: function() {
      this.current_position += 1;
    },
    reset: function() {
      this.term_list = [];
      this.current_position = 0;
      this.score = 0;
      this.testArray = [];
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
