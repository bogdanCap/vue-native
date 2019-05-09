<script>
    const state = {
        count: 0
    };

    const mutations = {
        increment (state) {
            state.count++
        },
        decrement (state) {
            if (state.count > 0) {
                state.count--
            }
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