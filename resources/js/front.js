
window.Vue = require('vue');
window.axios = require('axios');

require('./bootstrap');

import App from './App.vue'

const app = new Vue({
    el: '#app',

    render: h => h(App)
});
