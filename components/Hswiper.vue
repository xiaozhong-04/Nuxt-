<template>
  <div :style="{opacity}" class="hswiper">
    <img v-for="(item, index) in data[content]" :key="index" :src="item.image" alt />
    <div @click="zuo" class="hswiper-left-btn">‹</div>
    <div @click="you" class="hswiper-right-btn">›</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacity: 1,
      content: 0,
      data: [
        [
          {
            image:
              "https://img20.360buyimg.com/babel/s380x300_jfs/t1/89514/2/14952/76531/5e6b5525E8915838c/6e07b1206ae3cdc2.jpg.webp",
            link: "https://www.baidu.com/"
          },
          {
            image:
              "https://img14.360buyimg.com/babel/s380x300_jfs/t1/89788/16/14023/78767/5e621788E24767ef8/148d4d1ce8578cd8.jpg.webp",
            link: "https://www.baidu.com/"
          },
          {
            image:
              "https://img12.360buyimg.com/babel/s380x300_jfs/t1/97074/5/14336/50908/5e637c20E5f7a8b13/9872c63b0d9db4b2.jpg.webp",
            link: "https://www.baidu.com/"
          }
        ],
        [
          {
            image:
              "https://img20.360buyimg.com/babel/s380x300_jfs/t1/89644/37/14896/80968/5e6b5addE0fc89072/4f5fc6782bfddcbb.jpg.webp",
            link: "https://www.baidu.com/"
          },
          {
            image:
              "https://img30.360buyimg.com/babel/s380x300_jfs/t1/89311/17/14891/65540/5e6b0bbdEc5b5fbf9/fa21f3f00ae59b9c.jpg.webp",
            link: "https://www.baidu.com/"
          },
          {
            image:
              "https://img13.360buyimg.com/babel/s380x300_jfs/t1/109490/4/8427/73152/5e686625E54fa9340/555a4d30bba007c9.jpg.webp",
            link: "https://www.baidu.com/"
          }
        ]
      ]
    };
  },
  methods: {
    cartoon() {
      (this.opacity = 0.5),
        setTimeout(() => {
          this.opacity = 1;
        }, 200);
    },
    zuo() {
      this.cartoon();
      if (this.content == 0) {
        this.content = this.data.length - 1;
      } else {
        this.content--;
      }
    },
    you() {
      this.cartoon();
      if (this.content >= this.data.length - 1) {
        this.content = 0;
      } else {
        this.content++;
      }
    }
  }
};
</script>

<style lang="scss">
.hswiper {
  transition: all 0.2s;
  position: relative;
  img {
    width: 100%;
    margin-bottom: 10px;
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
    transform: translateY(-65%);
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