<template>
  <div id="my-tree"></div>
</template>
<script>
import * as echarts from "echarts";
import tree_data from "../../assets/data.json";
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
      let mychart = echarts.init(document.getElementById("my-tree"));
      const treemapOption = {
        series: [
          {
            type: "treemap",
            id: "echarts-package-size",
            animationDurationUpdate: 1000,
            roam: false,
            nodeClick: undefined,
            data: tree_data.children,
            universalTransition: true,
            label: {
              show: true,
            },
            breadcrumb: {
              show: false,
            },
          },
        ],
      };
      const sunburstOption = {
        series: [
          {
            type: "sunburst",
            id: "echarts-package-size",
            radius: ["20%", "90%"],
            animationDurationUpdate: 1000,
            nodeClick: undefined,
            data: tree_data.children,
            universalTransition: true,
            itemStyle: {
              borderWidth: 1,
              borderColor: "rgba(255,255,255,.5)",
            },
            label: {
              show: false,
            },
          },
        ],
      };
      let currentOption = treemapOption;
      mychart.setOption(currentOption);
      setInterval(function () {
        currentOption =
          currentOption === treemapOption ? sunburstOption : treemapOption;
        mychart.setOption(currentOption);
      }, 3000);
      window.addEventListener("resize", () => {
        mychart.resize();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#my-tree {
  width: 100%;
  height: 100%;
}
</style>
