<template>
  <div id="app">
    <section id="main" :style="style_max_width">
      <transition name="router-anim" mode="out-in">
        <router-view/>
      </transition>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      max_width: 1500
    }
  },
  computed: {
    style_max_width: function () {
      return `max-width:${this.$store.getters.getMaxWidth}px`
    }
  }
}

</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 2rem 0;
}
#main {
  width: 100%;
  height: 100%;
  flex-grow: 0;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 1.5rem;
  border: 0.2rem ridge rgb(207, 206, 206);
  box-shadow: 0.2rem 0.2rem 0.5rem #ccc;
  padding: 0.8rem;
  transition: max-width .75s;
}
</style>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
* {
  &,
  &:after,
  &:before {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
}
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Montserrat", serif;
  font-size: 62.5%;
  line-height: 1.2rem;
  box-sizing: border-box;
}
.router-anim-enter-active {
  transition: opacity .5s 1s;
}
.router-anim-leave-active {
  transition: opacity .5s;
}
.router-anim-enter,
.router-anim-leave-to {
  opacity: 0;
}
</style>
