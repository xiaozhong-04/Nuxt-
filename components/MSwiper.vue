<template>
  <card title="新品首发">
    <div :style="{width: 3*width + 'px',paddingTop: width/1.5+'px'}" class="mswiper">
    <ul :style="{transitionDuration,width: maxLength + 'px',marginLeft:marginLeft + 'px'}">
      <li
        :class="{big: index == bigIndex}"
        :style="{transitionDuration,width: (index==bigIndex? 2*width : width) + 'px',marginTop: (index==bigIndex? -width/1.5:0) + 'px' }"
        v-for="(item, index) in mygoods"
        :key="index"
      >
        <img :src="item.image" alt />
        <div :style="{transitionDuration,opacity: index == bigIndex? 1:0}" class="info">
          <div class="title">{{item.goods_name}}</div>
          <div class="price">¥{{item.price}}</div>
        </div>
      </li>
    </ul>
  </div>
  </card>
</template>

<script>
import Card from "~/components/Card";
export default {
  components: {
    Card
  },
  data() {
    return {
      transitionDuration: "0.5s", // 过渡的时间
      interval: 2000, // 间隔时间
      inter: null, // 定时器
      marginLeft: -3.5 * 96.666666, // 当前移动的位置
      bigIndex: 4, // 放大的格子的下标
      width: 96.666666, //每个格子的宽度
      goods: [
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name: "倒数第四个倒数第四个倒数第四个倒数第四个倒数第四个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          goods_name: "倒数第三个倒数第三个倒数第三个倒数第三个倒数第三个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name: "倒数第二个倒数第二个倒数第二个倒数第二个倒数第二个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name: "倒数第一个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name: "正数第一个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name: "正数第二个",
          price: "1000",
          seckill_price: "2600"
        }
      ]
    };
  },
  computed: {
    // 总长度
    maxLength: function() {
      return this.goods.length * this.width + 6 * this.width + this.width;
    },
    // 处理之后的商品数组
    mygoods: function() {
      // 复制前3件商品
      let s3 = this.goods.slice(0, 3);
      // 复制前后3件商品
      let e3 = this.goods.slice(this.goods.length - 3, this.length);
      return [...e3, ...this.goods, ...s3];
    }
  },
  mounted() {
    this.inter = setInterval(this.left, this.interval);
  },
  methods: {
    // 向左滚动一张图片
    left() {
      // 向左移动一个格子
      this.marginLeft -= this.width;
      // 大格子的下标也要加 1
      this.bigIndex++;
      // 是否已经到最后
      if (
        this.marginLeft <=
        -this.goods.length * this.width - 3.5 * this.width
      ) {
        // 0.5秒滚动之后执行
        setTimeout(() => {
          // 关闭过渡
          this.transitionDuration = "0s";
          // 切换到初始位置
          this.marginLeft = -3.5 * this.width;
          this.bigIndex = 4;
          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 100);
        }, 500);
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.inter);
  }
};
</script>

<style lang="scss">
.mswiper {
  height: 276px;
  overflow: hidden;
  background-position-x: -30px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("data:image/png;base64,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");
  ul,
  li,
  .info {
    transition-property: all;
  }
  .info {
    width: 120%;
    margin-left: -10%;
    margin-top: 20px;
    .title {
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .price {
      padding: 10px 0;
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
  }
  li {
    text-align: center;
    float: left;
  }
  img {
    width: 100%;
  }
  .big {
    padding: 0 15px;
  }
}
</style>