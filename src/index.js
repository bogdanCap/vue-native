// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import HelloWorld from './components/HelloWorld.vue'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);
Vue.use(BootstrapVue);

// 2. Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Unicode = { template: '<div>unicode</div>' }


// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },
        { path: '/test/:id', component: HelloWorld },
        { path: '/é', component: Unicode },
        { path: "*", template: '<h1>Page not found</h1>' }
    ]
});
Vue.config.productionTip = false;
new Vue({
    router,
    //store,
    render: h => h(App)
}).$mount("#app");


