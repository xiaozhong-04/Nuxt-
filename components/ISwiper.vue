<template>
  <div class="iswiper">
    <ul :style="{marginLeft: marginLeft + 'px',transitionDuration}">
      <li v-for="(item, index) in data" :key="index">
        <nuxt-link to>
          <img :src="item.image" alt />
        </nuxt-link>
        <div class="info">
          <div class="title">电视影音女装专场</div>
          <div class="stitle">全场最高直播200元</div>
          <nuxt-link to>大牌闪购</nuxt-link>
        </div>
      </li>
    </ul>
    <div class="dot">
      <span :class="{active: marginLeft != -200}"></span>
      <span :class="{active: marginLeft == -200}"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionDuration: "0.5s", //动画时间
      inter: null,
      marginLeft: 0,
      data: [
        {
          image:
            "https://img11.360buyimg.com/mobilecms/s130x130_jfs/t1/93402/30/15253/349511/5e6f471eE4d0c19f0/184d207e25b87476.jpg.webp"
        },
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s130x130_jfs/t1/96092/28/14916/285069/5e6ae99eEb8b363df/f759b04fcf380a4c.jpg.webp"
        },
        {
          image:
            "https://img11.360buyimg.com/mobilecms/s130x130_jfs/t1/93402/30/15253/349511/5e6f471eE4d0c19f0/184d207e25b87476.jpg.webp"
        }
      ]
    };
  },
  mounted() {
    this.inter = setInterval(() => {
      this.marginLeft -= 200;
      if (this.marginLeft == -(this.data.length - 1) * 200) {
        setTimeout(() => {
          this.transitionDuration = "0s";
          this.marginLeft = 0;
          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 100);
        }, 500);
      }
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.inter);
  }
};
</script>

<style lang="scss">
$icellwidth: 200px;
.iswiper {
  width: 200px;
  overflow: hidden;
  height: 266px;
  background-color: #fff;
  padding: 30px 0 10px;
  text-align: center;
  position: relative;
  ul {
    transition-property: all;
    width: $icellwidth * 3;
    li {
      width: $icellwidth;
      padding: 10px;
      float: left;
    }
    img {
      width: 65%;
    }
  }
  .info {
    background-image: linear-gradient(#fff, #eee);
    margin-top: 10px;
    padding-bottom: 20px;
    .title {
      font-size: 14px;
    }
    .stitle {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    a {
      border: 1px solid red;
      color: red;
      padding: 3px 5px;
      border-radius: 10px;
      &::after {
        content: ">";
        padding-left: 5px;
      }
    }
  }
  .dot {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: inline-block;
      background-color: #ccc;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      &.active {
        background-color: red;
      }
    }
  }
}
</style>