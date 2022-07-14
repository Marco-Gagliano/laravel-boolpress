<template>

    <div class="container">

        <PostItem v-for="post in posts" :key="post.id" :post="post"/>

    </div>

</template>


<script>
import PostItem from '../partials/PostItem.vue';
export default {
    name: "Post",
    components: { PostItem },
    data() {
        return {
            apiUrl: "/api/posts",
            posts: null
        };
    },
    methods: {
        getApi() {
            axios.get(this.apiUrl)
                .then(res => {
                this.posts = res.data;
                console.log(res.data);
            });
        }
    },
    mounted() {
        this.getApi();
    },
}
</script>


<style lang="scss" scoped>

</style>
