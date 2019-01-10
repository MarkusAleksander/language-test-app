<template>
    <li><img :src="require(`@/assets/${img}`)" :alt="language" /></li>
</template>

<script>
export default {
    name: "LanguageSelectorItem",
    props: ["language", "img"]
}
</script>

<style lang="scss" scoped>

</style>
