// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import peopleRoutes from './router/route.vue';
import module from './store/store.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "./scss/_main.scss"; //scss loading

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false;
/*
//axios catch all error
axios.interceptors.response.use(null, function(error) {
    console.warn('Error status', error.response.status);
    return Promise.reject(error);
});
*/


const router = new VueRouter({
    //mode: 'history',
  //  base: __dirname,
    routes: [
        ...peopleRoutes
    ]
});

const store = new Vuex.Store({
    ...module
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");


