<template>
  <div :style="{left: left + 'px', top: top + 'px'}" @mousedown="onMousedown" class="drag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // 允许拖拽的方向, x: 左右 y: 上下
    dir: {
      type: String,
      default: "xy" // 允许上下左右拖拽
    },
    // 限制拖拽组件的拖拽范围
    rect: {
      type: Array,
      default: function() {
        // 数组中分别为: 上下左右
        // -1: 不限制
        return [-1, -1, -1, -1];
      }
    }
  },
  data() {
    return {
      left: 0, // 元素X坐标
      top: 0, // 元素Y坐标
      isClicking: false, // 当前是否正在点中元素
      topDelte: 0, // 鼠标在元素中的Y坐标
      leftDelte: 0 // 鼠标在元素中的X坐标
    };
  },
  mounted() {
    // 鼠标移动
    document.addEventListener("mousemove", this.onMousemove);
    // 鼠标分开事件
    document.addEventListener("mouseup", this.onMouseup);
  },
  methods: {
    // 鼠标点击时
    onMousedown(e) {
      this.isClicking = true;
      // 计算鼠标点击的元素中的位置: 鼠标的位置 - 元素的位置
      this.leftDelte = e.pageX - this.left;
      this.topDelte = e.pageY - this.top;
    },
    onMouseup() {
      this.isClicking = false;
    },
    // 移动方法
    onMousemove(e) {
      // 如果当前点击着元素，那么就让元素跟着动
      if (this.isClicking) {
        // 鼠标的位置:
        // e.clientX e.clientY (不含滚动条)
        // e.pageX  e.pageY (含滚动条)
        // 是否允许左右移动 (判断dir 属性中是否包含 x)
        if (this.dir.includes("x")) {
          // 判断是否有左 右的限制
          if (this.rect[2] !== -1) {
            // 计算移动的位置
            let left = e.pageX - this.leftDelte;
            if (left >= this.rect[2] && left <= this.rect[3]) {
              this.left = left;
            }
          } else {
            this.left = e.pageX - this.leftDelte;
          }
        }
        // 是否允许上下移动 (判断dir 属性中是否包含 y)
        if (this.dir.includes("y")) {
          if (this.rect[0] !== -1) {
            // 计算移动的位置
            let top = e.pageY - this.topDelte;
            // 判断是否有上 下的限制
            if (top >= this.rect[0] && top <= this.rect[1]) {
              this.top = top;
            }
          } else {
            this.top = e.pageY - this.topDelte;
          }
        }

        // 将移动之后当前的位置发出去
        this.$emit("move", {
          left: this.left,
          top: this.top
        });
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