<template>
    <transition name="router-anim" mode="out-in">
      <div class="language-board-wrapper">
        <h2>{{ $route.params.language }}</h2>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'LanguageBoard',
  data: function () {
    return {
      selected_language: this.$route.params.language
    }
  }
}
</script>

<style lang="scss" scoped>
.language-board-wrapper h2 {
  text-transform: capitalize;
}
</style>
