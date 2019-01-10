<template>
    <li class="flag-img-item"><img class="flag-img" :src="require(`@/assets/${img}`)" :alt="language" /></li>
</template>

<script>
export default {
  name: 'LanguageSelectorItem',
  props: ['language', 'img']
}
</script>

<style lang="scss" scoped>
.flag-img-item {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;

    .flag-img {
        width: 100%;
        max-width: 150px;
        height: auto;
        display: block;
        cursor: pointer;

        &:hover,
        &:focus {
            position: relative;
            box-shadow: 0rem 0rem 0.5rem 0.2rem rgb(59, 169, 241);
            border: 1px solid rgb(70,70,70);
            border-left:0;
            border-top: 0;
        }
        &:active {
            top: 1px;
            left: 1px;
            box-shadow: none;
            border: 1px solid rgb(70,70,70);
            border-right:0;
            border-bottom: 0;
        }
    }
}
</style>
