<template>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <calculator />
    <todo :items="$store.getters['todo/items']"/>
    <counter :count="$store.getters['counter/count']"/>
  </div>
</template>

<script>
import calculator from './Calculator.vue'
import todo from './Todo.vue'
import counter from './Counter.vue'

export default {
  components: {
    calculator,
    todo,
    counter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
