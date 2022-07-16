
import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComp from './components/pages/HomeComp';
import AboutComp from './components/pages/AboutComp';
import PostComp from './components/pages/PostComp';
import ContactsComp from './components/pages/ContactsComp';
import DetailPostComp from './components/pages/DetailPostComp'

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'home',
            component: HomeComp
        },
        {
            path:'/post',
            name:'post',
            component: PostComp
        },
        {
            path:'/chi-siamo',
            name:'about',
            component: AboutComp
        },
        {
            path:'/contatti',
            name:'contacts',
            component: ContactsComp
        },
        {
            path:'/detail/:slug',
            name:'detail',
            component: DetailPostComp
        },
    ]
})

export default router;
