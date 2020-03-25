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

      <!-- 发现好货 -->
      <div class="row gutter mt20">
        <div class="col-2">
          <haohuo />
        </div>
        <div class="col-10">
          <drag-swiper :data="goods1" />
        </div>
      </div>

      <!-- 新品首发.排行榜.好店.中心 -->
      <div class="row gutter xp">
        <div class="col-3">
            <m-swiper />
        </div>
        <div class="col-3">
            <Topn />
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
          <ling-juan />
        </div>
      </div>
    </div>

    <div class="container">
      <dot-title title="频道广场" />
      <div class="row gutter">
        <div class="col-3">
          <img
            src="https://img10.360buyimg.com/babel/s290x370_jfs/t1/94263/15/13795/110996/5e5c62b6E895123be/b750358a76df026b.jpg!cc_290x370.webp"
            alt
          />
        </div>
        <div class="col-3">
          <img
            src="https://img20.360buyimg.com/babel/s290x370_jfs/t1/106996/31/14266/154379/5e61eb46E5987c6b7/3fb92e8b5ce5edd1.jpg!cc_290x370.webp"
            alt
          />
        </div>
        <div style="margin-bottom: 10px" class="col-3" v-for="(item, index) in 16" :key="index">
          <channelitem
            title="食品饮料"
            stitle="吃货嘉年华"
            limg="https://img14.360buyimg.com/img/s100x100_jfs/t19105/15/106426697/424212/f46938a0/5a5d97c9N1bdd0e89.jpg!cc_100x100.webp"
            rimg="https://img20.360buyimg.com/img/s100x100_jfs/t26527/284/1636381216/249506/48e209c/5be7da1eNdfc15521.jpg!cc_100x100.webp"
          />
        </div>
      </div>
      <dot-title title="为你推荐" />
      <div class="row gutter">
        <div style="margin-bottom: 10px;" class="col-b20" v-for="(item, index) in 25" :key="index">
          <rec-item
            title="香可 全实木儿童床上下床母子床男孩女孩床高低床双层床上下铺床子母床两层床成人木床储物床子母床公主床 蓝白色梯柜 上铺宽1300下铺宽1500"
            :price="2649.00"
            image="https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/102396/27/6450/179459/5df353b8E240c6afa/b1c52731e234074b.jpg.webp"
          />
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
import DragSwiper from "~/components/DragSwiper";
import Haohuo from "~/components/Haohuo";
import LingJuan from "~/components/LingJuan";
import DotTitle from "~/components/DotTitle";
import Channelitem from "~/components/Channelitem";
import RecItem from "~/components/RecItem";
import MSwiper from "~/components/MSwiper";
import Topn from "~/components/Topn";
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
    SanGou,
    DragSwiper,
    Haohuo,
    LingJuan,
    DotTitle,
    Channelitem,
    RecItem,
    MSwiper,
    Topn
  },
  data() {
    return {
      value: "", // 滚动条的进度百分比
      goods1: [
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          title: "商品名称"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          title: "商品名称"
        }
      ]
    };
  },
  methods: {
    onValue(value) {
      this.value = value;
    }
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