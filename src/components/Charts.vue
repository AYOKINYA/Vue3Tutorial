<template>
    <Doughnut/>
    <Bar/>
    <Line/>
    <MixedChart/>
</template>

<script>
import Doughnut from './Doughnut.vue'
import Bar from './Bar.vue'
import Line from './Line.vue'
import MixedChart from './MixedChart.vue'

export default {
    name: "Charts",
    components: {
        Doughnut,
        Bar,
        Line,
        MixedChart
    }
}
</script>

<style scoped>

</style>