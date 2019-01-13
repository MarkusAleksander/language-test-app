<template>
    <div class="module-list">
        <module-block
            v-for="module in modules"
            :key="module.id"
            :moduleItems="module.items"
        ></module-block>
    </div>
</template>

<script>
import ModuleBlock from './ModuleBlock'

export default {
  name: 'ModuleList',
  components: {
    ModuleBlock
  },
  data: function () {
    return {
      modules: [
        {
          id: 0,
          items: [
            {
              id: 0,
              moduleTitle: 'Greetings'
            }
          ]
        },
        {
          id: 1,
          items: [
            {
              id: 0,
              moduleTitle: 'The Alphabet'
            },
            {
              id: 1,
              moduleTitle: 'Numbers'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
