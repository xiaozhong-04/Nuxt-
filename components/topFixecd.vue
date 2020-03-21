<template>
  <div class="topfixecd" :style="{top: topFixedTop + 'px'}"></div>
</template>

<script>
import { getScrollTop } from "~/assets/util";
export default {
  data() {
    return {
      topFixedTop: -53
    };
  },
  // 组件加载完之后执行 (DOM操作)
  mounted() {
    // 监听滚动条事件
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      let top = getScrollTop();
      if (top >= 685) {
        this.topFixedTop = 0;
      } else {
        this.topFixedTop = -53;
      }
    }
  }
};
</script>

<style lang="scss">
.topfixecd {
  position: fixed;
  transition: all 0.5s;
  z-index: 9999;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 3px solid red;
}
</style>