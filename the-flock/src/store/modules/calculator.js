function calcOperation(input, operation, fn) {
    return input
    .split(operation)
    .reduce((out, value) => {
        if(isNaN(value)) {
            return out
        }
        out = out ? fn(out, parseFloat(value)) : parseFloat(value)
        return out
    }, 0)
}

export default {
    namespaced: true,
    state: {
        lastResult: 0,
        input: ''
    },
    getters: {
        lastResult: (state) => state.lastResult
    },
    mutations: {
        set_last_result(state, result) {
            state.lastResult = parseFloat(result)
        }
    },
    actions: {
        calculate({commit}, input) {
            const result = [calcOperation(input, '*', (out, value) => out * value),
                calcOperation(input, '/', (out, value) => out / value),
                calcOperation(input, '+', (out, value) => out + value),
                calcOperation(input, '-', (out, value) => out - value)].reduce((out, value) => out + value, 0)
            commit('set_last_result', result)
            return result
        }
    }
}