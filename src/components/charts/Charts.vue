<template>
    <Doughnut/>
    <Bar/>
    <Line/>
    <MixedChart/>
    <DoughnutGauge/>
    <DoughnutTexts/>
</template>

<script>
import Doughnut from './Doughnut'
import Bar from './Bar'
import Line from './Line'
import MixedChart from './MixedChart'
import DoughnutGauge from './DoughnutGauge'
import DoughnutTexts from './DoughnutTexts'

export default {
    name: "Charts",
    components: {
        Doughnut,
        Bar,
        Line,
        MixedChart,
        DoughnutGauge,
        DoughnutTexts
    }
}
</script>

<style scoped>

</style>