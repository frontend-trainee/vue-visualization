<template>
  <div id="my-line-chart"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.drawTable();
    });
  },
  methods: {
    drawTable() {
      let mychart = echarts.init(document.getElementById("my-line-chart"));
      let xData = [
        "2019-01",
        "2019-02",
        "2019-03",
        "2019-04",
        "2019-05",
        "2019-06",
      ];
      let yData = [13, 47, 35, 59, 26, 23];
      let yData2 = [13, 31, 21, 42, 38, 23];
      let option = {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          top: "0",
          bottom: "0",
          right: "0",
          left: 0,
        },
        xAxis: [
          {
            type: "category",
            data: xData,
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 4,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },

            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "课时",
            type: "line",
            data: yData,
            smooth: true,
            symbol: "none",
            lineStyle: {
              normal: {
                width: 3,
                color: " #f47095",
              },
            },
          },
          {
            name: "收益",
            type: "line",
            data: yData2,
            smooth: true,
            symbol: "none",
            lineStyle: {
              normal: {
                width: 3,
                color: "#fcb86a",
              },
            },
          },
        ],
      };
      mychart.setOption(option);

      window.addEventListener("resize", () => {
        mychart.resize();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#my-line-chart {
  width: 100%;
  height: 100%;
}
</style>
