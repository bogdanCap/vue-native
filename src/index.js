// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import peopleRoutes from './router/routes.vue';

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);
Vue.use(BootstrapVue);

/*
//axios catch all error
axios.interceptors.response.use(null, function(error) {
    console.warn('Error status', error.response.status);
    return Promise.reject(error);
});
*/


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        ...peopleRoutes
    ]
});

Vue.config.productionTip = false;
new Vue({
    router,
    //store,
    render: h => h(App)
}).$mount("#app");


