export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        items: (state) => state.items
    },
    mutations: {
        add_item(state, item) {
            state.items.push(item)
        },
        remove_item(state, item) {
            state.items.splice(state.items.indexOf(item), 1)
        }
    },
    actions: {
        addItem({commit}, item) {
            commit('add_item', item)
        },
        removeItem({commit}, item) {
            commit('remove_item', item)
        }
    }
}