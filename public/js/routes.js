
import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComp from 'resources/js/components/pages/HomeComp';
import AboutComp from 'resources/js/components/pages/AboutComp';
import ContactsComp from 'resources/js/components/pages/;ContactsComp'
import PostComp from 'resources/js/components/pages/PostComp';

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

export default router;
