<template>
    <div>
        <h3>Todo</h3>
        <div>
            <ul>
                <li v-for="(item, key) in items" :key="key">
                    <input type="checkbox" @click="removeItem(item)" /> {{item}}
                </li>
            </ul
            >
            <form @submit.prevent="submit">
                <input v-model="input" />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            input: ''
        }
    },
    methods: {
        submit() {
            this.$store.dispatch('todo/addItem', this.input)
            this.input = ''
        },
        removeItem(item) {
            this.$store.dispatch('todo/removeItem', item)
        }
    }
}
</script>