<template>
  <div class="swiper">
    <img :style="{opacity}" :src="swiper[content].image" alt />
    <ul>
      <li
        @mouseover="content = index"
        :class="{active: content == index}"
        v-for="(item, index) in swiper.length"
        :key="index"
      ></li>
    </ul>
    <div @click="zuo" class="swiper-left-btn">‹</div>
    <div @click="you" class="swiper-right-btn">›</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacity: 1,
      inner: null,
      content: 0,
      swiper: [
        {
          image:
            "https://img14.360buyimg.com/pop/s590x470_jfs/t1/95796/4/13791/78340/5e5efa6aEab131ed7/5c8c5259348adcfd.jpg.webp",
          link: "https://www.baidu.com/"
        },
        {
          image:
            "https://img20.360buyimg.com/pop/s590x470_jfs/t1/96028/36/13238/100913/5e549436Eec2c719f/50ff6d3062ca3557.jpg.webp",
          link: "https://www.baidu.com/"
        },
        {
          image:
            "https://img12.360buyimg.com/pop/s590x470_jfs/t1/92286/35/14901/54741/5e6a0415E57c15218/ba3e4e23256f9a29.jpg.webp",
          link: "https://www.baidu.com/"
        },
        {
          image:
            "https://img30.360buyimg.com/pop/s590x470_jfs/t1/91861/13/14947/99203/5e6b40f1E44a3dcb4/7825a254c6aeadda.jpg.webp",
          link: "https://www.baidu.com/"
        },
        {
          image:
            "https://img12.360buyimg.com/pop/s590x470_jfs/t1/110672/35/8977/191973/5e6ee5d9E42b8d9f4/4162e8a5fcc16d03.png.webp",
          link: "https://www.baidu.com/"
        },
        {
          image:
            "https://img20.360buyimg.com/pop/s590x470_jfs/t1/92910/12/14178/100907/5e6112a0E100a47b8/cfffd1867a383ba2.jpg.webp",
          link: "https://www.baidu.com/"
        }
      ]
    };
  },
  mounted() {
    this.inner = setInterval(this.start, 3000);
  },
  methods: {
    start() {
      this.opacity = 0;
      setTimeout(() => {
        if (this.content == this.swiper.length - 1) {
          this.content = 0;
        } else {
          this.content++;
        }
        this.opacity = 1;
      }, 300);
    },
    zuo() {
      if (this.content == 0) {
        this.content = this.swiper.length - 1;
      } else {
        this.content--;
      }
    },
    you() {
      if (this.content >= this.swiper.length - 1) {
          this.content = 0
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