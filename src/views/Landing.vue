<template>
    <div class="landing-page-wrapper">
        <router-link to="/home">Click Here To Enter</router-link>
    </div>
</template>

<script>
export default {
  name: 'Landing',
  data: function () {
    return {
      max_width: 500
    }
  },
  beforeMount: function () {
      console.log('mounting landing...');
    this.$store.commit({
      type: 'setWidth',
      width: this.max_width
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
