<script>
    import HelloWorld from '../components/HelloWorld.vue';
    const Home = { template: '<div>home</div>' };
    const Foo = { template: '<div>foo</div>' };
    const Bar = { template: '<div>bar</div>' };
    const Unicode = { template: '<div>unicode</div>' };

    export default  [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },
        { path: '/test/:id', component: HelloWorld },
        { path: '/é', component: Unicode },
        { path: "*", template: '<h1>Page not found</h1>' },
        { path: '/my/segment/test', component: HelloWorld }
    ];
</script>