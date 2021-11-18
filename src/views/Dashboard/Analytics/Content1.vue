<template>
  <div class="analytics-content">
    <!-- 用户信息 -->
    <div class="user-info">
      <p class="user-title">负载基本情况分析</p>

      <!-- 成绩 -->
      <div class="record">
        <!-- 头部 -->
        <div class="head">
          <span class="title">所有服务器</span>
          <span class="detail"> 更多 > </span>
        </div>
        <!-- 用户数 -->
        <h1 class="value">2,431,340,123,454</h1>
      </div>
      <!-- 进度 -->
      <div class="fuzai">
        <div id="chart1"></div>
        <div id="chart2"></div>
        <div id="chart3"></div>
        <div id="chart4"></div>
      </div>
      <!-- 表格 -->
    </div>

    <!-- 分布 -->
    <div class="distribution"></div>
  </div>
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
      let mychart1 = echarts.init(document.getElementById("chart1"));
      let mychart2 = echarts.init(document.getElementById("chart2"));
      let mychart3 = echarts.init(document.getElementById("chart3"));
      let mychart4 = echarts.init(document.getElementById("chart4"));
      const option1 = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
            },
            data: [
              {
                value: 50,
                name: "CUP",
              },
            ],
          },
        ],
      };
      mychart1.setOption(option1);
      const option2 = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
            },
            data: [
              {
                value: 20,
                name: "带宽",
              },
            ],
          },
        ],
      };
      mychart2.setOption(option2);
      const option3 = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
            },
            data: [
              {
                value: 73,
                name: "内存",
              },
            ],
          },
        ],
      };
      mychart3.setOption(option3);
      const option4 = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
            },
            data: [
              {
                value: 82,
                name: "吞吐",
              },
            ],
          },
        ],
      };
      mychart4.setOption(option4);
    },
  },
};
</script>
<style lang="scss" scoped>
.analytics-content {
  height: 100%;
  padding: 20px 25% 20px 0px;
  box-sizing: border-box;
  color: $text-color;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

/* 用户信息 */
.user-info {
  flex: 1;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .user-title {
    font-size: 28px;
  }
  .record {
    .head {
      .title {
        font-weight: 600;
        font-size: 18px;
      }
      .detail {
        margin-left: 10px;
        font-size: 14px;
      }
    }
    .value {
      font-size: 54px;
      font-weight: 400;
      font-family: sans-serif, "Arial Narrow Bold";
    }
  }
}

/* 分布 */
.distribution {
  .head {
    .title {
      font-weight: 600;
      font-size: 18px;
    }
    .detail {
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
.fuzai {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#chart1 {
  width: 250px;
  height: 250px;
}
#chart2 {
  width: 250px;
  height: 250px;
}
#chart3 {
  width: 250px;
  height: 250px;
}
#chart4 {
  width: 250px;
  height: 250px;
}
</style>
