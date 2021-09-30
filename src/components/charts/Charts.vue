<template>
    <Doughnut/>
    <Bar/>
    <Line/>
    <MixedChart/>
    <DoughnutGauge/>
    <Text/>
</template>

<script>
import Doughnut from './Doughnut'
import Bar from './Bar'
import Line from './Line'
import MixedChart from './MixedChart'
import DoughnutGauge from './DoughnutGauge'
import Text from './Text'

export default {
    name: "Charts",
    components: {
        Doughnut,
        Bar,
        Line,
        MixedChart,
        DoughnutGauge,
        Text
    }
}
</script>

<style scoped>

</style>