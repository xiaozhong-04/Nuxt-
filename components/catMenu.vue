<template>
  <ul class="cat-menu">
    <li v-for="(item, index) in 17" :key="index">
      <div class="cat-menu-title">
        <nuxt-link to>家用电器 - {{index}}</nuxt-link>
      </div>
      <div class="cat-menu-content">
        <div class="row gutter">
          <div class="col-9">
            <div class="cat-menu-nav">
              <nuxt-link to>玩3C</nuxt-link>
              <nuxt-link to>玩3C</nuxt-link>
              <nuxt-link to>玩3C</nuxt-link>
              <nuxt-link to>玩3C</nuxt-link>
              <nuxt-link to>玩3C</nuxt-link>
            </div>
            <div v-for="(item, index) in 10" :key="index" class="row cat-menu-nav1">
              <div class="col-2">
                <nuxt-link to>香水彩妆</nuxt-link>
              </div>
              <div class="col-10">
                <nuxt-link v-for="(item, index) in 15" :key="index" to>哈哈</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-3">
            <img
              v-for="(item, index) in 6"
              :key="index"
              src="https://img10.360buyimg.com/vclist/s83x35_jfs/t1/60962/3/12690/7533/5da1929dE1898af88/5a5b552c1f9381ac.jpg.webp"
              alt
            />
            {{index}}
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.cat-menu {
  padding: 6px 0;
  font-size: 14px;
  background-color: #fff;
  position: relative;
  li {
    box-sizing: border-box;
    &:hover {
      .cat-menu-title {
        background-color: #ccc;
      }
      .cat-menu-content {
        display: block;
      }
    }
  }
  &-title {
    padding: 3px 20px;
  }
  &-content {
    z-index: 444;
    position: absolute;
    top: 0;
    left: 190px;
    border: 1px solid #ccc;
    padding: 20px;
    background-color: #fff;
    width: 990px;
    min-height: 500px;
    box-shadow: 0px 0px 3px #ccc;
    display: none;
  }
  &-nav {
    a {
      margin-right: 5px;
      padding: 3px 10px;
      color: #fff;
      font-size: 12px;
      background-color: #333333;
      height: 25px;
      line-height: 25px;
      vertical-align: middle;
      &::after {
        padding-left: 8px;
        content: ">";
      }
      &:hover {
        background-color: red;
      }
    }
  }
  &-nav1 {
    padding: 5px;
    a {
      padding-right: 5px;
    }
    .col-2 {
      font-weight: bold;
      &::after {
        content: ">";
        padding-left: 10px;
      }
    }
  }
}
</style>