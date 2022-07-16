<template>
    <div class="container">
        <h3>{{ post.title }}</h3>
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

</style>
