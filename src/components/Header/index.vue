<template>
  <header class="dash-header">
    <el-row class="container" :gutter="50" type="flex" align="middle">
      <!-- logo -->
      <el-col :xs="8" :sm="6" :md="4" :lg="5" :xl="5">
        <div class="logo"><img src="@/assets/aliyun.png" alt="" /></div>
      </el-col>

      <!-- 中间 -->
      <el-col :xs="4" :sm="6" :md="8" :lg="17" :xl="17">
        <div class="mid">
          <div class="search">
            <input class="search-input" type="text" />
            <i class="el-icon-search"></i>
          </div>
          <div class="v-nav">
            <el-menu
              :default-active="'/dashboard/' + this.$route.path.split('/')[2]"
              class="el-menu-demo"
              mode="horizontal"
              router
            >
              <el-menu-item
                index="/dashboard/overview"
                route="/dashboard/overview"
                >Overview</el-menu-item
              >
              <el-menu-item
                index="/dashboard/analytics"
                route="/dashboard/analytics"
                >Analytics</el-menu-item
              >
            </el-menu>
          </div>
        </div>
      </el-col>

      <!-- 右边 -->
      <el-col :xs="4" :sm="6" :md="4" :lg="2" :xl="2">
        <div class="handler">
          <i class="el-icon-user"></i>
          <i class="el-icon-set-up"></i>
        </div>
      </el-col>
    </el-row>
  </header>
</template>
<style lang="scss" scoped>
.dash-header {
  height: 60px;
  box-sizing: border-box;
  padding: 0 60px;
  background-color: #fff;
}
.container {
  height: 100%;
}
.logo {
  height: 40px;
  img {
    height: 100%;
  }
}
.mid {
  display: flex;
  align-items: center;
  .search {
    width: 440px;
    height: 28px;
    position: relative;
    .search-input {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #eef1fa;
      border: none;
    }
    i {
      position: absolute;
      top: 6px;
      right: 15px;
      color: #a8aad6;
    }
  }
  .v-nav {
    margin-left: 45px;
    .el-menu.el-menu--horizontal {
      border: none;
    }
  }
}
.handler {
  display: flex;
  justify-content: space-between;
  i {
    font-size: 27px;
    color: $text-color-grey-lite;
  }
}
</style>
<style lang="scss">
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 3px solid $theme-main;
}
</style>
