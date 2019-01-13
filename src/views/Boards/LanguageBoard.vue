<template>
    <transition name="router-anim" mode="out-in">
      <div class="language-board-wrapper">
        <h2>{{ $route.params.language }}</h2>
        <hr />
        <module-list></module-list>
      </div>
    </transition>
</template>

<script>
import ModuleList from '@/components/ModulesSelector/ModuleList'

export default {
  name: 'LanguageBoard',
  components: {
    ModuleList
  },
  beforeMount: function () {
    
  },
  data: function () {
    return {
      selected_language: this.$store.getters.getSelectedLanguage,
      module_data: this.$store.module_data
    }
  }
}
</script>

<style lang="scss" scoped>
.language-board-wrapper h2 {
  text-transform: capitalize;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 1rem;
}
.language-board-wrapper hr {
  width: 90%;
  margin: 0 auto;
  border: 0;
  height: 1px;
  background-color: rgb(70,70,70);
}
</style>
