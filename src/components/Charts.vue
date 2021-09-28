<template>
    <doughnut/>
    <bar/>
    <Line/>
</template>

<script>
import Doughnut from './Doughnut.vue'
import Bar from './Bar.vue'
import Line from './Line.vue'

export default {
    name: "Charts",
    components: {
        Doughnut,
        Bar,
        Line
    }
}
</script>

<style scoped>

</style>