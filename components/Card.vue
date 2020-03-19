<template>
  <div class="card">
    <div class="card-title">
      {{title}}
      <i></i>
      <div v-if="btns.length > 0" class="card-btns">
        <span
          @mouseover="onMouseover(index)"
          v-for="(item, index) in btns"
          :key="index"
          :class="{active: index === current}"
        >{{item}}</span>
      </div>
    </div>
    <div class="card-content">
      <slot>暂无内容...</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    btns: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    // 当前鼠标放到按钮上触发的函数
    onMouseover(i) {
      this.current = i;
      // 把这个事件和下标发给父组件
      this.$emit("change", i);
    }
  }
};
</script>

<style lang="scss">
.card {
  background-color: #fff;
  &-title {
    padding: 12px 20px;
    font-weight: bold;
    font-size: 25px;
    color: black;
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url("https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/tit_arrow/sprite.png");
      background-repeat: no-repeat;
      background-position-x: -16px;
    }
    &:hover {
      i {
        background-position-x: 0px;
      }
    }
  }
  &-btns {
    float: right;
    span {
      padding-bottom: 3px;
      font-size: 16px;
      font-weight: normal;
      color: #ccc;
      margin-left: 25px;
      cursor: pointer;
      &.active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
}
</style>