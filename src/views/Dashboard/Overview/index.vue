<template>
  <div class="overview">
    <el-row class="container" :gutter="50">
      <!-- 左边 -->
      <el-col :xs="8" :sm="6" :md="4" :lg="5" :xl="5">
        <Left></Left>
      </el-col>

      <!-- 中间 -->
      <el-col :xs="4" :sm="6" :md="8" :lg="14" :xl="14">
        <Mid></Mid>
      </el-col>

      <!-- 右边 -->
      <el-col :xs="4" :sm="6" :md="4" :lg="5" :xl="5">
        <Right></Right>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Left from "./Left.vue";
import Mid from "./Mid.vue";
import Right from "./Right.vue";

export default {
  components: {
    Left,
    Mid,
    Right,
  },
  data() {
    return {};
  },
  created() {},
  updated() {
    console.log("updated");
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.overview {
  height: 100%;
  background-color: #fafafa;
  .container {
    height: 100%;
  }
  .el-col {
    height: 100%;
  }
}
</style>
