import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/pages/Home'
import Layouts from './components/pages/LayoutsCatalog'
import Portfolio from "./components/pages/Portfolio";
import MusicService from "./components/pages/MusicService";
import ContactUs from "./components/pages/ContactUs";
import PageNotFound from "./components/pages/PageNotFound";
import VueCarousel from 'vue-carousel';

Vue.use(VueRouter, VueCarousel);

Vue.config.productionTip = false;

let router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home', component: Home,
        },
        {
            path: '/layouts', component: Layouts,
        },
        {
            path: '/portfolio', component: Portfolio,
        },
        {
            path: '/musicservice', component: MusicService,
        },
        {
            path: '/contact', component: ContactUs,
        },
        { path: "*", component: PageNotFound },

    ]
});

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app');


