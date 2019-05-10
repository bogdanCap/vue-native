<template>
    <div class="row">
        <div class="col-sm-2" v-for="product in products">
            <transition name="slide-fade">
                <div v-if="show !== product.id" @click="hideProduct(product.id)" class="list-group">
                <a  href="#" v-on:click="selectProduct(product)" class="list-group-item list-group-item-action list-group-item-primary">
                    {{product.name}}
                    <p style="padding: 0px">price = {{product.price}}</p>
                </a>
            </div>
            </transition>
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
            selectProduct: function (product) {
                this.$store.commit('addGoods', product);
            },
            hideProduct: function (productId) {
                this.show = productId;
            },

        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                search: this.$route.query.search,
                products: [
                    {id:1, name: 'Enduro', price: 2233},
                    {id:2, name: 'Calipso', price: 4513},
                    {id:3, name: 'Frost', price: 33},
                    {id:4, name: 'Trek', price: 23},
                    {id:5, name: 'Potato', price: 56},
                    {id:6, name: 'Espero', price: 6678}
                ],
                show: 0
            }
        },
        created() {
            //get route segment and request parameters
        },
        computed: {
            count () {
                //return this.$store.state.count
            }
        }
    }
</script>


