<template>
    <div class="module-item">
        <div class="module-item-image"></div>
        <p class="module-item-title">{{moduleTitle}}</p>
    </div>
</template>

<script>
export default {
  name: 'ModuleItem',
  data: function () {
    return {
    }
  },
  props: ['moduleTitle']
}
</script>

<style lang="scss" scoped>
.module-item {
    padding: 1.5rem;
}
.module-item-image {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    border: 1px dashed rgb(70,70,70);
    margin: 0 auto 1rem;
}
.module-item-title {
    text-align: center;
    font-size: 1.5rem;
}
</style>
