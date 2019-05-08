<script>
    import HelloWorld from '../components/HelloWorld.vue';
    const Home = { template: '<div>home</div>' };
    const Foo = { template: '<div>foo</div>' };
    const Bar = { template: '<div>bar</div>' };
    const Unicode = { template: '<div>unicode</div>' };
    const PageNotFound = { template: '<div><h1 style="text-align: center">Page not found</h1></div>' };

    export default  [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },
        { path: '/test/:id', component: HelloWorld },
        { path: '/é', component: Unicode },
        { path: '/my/segment/test', component: HelloWorld },
        { path: "/*", component: PageNotFound}
    ];
</script>