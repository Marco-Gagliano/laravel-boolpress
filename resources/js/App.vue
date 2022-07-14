<template>

    <div class="container">

        <HeaderComp />

        <ul>
            <li v-for="post in posts" :key="post.id">
                <h3>Titolo: <span>{{ post.title }}</span></h3>
                <h3>Descrizione: <span>{{ post.description }}</span></h3>

            </li>

        </ul>

        <FooterComp />
    </div>

</template>

<script>
import Axios from 'axios'
import HeaderComp from './components/partials/HeaderComp.vue'
import FooterComp from './components/partials/FooterComp.vue';

export default {
    name: "App",
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/posts",
            posts: null
        };
    },
    methods: {
        getApi() {
            Axios.get(this.apiUrl)
                .then(res => {
                this.posts = res.data;
                console.log(res.data);
            });
        }
    },
    mounted() {
        this.getApi();
    },
    components: { HeaderComp, FooterComp }
}
</script>

<style lang="scss">
    ul {
        list-style: none;
    }
</style>
