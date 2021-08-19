<template>
    <div>
        <h3>Calculator</h3>
        <form @submit.prevent="submit">
            <input type="text" v-model="input" />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: ''
        }
    },
    methods: {
        submit() {
            this.$store.dispatch('calculator/calculate', this.input)
            
            this.$nextTick(() => this.input = this.$store.getters['calculator/lastResult'])
        }
    }
}
</script>