<script>
    const state = {
        count: 0,
        goods: []
    };

    const mutations = {
        increment (state) {
            state.count++
        },
        decrement (state) {
            if (state.count > 0) {
                state.count--
            }
        },
        addGoods (state, product) {
            var existProduct = state.goods.filter(function(elem){
                if(elem.id == product.id) return elem;
            });
            if(existProduct.length == 0) {
                state.goods.push(product);
            }
        },
        clearGoods (state) {
            state.goods = []
        }
    };

    const getters = {};

    const actions = {};

    export default {
        state,
        actions,
        mutations,
        getters
    };
</script>