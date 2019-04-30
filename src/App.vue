<template>
    <!--
    <div id="app">
        <HelloWorld/>
    </div>
    -->
    <div id="app">
        <h1>Basic</h1>
        <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/foo">/foo</router-link></li>
            <li><router-link to="/bar">/bar</router-link></li>
            <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
                <a>/bar</a>
            </router-link>
            <li><router-link to="/é">/é</router-link></li>
            <li><router-link to="/é?t=%25ñ">/é?t=%ñ</router-link></li>
            <li><router-link to="/é#%25ñ">/é#%25ñ</router-link></li>
        </ul>
        <pre id="query-t">{{ $route.query.t }}</pre>
        <pre id="hash">{{ $route.hash }}</pre>
        <router-view class="view"></router-view>
    </div>


</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        }
    }
</script>


