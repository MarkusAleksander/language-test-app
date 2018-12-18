<template>
  <div class="test-form">
    <p>{{ query.term }}</p>
    <input v-model="user_answer">
    <button v-on:click="checkAnswer">Check</button>
    <p v-if="answer_submitted">{{ test_response }}</p>
    <button v-if="answer_submitted" v-on:click="completeForm">Next</button>
  </div>
</template>

<script>
export default {
  name: 'TestForm',
  props: {
    query: Object
  },
  data: function () {
    return {
      user_answer: '',
      test_response: '',
      answer_submitted: false,
      result: 0
    }
  },
  methods: {
    checkAnswer: function () {
      this.answer_submitted = true
      if (this.user_answer === this.query.answer) {
        this.test_response = 'Correct'
        this.result = 1
      } else {
        this.test_response = 'Incorrect'
      }
      this.$emit('answered', this.result)
    },
    completeForm: function () {
      this.$emit('complete')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
