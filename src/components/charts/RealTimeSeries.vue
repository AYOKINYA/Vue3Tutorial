<template>
    <div class="small">
        <line-chart v-bind="lineChartProps" id="mychart"></line-chart>
        <button @click="stopGettingData">STOP</button>
        <button @click="getRealtimeData">get Data</button>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { LineChart, useLineChart } from 'vue-chart-3';
import io from "socket.io-client";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

var socket = io.connect("http://localhost:4000");

export default {
    name: 'RealTimeSeries',
    components: {
        LineChart
    },
    setup() {

        let x = ref([]);
        let y = ref([]);

        const dataCollection = computed(() => ({
			labels: x.value,
            datasets: [
                {
                    label: "Time Series Data",
                    backgroundColor: "rgba(255, 51, 106, 0.5)",
                    data: y.value,
                },
            ]
		}));

        const options = computed(() => ({
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'vue-chart-3',
				},
			},
		}));

        const fillData = (currentData, fetchedData) => {
			const newArray = [...currentData.value, fetchedData]
			return (newArray);
		};

        const getRealtimeData = () => {
            socket.on("newdata", fetchedData => {
                y.value = fillData(y, fetchedData);
                x.value = fillData(x, x.value.length);
            })
        }

        const stopGettingData = () => {
            socket.off("newdata", console.log("FREEZE!"));
        }

        onMounted(() => getRealtimeData())

        const getRandomChartValues = (number) => {
			return Math.floor(Math.random() * number)
		}

        const { lineChartProps, lineChartRef } = useLineChart({
			chartData: dataCollection,
			options,
		});

        return {
            dataCollection,
			options,
            fillData,
            stopGettingData,
			getRealtimeData,
			getRandomChartValues,
			lineChartProps,
			lineChartRef,
        }

    }
}
</script>

<style scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>