<template>
  <div class="mid">
    <div class="mid-header">
      <SwitchBar></SwitchBar>
      <p>大屏数据监控</p>
    </div>

    <Charts></Charts>
  </div>
</template>
<script>
import Charts from "./GaugeChart.vue";
import SwitchBar from "@/components/SwitchBar";
export default {
  components: {
    Charts,
    SwitchBar,
  },
};
</script>
<style lang="scss" scoped>
.mid {
  height: 100%;
  border-radius: 50px;
  background-color: #eef1fa;
  position: relative;
  .mid-header {
    position: absolute;
    width: 500px;
    z-index: 99;
    left: 50%;
    top: 20px;
    margin-left: -250px;
    text-align: center;
    p {
      margin-top: 20px;
      font-size: 42px;
      letter-spacing: 30px;
      color: $text-color;
    }
  }
}
</style>
