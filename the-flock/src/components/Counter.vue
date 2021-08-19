<template>
    <div>
        <h3>Counter</h3>
        <div class="main">
            <div>
                <button @click.prevent="$store.dispatch('counter/remove')">-</button>
            </div>
            <div>
                {{ count }}
            </div>
            <div>
                <button @click.prevent="$store.dispatch('counter/add')">+</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="css" scoped>
    .main {
        display: grid;
        grid-template-columns: 20px 15px 20px;
    }
</style>