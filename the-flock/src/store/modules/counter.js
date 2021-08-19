export default {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        count: (state) => state.count
    },
    mutations: {
        add(state) {
            state.count++
        },
        remove(state) {
            state.count--
        }
    },
    actions: {
        add({commit}) {
            commit('add')
        },
        remove({commit}) {
            commit('remove')
        }
    }
}