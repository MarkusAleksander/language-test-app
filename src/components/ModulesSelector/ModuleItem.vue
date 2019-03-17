<template>
    <div class="module-item" v-on:click="handleClick">
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
  props: ['moduleTitle'],
  methods: {
      handleClick: function () {
          this.$emit('open-module', this.moduleTitle);
      }
  }
}
</script>

<style lang="scss">
.module-item {

    $wrapper: &;

    padding: 1.5rem;

    .module-item-image {
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 50%;
        border: 1px dashed rgb(70,70,70);
        margin: 0 auto 1rem;

        &:hover,
        &:focus {
            cursor: pointer;
            animation-name: rotate;
            animation-duration: 8s;
            animation-timing-function: linear;
        }
    }
    .module-item-title {
        text-align: center;
        font-size: 1.5rem;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(359deg);
    }
}
</style>
