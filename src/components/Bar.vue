<template>
    <div>
        <bar-chart v-bind="barChartProps" />
    </div>
</template>

<script>

import { computed, ref } from 'vue';
import { BarChart, useBarChart } from 'vue-chart-3';

import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

export default {
    name: "Bar",
    components: {
        BarChart,
    },

    setup() {
        const data = ref([40, 60, 30, 70, 15]);

        const chartData = computed(() => ({
            labels: ["Seoul", "London", "Taipei", "Cairo", "Havana"],
            datasets: [
                {
                    label: "The 1st data set",
                    data: data.value,
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
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
                    text: "Chart.js Bar Chart",
                },
            },
        }))

        const {barChartProps, barChartRef} = useBarChart({
            chartData,
            options
        });

        return { barChartProps, barChartRef };

    }
    
}
</script>

<style scoped>

</style>