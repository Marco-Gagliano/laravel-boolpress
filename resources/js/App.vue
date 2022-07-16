<template>

    <div class="container">

        <HeaderComp />

        <router-view></router-view>

        <FooterComp />
    </div>

</template>

<script>

import HeaderComp from './components/partials/HeaderComp.vue'
import FooterComp from './components/partials/FooterComp.vue';

export default {
    name: "App",
    components: { HeaderComp, FooterComp },

}
</script>

<style lang="scss">

    body {
        margin: 0;
    }

    ul {
        list-style: none;
    }

    h1 {
        text-align: center;
    }
</style>
