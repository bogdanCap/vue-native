<template>
    <!--
    <div id="app">
        <HelloWorld/>
    </div>
    -->
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>1111</h1>
                </div>
                <div class="col-md-6">
                    <h1>2222</h1>
                </div>
            </div>
        </div>
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
            <li><router-link to="/test/id?search=test">test</router-link></li>
            <li><router-link to="/my/segment/test">my</router-link></li>

        </ul>
        <pre id="query-t">{{ $route.query.t }}</pre>
        <pre id="hash">{{ $route.hash }}</pre>
        <!--route body display here -->
        <router-view class="view">

        </router-view>
    </div>


</template>

<script>
   // import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        mounted() {
            /*
            let recaptchaScript = document.createElement('script');
            recaptchaScript.setAttribute('src', 'disc/foo.bundle.js');
            document.head.appendChild(recaptchaScript)
            */
        }
       // components: {
      //      HelloWorld
      //  }
    }
</script>


