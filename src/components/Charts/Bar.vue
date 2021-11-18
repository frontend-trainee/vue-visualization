<template>
  <div id="my-bar"></div>
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
      let mychart = echarts.init(document.getElementById("my-bar"));

      let xData = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
      ];
      let sData = [1, 2, 2, 3, 4, 4, 4.5, 3, 2, 1, 1, 0.5, 1, 0.5, 0.5];
      let sData2 = [
        -1, -3, -2, -1, -0.5, -1, -2, -3, -2, -2, -3, -3, -2, -2, -3,
      ];

      let option = {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          data: xData,
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "基金",
            type: "bar",
            stack: "使用情况",
            data: sData,
            barWidth: 8,
            itemStyle: {
              normal: { color: "#ff718b", barBorderRadius: 5 },
            },
          },
          {
            name: "股票",
            type: "bar",
            stack: "使用情况",
            data: sData2,
            barWidth: 8,
            itemStyle: {
              normal: { color: "#8675ff", barBorderRadius: 5 },
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
#my-bar {
  width: 100%;
  height: 100%;
}
</style>
