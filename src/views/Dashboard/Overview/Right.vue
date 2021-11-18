<template>
  <div class="right column">
    <div class="chart1">
      <div class="detail-item">
        <p class="title">总收益</p>
        <div class="value">
          <span class="money">$12,875</span
          ><span class="per"><i class="iconfont icon-shang"></i>12.8%</span>
        </div>
      </div>

      <div class="heat">
        <HeatMap></HeatMap>
      </div>
    </div>

    <div class="part2">
      <div class="line-row row">
        <div class="chart">
          <LineChart></LineChart>
        </div>
        <div class="detail-item">
          <p class="title">总收益</p>
          <div class="value">
            <span class="money">$12,875</span
            ><span class="per"><i class="iconfont icon-shang"></i>12.8%</span>
          </div>
        </div>
      </div>

      <hr />

      <div class="gauge-row row">
        <div class="chart"><Gauge></Gauge></div>
        <div class="detail-item">
          <p class="title">总收益</p>
          <div class="value">
            <span class="money">$12,875</span
            ><span class="per"><i class="iconfont icon-shang"></i>12.8%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="raise">
      <table class="data-table">
        <tr v-for="item in tableData" :key="item.name">
          <td class="name">{{ item.name }}</td>
          <td class="value1">{{ item.value1 }}</td>
          <td class="value2">{{ item.value2 }}</td>
          <td class="rise">
            <i class="iconfont icon-shang" v-if="item.rise"></i>
            <i class="iconfont icon-xia" v-else></i>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import HeatMap from "@/components/Charts/HeatMap.vue";
import LineChart from "@/components/Charts/Line.vue";
import Gauge from "@/components/Charts/Gauge.vue";
export default {
  components: {
    HeatMap,
    LineChart,
    Gauge,
  },
  data() {
    return {
      tableData: [
        { name: "云服务器ESC", value1: "", value2: "" },
        { name: "域名注册", value1: "", value2: "" },
        { name: "对象存储OSS", value1: "", value2: "" },
        { name: "轻量应用服务器", value1: "", value2: "" },
        { name: "短信服务", value1: "", value2: "" },
        { name: "云数据库", value1: "", value2: "" },
        { name: "商标服务", value1: "", value2: "" },
        { name: "块存储EBS", value1: "", value2: "" },
      ],
    };
  },
  created() {
    this.getRandom();
  },
  methods: {
    getRandom() {
      let colorList = ["#29c74d", "#369fff", "#f6720f", "#9635f2"];
      for (let i = 0; i < 8; i++) {
        this.tableData[i].value1 = Math.floor(Math.random() * 600);
        this.tableData[i].value2 = Math.floor(Math.random() * 3000);
        this.tableData[i].color = colorList[i % 4];
        this.tableData[i].rise = i % 3 ? true : false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.column {
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.right {
  .chart1 {
    box-sizing: border-box;
    padding: 15px 20px;
    flex: 3;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 17px 30px #eee5ff;
    position: relative;
    display: flex;
    flex-direction: column;
    .heat {
      margin-top: 15px;
      flex: 1;
    }
  }
  .part2 {
    box-sizing: border-box;
    padding: 15px 20px;
    margin: 25px 0;
    height: 180px;
    z-index: 5;
    background-color: $theme-purple;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .row {
      height: 65px;
      display: flex;
      .chart {
        flex: 1;
      }
      .detail-item {
        .title {
          color: $text-color-lite;
        }
        .money {
          color: #fff;
        }
      }
    }
    hr {
      height: 2px;
      background-color: #806ffa;
      border: none;
    }
  }
  .raise {
    box-sizing: border-box;
    padding: 15px 20px;
    flex: 2;
    background-color: $theme-purple;
    border-radius: 8px;
  }
  .detail-item {
    .title {
      font-size: 14px;
      color: $text-color-grey;
      letter-spacing: 5px;
    }
    .value {
      margin-top: 5px;
      .money {
        display: inline-block;
        width: 110px;
        font-size: 26px;
        color: $text-color;
        font-weight: 500;
      }
      .per {
        margin-left: 10px;
        color: $theme-green;
        font-size: 12px;
        i {
          font-size: 12px;
          margin-right: 5px;
        }
        vertical-align: middle;
      }
    }
    .desc {
      margin-top: 5px;
      font-size: 12px;
      color: $text-color-grey-lite;
    }
  }
  .data-table {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    tr {
      height: 25px;
      display: flex;
      align-items: center;
      justify-items: space-between;
      td {
        vertical-align: middle;
      }
      .point {
        width: 20px;
        .point-out {
          padding: 3px;
          border-radius: 7px;
          background: #fff;
          .point-inner {
            width: 4px;
            height: 4px;
            border-radius: 4px;
          }
        }
      }
      .name {
        flex: 1;
        width: 90px;
        font-size: 14px;
        color: #fff;
      }
      .value1 {
        width: 60px;
        font-size: 14px;
        color: #fff;
      }
      .value2 {
        width: 60px;
        font-size: 14px;
        color: #fff;
      }
      .icon-shang {
        color: $theme-green;
      }
      .icon-xia {
        color: $theme-red;
      }
    }
  }
}
</style>
