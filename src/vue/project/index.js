var CW = window.CW || {};
import '@babel/polyfill';

import Vue from 'vue'
import App from './App.vue';
import router from './router';

CW.VM = new Vue({
    router,
    render: h => h(App),
}).$mount(CW.vueProjectEl);