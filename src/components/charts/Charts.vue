<template>
    <Doughnut/>
    <Bar/>
    <Line/>
    <MixedChart/>
    <DoughnutGauge/>
</template>

<script>
import Doughnut from './Doughnut'
import Bar from './Bar'
import Line from './Line'
import MixedChart from './MixedChart'
import DoughnutGauge from './DoughnutGauge'

export default {
    name: "Charts",
    components: {
        Doughnut,
        Bar,
        Line,
        MixedChart,
        DoughnutGauge
    }
}
</script>

<style scoped>

</style>