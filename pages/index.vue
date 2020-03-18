<template>
  <div class="index">
    <!-- 最顶部会隐藏的固定条 -->
    <top-fixecd />
    <!-- 顶部导航 -->
    <top-bar />
    <!-- 顶部LOGO﹑搜索 ﹑我的购物车 -->
    <top-menu />
    <!-- 分类 ﹑轮播图-->
    <top-lbt />
    <!-- 秒杀 -->
    <div class="container seckill">
      <div class="row">
        <div class="col-2">
          <conut-down title="05:00" start="2020-03-17 20:58:15" />
        </div>
        <div class="col-8">
          <g-swiper />
        </div>
        <div class="col-2">
          <i-swiper />
        </div>
      </div>
    </div>
    <!-- 每日特价 -->
    <div class="container">
      <div class="row gutter tj">
        <div class="col-6">
          <div class="today">
            <arrow-titile title="每日特价"/>
          </div>
        </div>
        <div class="col-6">yy</div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import TopLbt from "../components/TopLbt";
import conutDown from "../components/conutDown";
import GSwiper from "../components/GSwiper";
import ISwiper from "../components/ISwiper";
import topFixecd from "../components/topFixecd";
import ArrowTitile from "../components/ArrowTitile";
export default {
  components: {
    TopBar,
    TopMenu,
    TopLbt,
    conutDown,
    GSwiper,
    ISwiper,
    topFixecd,
    ArrowTitile
  }
};
</script>

<style lang="scss">
.index {
  background-color: #f2f2f2;
  .seckill {
    margin-top: 10px;
  }
  .footer {
    height: 500px;
  }
  .tj {
    margin-top: 20px;
    .today {
      background-color: #fff;
      padding: 10px;
    }
  }
}
</style>