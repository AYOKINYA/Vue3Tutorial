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

        // TODO : compare heights of bars in pair and draw the gaps accordingly
        const drawGap = function(chart) {
            const {ctx} = chart;

            const x1 = chart._metasets[0].data[0].x;
            const y1 = chart._metasets[0].data[0].y;
            const w1 = chart._metasets[0].data[0].width;

            const x2 = chart._metasets[0].data[1].x;
            const y2 = chart._metasets[0].data[1].y;
            const w2 = chart._metasets[0].data[1].width;

            ctx.beginPath();
            ctx.strokeStyle = "#ff0000";
            ctx.lineWidth = 5
            ctx.setLineDash([5, 3]);
            ctx.moveTo(x2 - w2 / 2, y2 + ctx.lineWidth / 2); //From
            ctx.lineTo(x1 - w1 / 2, y2 + ctx.lineWidth / 2); //To
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = "#ff0000";
            ctx.lineWidth = 5
            ctx.setLineDash([5, 3]);
            ctx.moveTo(x2 - w2 / 2, y1 - ctx.lineWidth / 2);
            ctx.lineTo(x1 - w2 / 2, y1 - ctx.lineWidth / 2);
            ctx.stroke();
        }

        const barGap = {
            id: 'barGap',
            afterDraw: (chart) => drawGap(chart)
        }

        const { barChartProps, barChartRef } = useBarChart({
            chartData,
            options,
            plugins: [barGap]
        });


        return { barChartProps, barChartRef };

    }
    
}
</script>

<style scoped>

</style>