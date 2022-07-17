<template>

    <div class="container">

        <LoaderComp v-if="!posts" />

        <div class="post-list" v-else>

            <h2>I miei Post {{ searchType }}</h2>

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

        <div class="details-list">

            <div class="post-category-list">
                <ul>
                    <li>
                        <SidebarComp
                            :categories = "categories"
                            :tags = "tags"
                            @searchPostsByCategory="searchPostsByCategory"
                            @searchPostsByTag="searchPostsByTag"
                        />
                    </li>
                </ul>
            </div>

        </div>

    </div>

</template>


<script>

import PostItem from '../partials/PostItem.vue';
import LoaderComp from '../partials/LoaderComp.vue'
import { apiUrl } from '../../data/config';
import SidebarComp from '../partials/SidebarComp.vue'


export default {
    name: "Post",
    components: { PostItem, LoaderComp, SidebarComp },
    data() {
        return {
            pagination: {
                current: null,
                last: null
            },
            apiUrl,
            posts: null,
            categories: [],
            tags: [],
            searchType: '',
        };
    },
    methods: {
        getApi(page) {
            this.searchType = ''
            this.posts = null
            axios.get(this.apiUrl +"?page=" + page)
                .then(res => {
                this.posts = res.data.posts.data;
                this.categories = res.data.categories;
                this.tags = res.data.tags;
                this.pagination = {
                    current: res.data.posts.current_page,
                    last: res.data.posts.last_page
                }
                console.log(res.data);
            });

        },

        searchPostsByCategory(slug_category){
            console.log(slug_category);

            // axios.get(this.apiUrl + '/post-category/' + slug_category)
            // .then(res => {
            //     this.searchType = res.data.name
            //     this.posts = res.data.posts
            // })


        },

        searchPostsByTag(slug_tag){
            console.log(slug_tag);

            // axios.get(this.apiUrl + '/post-tag/' + slug_tag)
            // .then(res => {
            //     this.searchType = res.data.name
            //     this.posts = res.data.posts
            // })

        },
    },
    mounted() {
        this.getApi(1);
    },
}
</script>


<style lang="scss" scoped>

    .container {
        display: flex;
        flex-basis: 50%;
    }

    .details-list {
        flex-basis: 50%;
        text-align: end;
    }

    .post-category-list, .post-tag-list {
        display: flex;
        justify-content: flex-end;
    }


    .buttons {
        text-align: center;
    }

</style>
