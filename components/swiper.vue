<template>
  <div class="swiper">
    <img :style="{opacity}" :src="data[content].image" alt />
    <ul>
      <li
        @mouseover="content = index"
        :class="{active: content == index}"
        v-for="(item, index) in data.length"
        :key="index"
      ></li>
    </ul>
    <div @click="zuo" class="swiper-left-btn">‹</div>
    <div @click="you" class="swiper-right-btn">›</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      opacity: 1,
      inner: null,
      content: 0,
    };
  },
  mounted() {
    this.inner = setInterval(this.start, 3000);
    
  },
  methods: {
    start() {
      this.opacity = 0;
      setTimeout(() => {
        if (this.content == this.data.length - 1) {
          this.content = 0;
        } else {
          this.content++;
        }
        this.opacity = 1;
      }, 300);
    },
    zuo() {
      if (this.content == 0) {
        this.content = this.data.length - 1;
      } else {
        this.content--;
      }
    },
    you() {
      if (this.content >= this.data.length - 1) {
        this.content = 0;
      } else {
        this.content++;
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.inner);
  }
};
</script>

<style lang="scss">
.swiper {
  position: relative;
  img {
    width: 100;
    transition: all 0.3s;
  }
  ul {
    position: absolute;
    bottom: 10px;
    left: 20px;
  }
  li {
    opacity: 0.5;
    width: 10px;
    height: 10px;
    background-color: #fff;
    display: inline-block;
    margin-right: 10px;
    border-radius: 50%;
    vertical-align: middle;
    &.active {
      opacity: 1;
      width: 15px;
      height: 15px;
      border: 3px solid #ccc;
    }
  }
  &-left-btn,
  &-right-btn {
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    line-height: 25px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    background-color: #000;
    opacity: 0.4;
    transform: translateY(-50%);
  }
  &-left-btn:hover,
  &-right-btn:hover {
    opacity: 0.7;
  }
  &-left-btn {
    left: 0;
    border-radius: 0 10px 10px 0;
  }
  &-right-btn {
    right: 0;
    border-radius: 10px 0 0 10px;
  }
}
</style>