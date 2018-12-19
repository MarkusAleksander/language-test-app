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
  name: "TestForm",
  props: {
    query: Object
  },
  data: function() {
    return {
      user_answer: "",
      test_response: "",
      answer_submitted: false,
      result: 0,
      value: 10
    };
  },
  methods: {
    checkAnswer: function() {
      this.answer_submitted = true;
      if (this.user_answer === this.query.translation) {
        this.test_response = "Correct";
      } else {
        this.test_response = "Incorrect";
      }
      this.$emit("answered", this.value);
    },
    completeForm: function() {
      this.$emit("complete");
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

input {
  display: block;
  width: 100%;
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  text-align: center;
  padding: 8px;
  border: 2px inset rgb(240, 240, 240);
  border-radius: 5px;
  color: rgb(0, 0, 0);
}
</style>
