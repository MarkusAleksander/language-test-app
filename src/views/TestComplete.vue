<template>
  <p>Final score: {{ score }}</p>
</template>

<script>
export default {
  name: 'TestCompleted',
  computed: {
    score: function () {
      return this.$store.state.testScore
    }
  }
}
</script>

<style>
</style>
