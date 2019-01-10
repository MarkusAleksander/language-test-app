<template>
    <li><img :src="flag_img" /></li>
</template>

<script>
export default {
    name: "LanguageSelectorItem",
    props: ["language", "img"],
    data: function () {
        return {
            flag_img: ''
        }
    },
    mounted: function () {
        let img = new Image();
        img.src = `/../../assets/${this.img}`;
        this.flag_img = img.src;
    }
}
</script>

<style lang="scss" scoped>

</style>
