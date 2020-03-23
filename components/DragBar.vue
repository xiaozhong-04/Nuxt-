<template>
  <div ref="dragbar" class="dragbar">
    <drag @move="onMove" dir="x" :rect="rect">
      <div class="dragbar-box"></div>
    </drag>
  </div>
</template>

<script>
import Drag from "~/components/Drag";
export default {
  components: {
    Drag
  },
  data() {
    return {
      rect: [-1, -1, 0, 500]
    };
  },
  mounted() {
    this.rect[3] = this.$refs.dragbar.offsetWidth - 100;
  },
  methods: {
    onMove(pos) {
      // 计算出滚动条的百分比 (0 - 100之间的数字) 并传给父组件
      this.$emit("value", parseInt((pos.left / this.rect[3]) * 100));
    }
  }
};
</script>

<style lang="scss">
.dragbar {
  position: relative;
  background-color: #eee;
  height: 3px;
  width: 100%;
  &-box {
    width: 100px;
    height: 9px;
    border-radius: 5px;
    transform: translateY(-3px);
    background-color: #d8d8d8;
  }
}
</style>