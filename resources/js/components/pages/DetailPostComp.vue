<template>
    <div class="container">
        <h3>{{ post.title }}</h3>
        <h4>Categoria: {{ post.category.name }}</h4>
        <div class="tags-container">
            <span class="tag-default">Tags: </span>
            <span class="tags" v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</span>
        </div>
        <p>{{ post.description }}</p>
    </div>
</template>


<script>

import { apiUrl } from '../../data/config';

export default {
    name: 'DetailPost',

    data(){
        return{
            // post: null,
            //  è stato inserito l'oggetto perchè con "post:null" da errore nella console del browser.
            //post:null all'inizio è null. Perchè c'e il tempo della chiamati API che all'inizio non c'è, non lo trova e da errore (anche se il dato lo stampa)
            post: {
                title: '',
                description: '',
                category: '',
                tags: []
            },
            apiUrl,

        }
    },

    methods: {
        getApi(){
            axios.get(this.apiUrl + '/' + this.$route.params.slug)
            .then(res => {
                this.post = res.data;
                // console.log(res.data)
            })
        }
    },

    mounted(){
            this.getApi();
    }
}
</script>


<style lang="scss" scoped>

    .container {
        padding-left: 15px;
    }

    h3 {
    color:#008000;
    font-size: 40px;
    }

    p {
    color: #000000;
    font-size: 24px;
    }

    .tags {
        margin-right: 15px;
        background-color: #BE0029;
        padding: 5px;
    }


</style>
