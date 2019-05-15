<template>
    <div class="row">
        <div class="col-sm-2" v-for="(product, index) in products">
            <transition name="slide-fade">
                <div v-if="product.show" @click="hideProduct(product.id, index)" class="list-group">
                <a  href="#" v-on:click="addProduct(product)" class="list-group-item list-group-item-action list-group-item-primary">
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
            addProduct: function (product) {
                this.$store.commit('addGoods', product);
            },
            hideProduct: function (productId, index) {
               this.products[index].show = false;
            },

        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                search: this.$route.query.search,
                products: [
                    {id:1, name: 'Enduro', price: 2233, show: true},
                    {id:2, name: 'Calipso', price: 4513, show: true},
                    {id:3, name: 'Frost', price: 33, show: true},
                    {id:4, name: 'Trek', price: 23, show: true},
                    {id:5, name: 'Potato', price: 56, show: true},
                    {id:6, name: 'Espero', price: 6678, show: true}
                ],
                show: 0,
            }
        },
        created() {
            //get route segment and request parameters
        },
        computed: {
            test() {
                console.log("in if");

            }
        }
    }
</script>


