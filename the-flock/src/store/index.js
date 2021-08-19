import Vue from 'vue'
import Vuex from 'vuex'
import calculator from './modules/calculator'
import counter from './modules/counter'
import todo from './modules/todo'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        calculator,
        counter,
        todo
      }
})

export default store