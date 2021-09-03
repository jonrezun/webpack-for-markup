import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import '@babel/polyfill';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            component: Index,
            name: 'Index'
        }
    ]
})