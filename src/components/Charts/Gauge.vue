<template>
  <div id="my-guage"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return { iconPath: require("@/assets/like.png") };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawTable();
    });
  },
  methods: {
    drawTable() {
      let mychart = echarts.init(document.getElementById("my-guage"));
      let value = 82;
      let option = {
        title: {
          text: "{a|}" + "\n" + "{c|" + value + "}" + "{d|%}",
          x: "center",
          y: "center",
          textStyle: {
            rich: {
              a: {
                height: 15,
                align: "center",
                backgroundColor: {
                  image: this.iconPath,
                },
              },
              c: {
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                lineHeight: 20,
              },
              d: {
                fontSize: 10,
                color: "#fff",
              },
            },
          },
        },
        grid: {
          top: "0",
          bottom: "0",
          right: "0",
          left: 0,
        },
        angleAxis: {
          max: 100, // 一圈是多少
          axisLine: {
            show: false, // 隐藏角度轴（圆心角）
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false, // 隐藏分割线
          },
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          // data: ['周四'],
          z: 5,
        },
        polar: {
          radius: [24, 32], // 总体的最小半径、最大半径
        },
        series: [
          {
            stack: "ring",
            type: "bar",
            data: [value],
            silent: true,
            showBackground: true,
            backgroundStyle: {
              color: "#19576044",
            },
            itemStyle: {
              color: "#fff",
            },
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 4,
          },
          {
            stack: "ring",
            type: "bar",
            data: [0.2],
            silent: true,
            itemStyle: {
              color: "#fff",
              shadowBlur: 2,
              shadowColor: "#28e9f6",
            },
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 10,
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
#my-guage {
  width: 100%;
  height: 100%;
}
</style>
