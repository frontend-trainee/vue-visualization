<template>
  <div id="heat-map"></div>
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
      let mychart = echarts.init(document.getElementById("heat-map"));

      var hours = ["week1", "week2", "week3", "week4"];
      var days = [1, "", "", "", 500, "", "", "", 1000, "", "", "", 1500];

      var data = [
        [0, 0, 53.6],
        [0, 1, 7.7],
        [0, 2, 26.4],
        [0, 3, 34.1],
        [0, 4, 12.4],
        [0, 5, 53.6],
        [0, 6, 7.7],
        [0, 7, 26.4],
        [0, 8, 34.1],
        [0, 9, 12.4],
        [0, 10, 0],
        [0, 11, 0],
        [0, 12, 4],

        [1, 0, 1],
        [1, 1, 1],
        [1, 2, 1],
        [1, 3, 1],
        [1, 4, 31],
        [1, 5, 31],
        [1, 6, 31],
        [1, 7, 0],
        [1, 8, 31],
        [1, 9, 100],
        [1, 10, 0],
        [1, 11, 0],
        [1, 12, 0],

        [2, 0, 16],
        [2, 1, 16],
        [2, 2, 16],
        [2, 3, 31],
        [2, 4, 0],
        [2, 5, 0],
        [2, 6, 1],
        [2, 7, 0],
        [2, 8, 0],
        [2, 9, 0],
        [2, 10, 0],
        [2, 11, 0],
        [2, 12, 5],

        [3, 0, 31.0],
        [3, 1, 38.5],
        [3, 2, 52.5],
        [3, 3, 11.4],
        [3, 4, 6.9],
        [3, 5, 31.0],
        [3, 6, 38.5],
        [3, 7, 52.5],
        [3, 8, 11.4],
        [3, 9, 6.9],
        [3, 10, 0],
        [3, 11, 0],
        [3, 12, 1],
      ];

      let option = {
        tooltip: {
          position: "top",
        },
        animation: false,
        grid: {
          top: "0",
          bottom: "0",
          right: "0",
          left: 32,
        },
        xAxis: {
          type: "category",
          data: hours,
          splitArea: {
            show: true,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          data: days,
          splitArea: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            color: "#a398fe",
            fontSize: 10,
          },
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "15%",
          color: ["#ff718b", "#4c6cfa", "#dcdff2"],
        },
        series: [
          {
            name: "",
            type: "heatmap",
            data: data,
            label: {
              show: false,
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 3,
              borderType: "solid",
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)",
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
#heat-map {
  width: 100%;
  height: 100%;
}
</style>
