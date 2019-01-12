<template>
  <div id="app" :data-bg-update="currentBackgroundColour">
    <section id="main" :style="currentAppWidth">
      <transition name="router-anim_delay" mode="out-in">
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
    }
  },
  methods: {
    updateBackgroundColour: function(colours) {
      console.log(colours);
      document.documentElement.style.setProperty('--bg_col_1', colours[0]);
      document.documentElement.style.setProperty('--bg_col_2', colours[1]);
      document.documentElement.style.setProperty('--bg_col_3', colours[2]);
    },
  },
  computed: {
    currentAppWidth: function () {
      return `max-width:${this.$store.getters.getAppStyle.width}px`
    },
    currentBackgroundColour: function () {
      return this.updateBackgroundColour(this.$store.getters.getAppStyle.colours);
      // return `background-image:linear-gradient(to bottom right, ${this.$store.getters.getAppStyle.colours[0]} 0%, ${this.$store.getters.getAppStyle.colours[1]} 50%, ${this.$store.getters.getAppStyle.colours[2]} 100%)`
    }
  }
}

</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 2rem 0;
  background-image: linear-gradient(to bottom right, var(--bg_col_1) 0%, var(--bg_col_2) 50%, var(--bg_col_3, 100%));
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
:root {
  --bg_col_1: #fff;
  --bg_col_2: #fff;
  --bg_col_3: #fff;
}
* {
  &,
  &:after,
  &:before {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    line-height: 1.2em;
  }
}
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Montserrat", serif;
  font-size: 62.5%;
  box-sizing: border-box;
}
.router-anim_delay-enter-active {
  transition: opacity .5s 1s;
}
.router-anim-enter-active {
  transition: opacity .5s;
}
.router-anim_delay-leave-active,
.router-anim-leave-active  {
  transition: opacity .5s;
}
.router-anim_delay-enter,
.router-anim_delay-leave-to,
.router-anim-enter,
.router-anim-leave-to {
  opacity: 0;
}
</style>
