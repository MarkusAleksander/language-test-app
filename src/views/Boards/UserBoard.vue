<template>
    <div class="user-board-wrapper">
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
  name: 'UserBoard',
  data: function () {
    return {
      message: 'User Board',
      appColours: [[146, 254, 157], [0, 201, 255], [0, 201, 255]]
    }
  },
  beforeMount: function () {
    this.$store.commit({
      type: 'setBackgroundColours',
      colours: this.appColours
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
