<template>
  <div class="top-bar">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <!-- 折叠框 -->
          <zdk location title="耒阳">
            <h1 style="color: red">hello world</h1>
            <h1>hello world</h1>
            <h1>hello world</h1>
            <h1>hello world</h1>
            <h1>hello world</h1>
          </zdk>
        </div>
        <div class="col-7">
          <ul class="top-bar-menu">
            <li>你好</li>
            <li class="top-bar-line"></li>
            <li>
              <zdk title="我的京东" arrow>xxxxxxxxxxxxxxxxx</zdk>
            </li>
            <li class="top-bar-line"></li>
            <li>
              <zdk title="我的京东" arrow>xxxxxxxxxxxxxxxxx</zdk>
            </li>
            <li class="top-bar-line"></li>
            <li>你好</li>
            <li class="top-bar-line"></li>
            <li>你好</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import zdk from "~/components/zdk";
export default {
  components: {
    zdk
  }
};
</script>

<style lang="scss">
.top-bar {
  height: 35px;
  background-color: #e3e4e5;
  &-menu {
    float: right;
    li {
      float: left;
      height: 35px;
      line-height: 35px;
    }
  }
  &-line {
    width: 1px;
    background-color: #ccc;
    margin: 0 10px;
    height: 0.9em !important;
    margin-top: 12px;
  }
}
</style>