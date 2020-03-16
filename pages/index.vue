<template>
  <div class="index">
    <!-- 顶部导航 -->
    <top-bar />
    <!-- 顶部LOGO﹑搜索 ﹑我的购物车 -->
    <top-menu />
    <!-- 分类 ﹑轮播图-->
    <top-lbt />
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import TopLbt from "../components/TopLbt";
export default {
  components: {
    TopBar,
    TopMenu,
    TopLbt
  }
};
</script>

<style lang="scss">
.index {
  background-color: #f2f2f2;
}
</style>