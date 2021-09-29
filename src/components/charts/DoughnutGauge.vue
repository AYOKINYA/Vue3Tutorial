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

export default {
  name: 'Doughnut',
  components: { DoughnutChart },
  setup() {
    const dataValues = ref([35, 65]);
    const toggleLegend = ref(true);

    const doughnutLabel = {
        id: 'doughnutLabel',
        beforeDraw(chart) {
            const {ctx, chartArea: {top, right, bottom, left}} = chart;
            ctx.save();

            const text = 35 + "%";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const fontSize = 60;
            const lineHeight = 1.6;
            ctx.font = fontSize + "px san-serif";

            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;
            const topY = centerY - lineHeight / 2

            ctx.fillStyle = 'rgba(111, 163, 212, 1)';
            
            const textX = centerX
            const textY = topY + lineHeight / 2;

            ctx.fillText(text,  textX, textY);
        }

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