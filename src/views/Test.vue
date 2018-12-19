<template>
  <div class="test">
    <h1>This is the test page</h1>
    <!-- Form Selector -->
    <test-selector v-bind:languages="language_list" v-on:change="updateTerms"></test-selector>
    <!-- Test Form -->
    <p v-if="testArray.length !== 0">Question {{ current_position + 1 }} / {{ testArray.length }}</p>
    <p v-if="testArray.length === 0 && !test_completed">Select a language</p>
    <transition name="fade" mode="out-in">
      <test-form
        v-if="testArray.length > 0 && !test_completed"
        :key="testArray[current_position].id"
        v-bind:query="testArray[current_position]"
        v-on:answered="updateScore"
        v-on:complete="updatePosition"
      ></test-form>
    </transition>
    <p>Current Score: {{score}}</p>
  </div>
</template>

<script>
import localData from '@/local-data/local-data.js'
import TestSelector from '@/components/TestSelector.vue'
import TestForm from '@/components/TestForm.vue'

export default {
  name: 'Test',
  components: {
    TestSelector,
    TestForm
  },
  data () {
    return {
      language_list: [],
      term_list: [],
      selected_language: 0,
      current_position: 0,
      score: 0,
      testArray: [],
      test_completed: false,
      num_questions: 3
    }
  },
  methods: {
    updateTerms: function (l) {
      this.selected_language =
        this.selected_language !== 0 ? (this.reset(), l) : l
      // Get terms for the selected language
      this.term_list = this.getTerms()
      if (this.term_list.length !== 0) {
        // Update the test Array
        this.updateTestArray()
      }
    },
    getTerms: function () {
      // FIlter down to usable terms
      let tTerms = localData.terms.filter(
        t => t.language === this.selected_language
      )
      // Select random ones
      let rTerms = []
      if (tTerms.length < this.num_questions) {
        return []
      }
      while (rTerms.length < this.num_questions) {
        let r = tTerms[Math.floor(Math.random() * tTerms.length)]
        let b = (function () {
          for (let x = 0; x < rTerms.length; x++) {
            if (rTerms[x] === r) return true
          }
        })()
        if (!b) {
          rTerms.push(r)
        }
      }

      return rTerms
    },
    updateTestArray: function () {
      // If called and language not selected, return
      if (this.selected_language === 0) return
      // Reset array
      this.testArray = []
      // For each item in the term list, create an object containing the term and translation
      for (let i = 0; i < this.term_list.length; i++) {
        this.testArray.push({
          id: i + 1,
          term: this.term_list[i].term,
          translation: localData.translations.find(
            b => b.id === this.term_list[i].translation
          ).translation
        })
      }
    },
    updateScore: function (s) {
      this.score += s
    },
    updatePosition: function () {
      this.current_position += 1
      if (this.current_position >= this.testArray.length) {
        this.endTest()
      }
    },
    reset: function () {
      this.term_list = []
      this.current_position = 0
      this.score = 0
      this.testArray = []
      this.test_completed = false
    },
    endTest: function () {
      this.$store.commit('completeTest')
      this.$store.commit({ type: 'updateScore', score: this.score })
      this.$router.push('test-complete')
    }
  },
  computed: {},
  mounted: function () {
    this.language_list = localData.languages
  }
}
</script>

<style lang="scss" scoped>
</style>
