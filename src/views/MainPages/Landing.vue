<template>
    <div class="landing-page-wrapper">
        <router-link to="/home/board">Click Here To Enter</router-link>
    </div>
</template>

<script>
export default {
  name: 'Landing',
  data: function () {
    return {
      appColours: [[0, 201, 255], [146, 254, 157], [146, 254, 157]],
      max_width: 500
    }
  },
  beforeMount: function () {
    this.$store.commit({
      type: 'setAppStyle',
      data: {
        colours: this.appColours,
        width: this.max_width
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.landing-page-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    a {
        text-align: center;
        color: #000;
        display: inline-block;
        font-size: 2rem;
    }
}
</style>
