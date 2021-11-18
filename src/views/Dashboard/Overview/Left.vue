<template>
  <div class="left column">
    <!-- 上部图表模块 -->
    <div class="left-table">
      <div class="detail-item">
        <p class="title">总收益</p>
        <div class="value">
          <span class="money">$12,875</span
          ><span class="per"><i class="iconfont icon-shang"></i>12.8%</span>
        </div>
      </div>
      <div class="bar-container">
        <Bar></Bar>
      </div>
      <table class="data-table">
        <tr v-for="item in tableData" :key="item.name">
          <td class="point">
            <div class="point-out">
              <div
                class="point-inner"
                :style="{ backgroundColor: item.color }"
              ></div>
            </div>
          </td>
          <td class="name">{{ item.name }}</td>
          <td class="value1">{{ item.value1 }}</td>
          <td class="value2">{{ item.value2 }}</td>
        </tr>
      </table>
    </div>

    <div class="raise">
      <div class="detail-item">
        <p class="title">总区块</p>
      </div>
      <TreeMap />
    </div>
  </div>
</template>
<script>
import Bar from "@/components/Charts/Bar.vue";
import TreeMap from "@/components/Charts/Treemap.vue";
export default {
  components: {
    Bar,
    TreeMap,
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
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.column {
  height: calc(100vh - 60px);
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.left {
  .left-table {
    height: 425px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 17px 30px #eee5ff;
    box-sizing: border-box;
    padding: 15px 20px;
    .bar-container {
      height: 100px;
    }
    .data-table {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      tr {
        height: 25px;
        display: flex;
        align-items: center;
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
          color: $text-color-grey;
        }
        .value1 {
          width: 60px;
          font-size: 14px;
          color: $text-color-grey-lite;
        }
        .value2 {
          width: 60px;
          font-size: 14px;
          color: $text-color-grey;
        }
      }
    }
  }
  .raise {
    box-sizing: border-box;
    margin-top: 25px;
    flex: 1;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 17px 30px #eee5ff;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    hr {
      height: 2px;
      background-color: #eceff8;
      border: none;
    }
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
}
</style>
