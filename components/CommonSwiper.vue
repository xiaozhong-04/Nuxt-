<template>
  <div class="commonswiper" :style="{width: count * width + 'px'}">
    <ul
      :style="{transitionDuration,width: idata.length * width + 'px',marginLeft: marginLeft + 'px'}"
    >
      <li :style="{width: width + 'px'}" v-for="(item, index) in idata" :key="index">
        <slot :data="item"></slot>
      </li>
    </ul>
    <template v-if="!nobtns">
      <div @click="left" class="leftbtn">‹</div>
      <div @click="right" class="rightbtn">›</div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    // 每个格式中的原数据
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 滚动的时间间隔
    interval: {
      type: Number,
      default: 4000
    },
    // 每次显示几张图片
    count: {
      type: Number,
      default: 1
    },
    // 每个格子的宽度
    width: {
      type: Number,
      default: 200
    },
    // 是否自动滚动
    auto: {
      type: Boolean,
      default: false
    },
    // 是否显示按钮
    nobtns: {
      type: Boolean,
      default: false
    },
    // 是否持续滚动
    moving: {
      type: Boolean,
      default: false
    },
    // 是否暂停
    stop: {
      type: Boolean,
      default: false
    },
    // 拖拽条的值
    dragValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      inter: null, // 保存定时器
      transitionDuration: this.moving ? "0" : "0.5s",
      marginLeft: -this.count * this.width // 初始位置， 去掉前面多余格式的值
    };
  },
  watch: {
    dragValue: function(newValue, oldValue) {
      this.marginLeft =
        (-this.data.length * this.width -
          this.count * this.width +
          this.count * this.width) *
          (this.dragValue / 100) -
        this.count * this.width;
      this.$emit("dratValue", this.marginLeft);
    },
    aaa: {}
  },
  // 计算属性 (需要处理之后再使用的数据)
  computed: {
    // 复制了前后格子之后的商品数组
    idata: function() {
      // 把 data 数组中前count 个元素复制到后面,后 count 个元素复制到前面,构造成一个新数组
      // 1. 先复制数组中的后 count 个元素
      let hn = this.data.slice(this.data.length - this.count, this.length);
      // 2.再复制数组中的前 count 个元素
      let qn = this.data.slice(0, this.count);
      // 把 hn 放到 data 数组的前面， 把 qn 放到 data 数组的后面
      return [...hn, ...this.data, ...qn];
    }
  },
  mounted() {
    // 是否持续滚动
    if (this.moving) {
      // 下一帧滚动1像素
      // requestAnimationFrame: 注册一个函数,这个函数会在页面的下一帧执行
      requestAnimationFrame(this.left2);
    } else {
      // 是否是自动滚动
      if (this.auto) {
        this.inter = setInterval(this.left, this.interval);
      }
    }
  },
  methods: {
    left() {
      // 向左滚动 n 张图片
      this.marginLeft -= this.count * this.width;
      // 是否滚动到最后
      if (
        this.marginLeft ==
        -this.data.length * this.width - this.count * this.width
      ) {
        //0.5秒之后再切换
        setTimeout(() => {
          // 先关闭动画效果
          this.transitionDuration = "0s";
          // 切换到初始位置
          this.marginLeft = -this.count * this.width;
          // 延迟一会再打开动画效果
          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 100);
        }, 500);
      }
    },
    right() {
      // 向右滚动 n 张图片
      this.marginLeft += this.count * this.width;
      // 是否滚动到最后
      if (this.marginLeft == 0) {
        //0.5秒之后再切换
        setTimeout(() => {
          // 先关闭动画效果
          this.transitionDuration = "0s";
          // 切换到初始位置
          this.marginLeft = -this.data.length * this.width;
          // 延迟一会再打开动画效果
          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 100);
        }, 500);
      }
    },
    // 滚动1px
    left2() {
      // 判断是否暂停
      if (!this.stop) {
        // 向左滚动 n 张图片
        this.marginLeft -= 1;
        // 是否滚动到最后
        if (
          this.marginLeft <=
          -this.data.length * this.width - this.count * this.width
        ) {
          // 切换到初始位置
          this.marginLeft = -this.count * this.width;
        }
      }
      // 在下一帧刷新时再执行一次
      requestAnimationFrame(this.left2);
    }
  },
  beforeDestroy() {
    // 清除定时器
    if (null != this.inter) {
      clearInterval(this.interval);
      this.inter = null;
    }
  }
};
</script>

<style lang="scss">
.commonswiper {
  position: relative;
  overflow: hidden;
  ul {
    transition-property: margin;
  }
  li {
    float: left;
  }
  .leftbtn,
  .rightbtn {
    position: absolute;
    top: 50%;
    width: 25px;
    height: 30px;
    line-height: 25px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    background-color: #000;
    opacity: 0.4;
    transform: translateY(-50%);
    &:hover {
      opacity: 0.7;
    }
  }
  .leftbtn {
    left: 0;
    border-radius: 0 30px 30px 0;
  }
  .rightbtn {
    right: 0;
    border-radius: 30px 0 0 30px;
  }
}
</style>