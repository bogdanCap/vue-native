<template>
    <!--
    <div id="app">
        <HelloWorld/>
    </div>
    -->
    <div id="app">

            <div class="col-md-12 no-padding">

                <!--menu -->
                <nav class="navbar navbar-expand-lg navbar-light bg-light nav-full-length">
                    <!--
                    <a class="navbar-brand" href="#"><router-link to="/">Home</router-link></a>



                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    -->

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/">Home</router-link>
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/foo">Foo</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/bar">Bar</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
                                        Bar event
                                    </router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/é">/é</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/é?t=%25ñ">/é?t=%ñ</router-link>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/é#%25ñ">/é#%25ñ</router-link>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/test/id?search=test">test</router-link>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/my/segment/test">my</router-link>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" v-on:click="clickRoute" href="#">
                                    <router-link to="/product">Products</router-link>
                                </a>
                            </li>

                            <!--
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>-->

                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>


        <!--
        <pre id="query-t">{{ $route.query.t }}</pre>
        <pre id="hash">{{ $route.hash }}</pre>
        -->
        <!--route body display here -->
        <router-view class="view">

        </router-view>
    </div>


</template>

<script>
    export default {
        name: 'App',
        mounted() {

        },
        computed: {
            count () {
                return this.$store.state.count
            }
        },
        created() {

        },
        methods: {
            clickRoute: function (event) {
                console.log('click');
                console.log(this.$store.state.count);

                //alert(event.target.tagName)

            }
        }
    }
</script>


