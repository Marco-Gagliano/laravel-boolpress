<template>
    <div class="container">

        <div class="d-flex">

            <ul class="text-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">Post</a></li>
                <li><a href="#">Chi Siamo</a></li>
                <li><a href="#">Contatti</a></li>
            </ul>

        </div>


    </div>
</template>


<script>
export default {
    name: 'HeaderComp'
}
</script>


<style lang="scss" scoped>


    .container {
        background-color: #000000;
    }

    ul {
        list-style: none;

        li {
            text-align: center;

            a {
            color: #FF0000;
            font-size: 24px;
            text-decoration: none;

                &:hover {
                color: #1EFF00;
                }
            }
        }

    }

</style>
