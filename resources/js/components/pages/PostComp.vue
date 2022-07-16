<template>

    <div class="container">

        <LoaderComp v-if="!posts" />

        <div class="post-list" v-else>

            <PostItem v-for="post in posts" :key="post.id" :post="post"/>

            <div class="buttons">

                <button @click="getApi(pagination.current -1)" :disabled="pagination.current === 1">PREC</button>

                <button v-for="i in pagination.last"
                        :key="i" @click="getApi(i)"
                        :disabled="pagination.current === i">{{ i }}
                </button>

                <button @click="getApi(pagination.current +1)" :disabled="pagination.current === pagination.last">SUCC</button>

            </div>
        </div>
    </div>

</template>


<script>

import PostItem from '../partials/PostItem.vue';
import LoaderComp from '../partials/LoaderComp.vue'


export default {
    name: "Post",
    components: { PostItem, LoaderComp },
    data() {
        return {
            pagination: {
                current: null,
                last: null
            },
            apiUrl: "/api/posts",
            posts: null
        };
    },
    methods: {
        getApi(page) {
            this.posts = null
            axios.get(this.apiUrl +"?page=" + page)
                .then(res => {
                this.posts = res.data.data;
                this.pagination = {
                        current:res.data.current_page,
                        last: res.data.last_page
                    }
                console.log(res.data);
            });

        }
    },
    mounted() {
        this.getApi(1);
    },
}
</script>


<style lang="scss" scoped>

    .buttons {
        text-align: center;
    }

</style>
