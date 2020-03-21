<template>
  <div :style="{left: left + 'px', top: top + 'px'}" @mousedown="onMousedown" class="drag">
    <slot></slot>
  </div>
</template>

<script>
import { getScrollTop } from "~/assets/util";
export default {
  data() {
    return {
      left: 0, // 元素X坐标
      top: 0, // 元素Y坐标
      isClicking: false // 当前是否正在点中元素
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.onMousemove);
    document.addEventListener("mouseup", this.onMouseup);
  },
  methods: {
    onMousedown() {
      this.isClicking = true;
    },
    onMouseup() {
      this.isClicking = false;
    },
    onMousemove(e) {
      // 如果当前点击着元素，那么就让元素跟着动
      if (this.isClicking) {
        this.left = e.clientX;
        this.top = e.clientY + getScrollTop();
      }
    }
  }
};
</script>
<style lang="scss">
.drag {
  cursor: move;
  z-index: 9999;
  position: absolute;
}
</style>