<template>
  <div class="analytics">
    <div class="container">
      <Content></Content>
    </div>

    <div class="container">
      <Content1></Content1>
    </div>
  </div>
</template>
<script>
import Content from "./Content.vue";
import Content1 from "./Content1.vue";
export default {
  components: {
    Content,
    Content1,
  },
};
</script>
<style lang="scss" scoped>
.analytics {
  height: calc(100vh - 60px);
  padding-left: 50px;
  background-color: #f1f5fb;
  display: flex;
}
.container {
  flex: 1;
}
.earth {
  background: #fbfdff;
}
</style>
