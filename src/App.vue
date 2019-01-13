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
var TWEEN = require('@tweenjs/tween.js')

export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  methods: {
    // Update Current background colour
    updateBackgroundColour: function (colours) {
      // Get app element where custom properties are
      let appEl = document.querySelector('#app')

      // prepare colours into an object - need current colours and new colours
      let oldColours = {}
      let newColours = {}
      for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
          oldColours[`bg_col_${i}-${j}`] = Number(window.getComputedStyle(appEl).getPropertyValue(`--bg_col_${i}-${j}`))
          newColours[`bg_col_${i}-${j}`] = colours[i - 1][j - 1]
        }
      }

      // Prepare Tween aniamtion
      requestAnimationFrame(this.tweenAnimate)

      // Animate colour tween
      new TWEEN.Tween(oldColours)
        .to(newColours, 1500)
        .onUpdate(() => {
          for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
              appEl.style.setProperty(`--bg_col_${i}-${j}`, oldColours[`bg_col_${i}-${j}`])
            }
          }
        })
        .start()
    },
    tweenAnimate: function (time) {
      if (!time) return
      // Required for tween
      requestAnimationFrame(this.tweenAnimate)
      TWEEN.update(time)
    }
  },
  computed: {
    // Update app for current set app width
    currentAppWidth: function () {
      return `max-width:${this.$store.getters.getAppStyle.width}px`
    },
    // Update app for current set background colour
    currentBackgroundColour: function () {
      return this.updateBackgroundColour(this.$store.getters.getAppStyle.colours)
      // return `background-image:linear-gradient(to bottom right, ${this.$store.getters.getAppStyle.colours[0]} 0%, ${this.$store.getters.getAppStyle.colours[1]} 50%, ${this.$store.getters.getAppStyle.colours[2]} 100%)`
    }
  }
}

</script>

<style lang="scss" scoped>
#app {
  --bg_col_1-1:255;
  --bg_col_1-2:255;
  --bg_col_1-3:255;
  --bg_col_2-1:255;
  --bg_col_2-2:255;
  --bg_col_2-3:255;
  --bg_col_3-1:255;
  --bg_col_3-2:255;
  --bg_col_3-3:255;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 2rem 0;
  background-image: linear-gradient(to bottom right,
    rgb(var(--bg_col_1-1),var(--bg_col_1-2),var(--bg_col_1-3)) 0%,
    rgb(var(--bg_col_2-1),var(--bg_col_2-2),var(--bg_col_2-3)) 50%,
    rgb(var(--bg_col_3-1),var(--bg_col_3-2),var(--bg_col_3-3)) 100%);
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
