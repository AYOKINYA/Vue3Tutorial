<template>
    <Doughnut/>
    <Bar/>
    <Line/>
    <MixedChart/>
</template>

<script>
import Doughnut from './Doughnut'
import Bar from './Bar'
import Line from './Line'
import MixedChart from './MixedChart'

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