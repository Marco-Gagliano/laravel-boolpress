<template>

    <div class="container">

        <ul>
            <li>
                <h3>Titolo: <span>{{ post.title }}</span></h3>
                <h3>Descrizione: <span>{{ shortDescription }}</span></h3>
                <h5>Caricato il: <span>{{ formatDate }}</span></h5>
            </li>
        </ul>


    </div>
</template>


<script>
import PostComp from '../pages/PostComp.vue';
export default {
    name: "PostItem",
    components: { PostComp },
    props: {
        post: Object
    },

    computed:{
        shortDescription(){
            return this.post.description.substr(0,65 ) + '...';
        },

        formatDate(){

            const d = new Date(this.post.updated_at);
            let day = d.getDate();
            let month = d.getMonth() + 1;
            const year = d.getFullYear();
            if(day < 10 ) day = '0' + day;
            if(month < 10 ) day = '0' + month;

            return `${day}/${month}/${year}`;
        }
    }
}

</script>


<style lang="scss" scoped>

    h3 {
    color:#008000;
    }

    h5 {
        color: #FA0000;
    }

    span {
    color: #000000;
    }

    li {
    padding: 0 10px;
    border-bottom: 2px solid black;
    }
</style>
