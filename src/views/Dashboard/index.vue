<template>
  <div class="dashboard">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="dash-footer"></footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  height: 100vh;

  display: flex;
  flex-direction: column;
}
.dash-header {
  height: 60px;
  box-sizing: border-box;
  padding: 0 60px;
  background-color: #fff;
}
.container {
  flex: 1;
}
.dash-footer {
  height: 40px;
  background-color: #fff;
}
</style>
