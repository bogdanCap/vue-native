<template>
    <div class="row">
        <div class="col-sm-6">
            <button type="button" v-on:click="selectProduct" class="btn btn-info">Product 1</button>
        </div>
        <div class="col-sm-6">
            <button type="button" v-on:click="selectProduct" class="btn btn-info">Product 2</button>
        </div>
        
        <div class="col-m-12">
            <button type="button" v-on:click="decreaseProduct" class="btn btn-danger">Remove one product</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',

        watch: {
            '$route' (to, from) {
                // react to route changes...




            }
        },
        methods: {
            selectProduct: function (event) {
                // `this` inside methods points to the Vue instance

                console.log('select product and increase count');
                this.$store.commit('increment');
                // `event` is the native DOM event

                //alert(event.target.tagName)

            },
            decreaseProduct: function () {
                this.$store.commit('decrement');
            }
        },

        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                search: this.$route.query.search
            }
        },
        created() {
            //get route segment and request parameters
            console.log(this.count);
        },
        computed: {
            count () {
                return this.$store.state.count
            }
        }
    }
</script>


