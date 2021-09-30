<template>
    <doughnut-chart v-bind="doughnutChartProps" />
</template>

<script>
import { computed, ref } from 'vue';
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';

// Chart.js 3 is tree-shakeable, 
// so it is necessary to import and register the controllers, elements, scales and plugins you are going to use.
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

import drawDoughnutLabel from "./DoughnutLabel/core"

export default {
  name: 'DoughnutTexts',
  components: { DoughnutChart },
  setup() {
    const dataValues = ref([35, 65]);
    const toggleLegend = ref(true);

    // text to write inside the doughnut chart
    const texts = ref({
      font: 'san-serif', 
      color: 'red', // if color is not given, utils.defaults.font.color is set
      labels: [
        {
          text: "Progress",
            font: {
              size: '60'
            },
          //The color is red without given color
        },
        {
          text: "65%",
            font: {
              size: '60'
            },
          color: 'rgba(111, 163, 212, 1)'
        },
      ]
    });

    const doughnutLabel = {
        id: 'doughnutLabel',
        beforeDraw: (chart) => drawDoughnutLabel(chart, texts.value)
    };

    const options = computed(() => ({
      scales: {
        myScale: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "top" : "bottom",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Gauge Chart",
        },
      },
    }));


    const testData = computed(() => ({
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            '#3ec556',
            'rgba(0, 0, 0, 0)'
          ],
          hoverBackgroundColor: [
            '#3ec556',
            'rgba(0, 0, 0, 0)'
          ],
          borderColor: [
            '#3ec556',
            '#3ec556'
          ]
          // ,
          // borderWidth: [
          //   0,
          //   0
          // ]
        },
      ],
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
      plugins: [doughnutLabel]
    });

    return { dataValues, testData, options, doughnutChartRef, doughnutChartProps };
  },
};
</script>

<style scoped>

</style>