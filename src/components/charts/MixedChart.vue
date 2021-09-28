<template>
    <div>
        <bar-chart v-bind="barChartProps" />
    </div>
</template>

<script>
import { computed, ref } from 'vue';
//You can choose any chart to draw a mixed chart.
import { BarChart, useBarChart } from 'vue-chart-3';

import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

export default {
    name: 'MixedChart',
    components: {
        BarChart
    },

    setup() {
        const data1 = ref([40, 60, 30, 70, 15]);
        const data2 = ref([180, 150, 120, 140, 160]);

        const chartData = computed(() => ({
            labels: ["Seoul", "London", "Taipei", "Cairo", "Havana"],
            datasets: [
                {
                    label: "The 1st poll",
                    data: data1.value,
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                },
                {
                    type: 'line',
                    label: "The 2nd poll",
                    data: data2.value,
                    fill: false,
                    borderColor: 'rgba(199, 51, 255, 0.5)',
                    tension: 0.1
                },
            ],
        }));

        const options = computed(() => ({
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Chart.js Mixed Chart",
                },
            },
        }))

        const { barChartProps, barChartRef } = useBarChart({
            chartData,
            options
        });

        return { barChartProps, barChartRef };

    }
    
}
</script>

<style scoped>

</style>