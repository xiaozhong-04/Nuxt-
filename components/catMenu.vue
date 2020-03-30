<template>
  <ul class="cat-menu">
    <!-- 一级分类 -->
    <li v-for="(item, index) in data" :key="index">
      <div class="cat-menu-title">
        <!-- 一级分类名称 -->
        <nuxt-link to>{{item.cat_name}}</nuxt-link>
      </div>
      <div class="cat-menu-content">
        <div class="row gutter">
          <div class="col-9">
            <ul class="cat-menu-nav">
              <!-- 一级分类下的按钮 -->
              <li v-for="(item1, index1) in item.btns" :key="index1">
                <nuxt-link to>{{item1.title}}</nuxt-link>
              </li>
            </ul>
            <!-- 二级分类 -->
            <div v-for="(item2, index2) in item.children" :key="index2" class="row cat-menu-nav1">
              <div class="col-2">
                <!-- 二级分类名称 -->
                <nuxt-link to>{{item2.cat_name}}</nuxt-link>
              </div>
              <!-- 三级分类 -->
              <div class="col-10">
                <!-- 三级分类名称 -->
                <nuxt-link
                  v-for="(item3, index) in item2.children"
                  :key="index"
                  to
                >{{item3.cat_name}}</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-3">
            <img v-for="(item4, index) in item.brands" :key="index" :src="item4.image" alt />
            {{index}}
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

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
    li {
      display: inline-block;
    }
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
      padding-right: 10px;
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