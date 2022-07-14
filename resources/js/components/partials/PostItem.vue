<template>

    <div class="container">

        <ul>
            <li>
                <h3>Titolo: <span>{{ post.title }}</span></h3>
                <h3>Descrizione: <span>{{ post.description }}</span></h3>
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
    }
}
</script>


<style lang="scss" scoped>

    h3 {
    color:#008000;
    }

    span {
    color: #000000;
    }

    li {
    padding: 0 10px;
    border-bottom: 2px solid black;
    }
</style>
