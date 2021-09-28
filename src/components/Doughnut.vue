<template>
  <div>
    <DoughnutChart v-bind="doughnutChartProps" />
  </div>
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
    const dataValues = ref([30, 40, 60, 70, 5]);
    const toggleLegend = ref(true);

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
          text: "Chart.js Doughnut Chart",
        },
      },
    }));

    const testData = computed(() => ({
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });

    return { testData, options, doughnutChartRef, doughnutChartProps };
  },
};
</script>

<style scoped>

</style>