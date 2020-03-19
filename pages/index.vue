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
    <!-- 每日特价 .品牌闪购-->
    <div class="container">
      <div class="row gutter tj">
        <div class="col-6">
          <te-jia />
        </div>
        <div class="col-6">
          <san-gou />
        </div>
      </div>

      <!-- 新品首发.排行榜.好店.中心 -->
      <div class="row gutter xp">
        <div class="col-3">
          <card title="新品首发" />
        </div>
        <div class="col-3">
          <card title="排行榜" />
        </div>
        <div class="col-3">
          <card title="逛好店">
            <template>
              <div class="ghd">
                <div class="ghd-item-1">
                  <img
                    src="https://img20.360buyimg.com/mobilecms/s100x100_jfs/t19801/192/2302479289/219085/1454e6d3/5b3b2562N637f47ca.jpg.webp"
                    alt
                  />
                  <div class="ghd-title">爱尔康京东自营旗舰店</div>
                  <nuxt-link to>潮流3C</nuxt-link>
                  <p>34.9万人关注</p>
                </div>
                <div class="ghd-item-2">
                  <img
                    src="https://img13.360buyimg.com/mobilecms/s100x100_jfs/t1/101614/40/15359/168436/5e6dfba9E183cdb62/1f234761c7833710.jpg.webp"
                    alt
                  />
                  <div class="ghd-title">奥义瑜伽京东自营旗舰店</div>
                  <nuxt-link to>随心所动</nuxt-link>
                  <p>14.9万人关注</p>
                </div>
              </div>
            </template>
          </card>
        </div>
        <div class="col-3">
          <card title="领券中心" />
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar";
import TopMenu from "~/components/TopMenu";
import TopLbt from "~/components/TopLbt";
import conutDown from "~/components/conutDown";
import GSwiper from "~/components/GSwiper";
import ISwiper from "~/components/ISwiper";
import topFixecd from "~/components/topFixecd";
import Card from "~/components/Card";
import TeJia from "~/components/TeJia";
import SanGou from "~/components/SanGou";
export default {
  components: {
    TopBar,
    TopMenu,
    TopLbt,
    conutDown,
    GSwiper,
    ISwiper,
    topFixecd,
    Card,
    TeJia,
    SanGou
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
  }
  .ghd {
    padding: 0 10px 10px;
    &-item-1,
    &-item-2 {
      position: relative;
      height: 128px;
      padding: 15px;
      img {
        width: 90px;
        padding: 5px;
        background-color: #fff;
        border-radius: 3px;
        float: right;
      }
      .ghd-title {
        width: 120px;
        font-size: 14px;
        line-height: 1.3em;
        margin-bottom: 5px;
      }
      a {
        color: #596fab;
        border: 1px solid #596fab;
        padding: 2px;
      }
      p {
        color: #aaa;
        position: absolute;
        bottom: 10px;
      }
    }
    &-item-1 {
      background-color: #efeff6;
      margin-bottom: 10px;
    }
    &-item-2 {
      background-color: #f6eff3;
    }
  }
  .xp {
    margin-top: 20px;
  }
}
</style>