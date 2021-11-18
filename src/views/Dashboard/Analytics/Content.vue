<template>
  <div class="analytics-content">
    <!-- 用户信息 -->
    <div class="user-info">
      <p class="user-title">用户基本情况分析</p>

      <!-- 成绩 -->
      <div class="record">
        <!-- 头部 -->
        <div class="head">
          <span class="title">所有用户</span>
          <span class="detail"> 更多 > </span>
        </div>
        <!-- 用户数 -->
        <h1 class="value">2,431,340</h1>
      </div>
      <!-- 进度 -->
      <div class="progress">
        <div class="progress-item">
          <div class="circle">
            <el-progress
              type="circle"
              width="75"
              color="#063cff"
              :stroke-width="4"
              :percentage="27"
            ></el-progress>
          </div>
          <div class="detail">
            <p class="value">92,980</p>
            <p class="name">活跃用户</p>
          </div>
        </div>
        <div class="progress-item">
          <div class="circle">
            <el-progress
              type="circle"
              width="75"
              color="#02b92a"
              :stroke-width="4"
              :percentage="68"
            ></el-progress>
          </div>
          <div class="detail">
            <p class="value">22,652</p>
            <p class="name">新增用户</p>
          </div>
        </div>
      </div>

      <!-- 表格 -->
      <table class="table-data">
        <tr>
          <th>月份</th>
          <th>新增用户</th>
          <th>独立</th>
          <th>占比</th>
          <th>总数</th>
        </tr>
        <tr v-for="item in tableData" :key="item.moth">
          <td class="month">
            {{ item.moth }}
          </td>
          <td class="new">{{ item.new }}</td>
          <td class="unique">{{ item.unique }}</td>
          <td class="trend">{{ item.trend }}</td>
          <td class="total">{{ item.total }}</td>
        </tr>
      </table>
    </div>

    <!-- 分布 -->
    <div class="distribution">
      <div class="head">
        <span class="title">来源分布</span>
        <span class="detail">全部</span>
      </div>
      <div class="container">
        <div class="item" v-for="item in barData" :key="item.name">
          <div
            class="bar"
            :style="{ width: item.value, backgroundColor: item.color }"
          >
            <span class="name">{{ item.name }}</span>
            <i :class="item.icon"></i>
          </div>
          <div class="detail">
            <p class="value">{{ item.valueText }}</p>
            <p class="up">+{{ item.up }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          moth: "一季度",
          new: "8,430",
          unique: "3,210",
          trend: "10%",
          total: "21,230",
        },
        {
          moth: "二季度",
          new: "5,870",
          unique: "2,560",
          trend: "17%",
          total: "11,760",
        },
        /* {
          moth: "三季度",
          new: "7,250",
          unique: "1,490",
          trend: "5%",
          total: "16,276",
        },
        {
          moth: "四季度",
          new: "8,430",
          unique: "3,210",
          trend: "10%",
          total: "21,230",
        }, */
      ],
      barData: [
        {
          name: "杭州",
          value: "90%",
          valueText: "58,540",
          up: "1,430",
          icon: "el-icon-milk-tea",
          color: "#8675ff",
        },
        {
          name: "北京",
          value: "86%",
          valueText: "44,768",
          up: "1,210",
          icon: "el-icon-food",
          color: "#8675ff",
        },
        {
          name: "上海",
          value: "70%",
          valueText: "34,788",
          up: "1,034",
          icon: "el-icon-ship",
          color: "#ff9065",
        },
        {
          name: "内江",
          value: "70%",
          valueText: "33,876",
          up: "1,001",
          icon: "el-icon-truck",
          color: "#ff9065",
        },
        {
          name: "重庆",
          value: "60%",
          valueText: "23,769",
          up: "443",
          icon: "el-icon-milk-tea",
          color: "#ffcb41",
        },
        {
          name: "青岛",
          value: "60%",
          valueText: "22,492",
          up: "410",
          icon: "el-icon-food",
          color: "#ffcb41",
        },
        {
          name: "巴黎",
          value: "50%",
          valueText: "12,400",
          up: "103",
          icon: "el-icon-ship",
          color: "#42cc7e",
        },
      ],
    };
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

  .progress {
    display: flex;
    align-items: center;
    .progress-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 90px;
      .circle {
        height: 75px;
      }
      .detail {
        margin-left: 10px;
        .value {
          font-size: 18px;
        }
        .name {
          margin-top: 8px;
          font-size: 14px;
          color: $text-color-grey-lite;
        }
      }
    }
  }

  .table-data {
    width: 100%;
    tr {
      display: flex;
      font-size: 14px;
      align-items: center;
      border-bottom: 2px solid #e8e9f6;
      td {
        flex: 1;
        height: 30px;
        line-height: 30px;
        color: $text-color-grey;
      }
      th {
        text-align: left;
        flex: 1;
        font-size: 12px;
        color: $text-color-grey-lite;
        line-height: 30px;
      }
    }
    tr:nth-child(0),
    tr:last-child {
      border: none;
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
  .container {
    margin-top: 20px;
    .item {
      display: flex;
    }
    .bar {
      margin-bottom: 10px;
      height: 35px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 35px;
      color: #fff;
      .name {
        font-size: 14px;
        font-weight: 600;
      }
      i {
        font-size: 24px;
      }
    }
    .detail {
      margin-left: 10px;
      padding: 5px 0;
      font-size: 14px;
      .up {
        font-size: 12px;
        color: $text-color-grey-lite;
      }
    }
  }
}
</style>
