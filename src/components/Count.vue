<template>
<div>
   
    <hr/>
    <h2>You've clicked {{ count }} times.</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</div>
    
</template>

<script>
import calcCount from '../composables/calcCount'

export default {
    name: 'Count',
    setup() {
        const {count, increment, decrement} = calcCount();

        return {
            count,
            increment,
            decrement
        }
    }
    
}
</script>

<style scoped>

</style>