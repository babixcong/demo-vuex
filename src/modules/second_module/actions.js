const actions = {
    increment({commit}) {
        commit('increment');
    },
    decrement({commit}) {
        commit('decrement');
    },
    resetCounter({commit}) {
        commit('resetCounter');
    },
}

export default actions;
