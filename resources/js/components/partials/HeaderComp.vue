<template>
    <div class="container">

        <div class="d-flex">

            <ul class="text-center">
                <li>
                    <router-link :to="{name: 'home'}">Home</router-link>
                </li>

                <li>
                    <router-link :to="{name: 'post'}">Post</router-link>
                </li>

                <li>
                    <router-link :to="{name: 'about'}">Chi Siamo</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'contacts'}">Contatti</router-link>
                </li>
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
                &.router-link-exact-active{
                    color:#1EFF00;
                }
            }
        }

    }

</style>
