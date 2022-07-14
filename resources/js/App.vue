<template>

    <div class="container">

        <ul>
            <li v-for="post in posts" :key="post.id">
                <h3>Titolo: <span>{{ post.title }}</span></h3>
                <h3>Descrizione: <span>{{ post.description }}</span></h3>

            </li>

        </ul>
    </div>

</template>

<script>
import Axios from 'axios'

export default {
    name: 'App',


    data(){
        return{
            apiUrl:'http://127.0.0.1:8000/api/posts',
            posts: null

        }
    },

    methods:{
        getApi(){
            Axios.get(this.apiUrl)
            .then(res=> {
                this.posts = res.data
                console.log(res.data);
            })
        }
    },

    mounted(){
        this.getApi();
    }
}
</script>

<style>

</style>
