<template>
    <div>
        <line-chart v-bind="lineChartProps"/>
    </div>    
</template>

<script>
import { computed, ref } from 'vue';
import { LineChart, useLineChart } from 'vue-chart-3';

import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

export default {
    name: 'Line',
    components: {
        LineChart,
    },
    setup() {
        const data1 = ref([40, 60, 30, 70, 15]);
        const data2 = ref([80, 50, 20, 40, 60]);

        const chartData = computed(() => ({
            labels: ["Seoul", "London", "Taipei", "Cairo", "Havana"],
            datasets: [
                {
                    label: "The 1st poll",
                    data: data1.value,
                    fill: false,
                    borderColor: 'rgba(255, 51, 106, 0.5)',
                    tension: 0.3
                },
                {
                    label: "The 2nd poll",
                    data: data2.value,
                    fill: false,
                    borderColor: 'rgba(51, 156, 255, 0.5)',
                    tension: 0.3
                },
            ],
        }));

        const options = computed(() => ({
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Popularity"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Countries"
                    }
                }
            }
        }))

        const { lineChartProps, lineChartRef } = useLineChart({
            chartData,
            options
        });

        return { lineChartProps, lineChartRef };
    }
}
</script>

<style scoped>

</style>