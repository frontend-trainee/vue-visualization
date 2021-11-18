<template>
  <div class="switch-bar">
    <div
      :class="'switch-item ' + [active == index ? 'active' : '']"
      v-for="(item, index) in list"
      :key="item"
      @click="handleSwitch(index)"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["1D", "7D", "1M", "1Y", "All"],
      active: 2,
    };
  },
  methods: {
    handleSwitch(index) {
      this.active = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.switch-bar {
  display: inline-block;
  height: 30px;
  border-radius: 30px;
  background: #fff;
}
.switch-item {
  display: inline-block;
  line-height: 30px;
  border-radius: 30px;
  padding: 0 24px;
  cursor: pointer;
  font-size: 14px;
}
.active {
  background-color: #3247e4;
  color: #fff;
}
</style>
