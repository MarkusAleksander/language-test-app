<template>
    <div class="module-block">
        <module-item
            v-for="item in moduleItems"
            :moduleTitle="item.moduleTitle"
            :key="item.id"
        ></module-item>
    </div>
</template>

<script>
import ModuleItem from './ModuleItem'

export default {
  name: 'ModuleBlock',
  components: {
    ModuleItem
  },
  data: function () {
    return {}
  },
  props: ['moduleItems']
}
</script>

<style lang="scss" scoped>
.module-block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
</style>
