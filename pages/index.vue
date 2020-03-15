<template>
  <div>
    <!-- 顶部导航 -->
    <TopBar />
    <!-- 顶部LOGO﹑搜索 ﹑我的购物车 -->
    <div class="head">
      <div class="container">
        <div class="row gutter">
          <!-- LOGO -->
          <div class="col-2">
            <Logo />
          </div>
          <!-- 搜索框 -->
          <div class="col-8">
            <!-- 搜索 ﹑购物车 -->
            <div class="head-middle">
              <div class="row gutter">
                <!-- 搜索框 -->
                <div class="col-9">
                  <div class="search">
                    <input type="text" />
                    <button>搜索</button>
                  </div>
                  <ul class="head-keywords">
                    <li v-for="(item, index) in 6" :key="index">
                      <nuxt-link to>万券齐发</nuxt-link>
                    </li>
                  </ul>
                </div>
                <!-- 购物车 -->
                <div class="col-3">
                  <cart />
                </div>
              </div>
            </div>
            <!-- 一排按钮 -->
            <ul class="head-menus">
              <li v-for="(itme,index) in 12" :key="index">
                <nuxt-link to>秒杀</nuxt-link>
              </li>
            </ul>
          </div>
          <!-- 广告图片 -->
          <div class="col-2">
            <img
              src="https://img10.360buyimg.com/babel/jfs/t1/86110/11/14937/47100/5e699da5E814563f1/04e0a328793bf43b.png"
              alt
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import Logo from "../components/Logo";
import cart from "../components/cart";
export default {
  components: {
    TopBar,
    Logo,
    cart
  }
};
</script>

<style lang="scss">
.head {
  padding: 10px 0;
  background-color: #fff;
  &-menus {
    li {
      display: inline-block;
      font-size: 16px;
      margin: 0 10px;
    }
  }
  &-middle {
    padding-bottom: 30px;
  }
  &-keywords {
    li {
      display: inline-block;
      margin: 5px;
    }
  }
  .search {
    input {
      float: left;
      width: 90%;
      border: 2px solid red;
      padding: 7px 10px;
    }
    button {
      background-color: red;
      color: #fff;
      border: 0;
      padding: 8px 12px;
    }
  }
}
</style>