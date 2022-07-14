
import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = newVueRouter({
    mode:'history',
    routes: [
        {
            Path:'/',
            name:'home',
            component:HomeComp
        },
        {
            Path:'/post',
            name:'post',
            component:PostComp
        },
        {
            Path:'/chi-siamo',
            name:'about',
            component:AboutComp
        },
        {
            Path:'/contatti',
            name:'contacts',
            component:ContactsComp
        },
    ]
})
