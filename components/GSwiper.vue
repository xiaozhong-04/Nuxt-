<template>
  <div class="gswiper">
    <ul :style="{marginLeft: marginLeft + 'px',transition}">
      <li v-for="(item, index) in goods" :key="index">
        <img :src="item.image" alt />
        <div class="title">{{item.goods_name}}</div>
        <div class="price">
          <span class="price-sp">¥{{item.price}}</span>
          <span class="price-p">¥{{item.seckill_price}}</span>
        </div>
      </li>
    </ul>
    <div @click="left" class="leftbtn">‹</div>
    <div @click="right" class="rightbtn">›</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transition: "all 0.5s",
      marginLeft: -198 * 4, // 向左滚动的位置
      goods: [
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name: "倒数第四个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          goods_name: "倒数第三个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name: "倒数第二个",
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
          goods_name:
            "儿童抖音网红手表手势感应变形玩具遥控汽车扭变车特技越野攀爬车四驱高速赛车模型玩具男孩礼物 炫酷蓝双面行走充电版【双遥控手表感应+终身保修】",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          goods_name:
            "百富帝（byford）四件套纯棉家纺 床上用品床单枕套双人全棉斜纹套件1.5/1.8米床被套200*230 星图",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name:
            "索菲亚床现代简约青少年房定制卧室床双人床高低床上下床双层床多功能上下铺带护栏 定制金 定制诚意金",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name:
            "儿童抖音网红手表手势感应变形玩具遥控汽车扭变车特技越野攀爬车四驱高速赛车模型玩具男孩礼物 炫酷蓝双面行走充电版【双遥控手表感应+终身保修】",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          goods_name:
            "百富帝（byford）四件套纯棉家纺 床上用品床单枕套双人全棉斜纹套件1.5/1.8米床被套200*230 星图",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name:
            "索菲亚床现代简约青少年房定制卧室床双人床高低床上下床双层床多功能上下铺带护栏 定制金 定制诚意金",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name:
            "儿童抖音网红手表手势感应变形玩具遥控汽车扭变车特技越野攀爬车四驱高速赛车模型玩具男孩礼物 炫酷蓝双面行走充电版【双遥控手表感应+终身保修】",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          goods_name:
            "百富帝（byford）四件套纯棉家纺 床上用品床单枕套双人全棉斜纹套件1.5/1.8米床被套200*230 星图",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name:
            "索菲亚床现代简约青少年房定制卧室床双人床高低床上下床双层床多功能上下铺带护栏 定制金 定制诚意金",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name:
            "儿童抖音网红手表手势感应变形玩具遥控汽车扭变车特技越野攀爬车四驱高速赛车模型玩具男孩礼物 炫酷蓝双面行走充电版【双遥控手表感应+终身保修】",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          goods_name:
            "百富帝（byford）四件套纯棉家纺 床上用品床单枕套双人全棉斜纹套件1.5/1.8米床被套200*230 星图",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name:
            "索菲亚床现代简约青少年房定制卧室床双人床高低床上下床双层床多功能上下铺带护栏 定制金 定制诚意金",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name:
            "儿童抖音网红手表手势感应变形玩具遥控汽车扭变车特技越野攀爬车四驱高速赛车模型玩具男孩礼物 炫酷蓝双面行走充电版【双遥控手表感应+终身保修】",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          goods_name:
            "百富帝（byford）四件套纯棉家纺 床上用品床单枕套双人全棉斜纹套件1.5/1.8米床被套200*230 星图",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name:
            "索菲亚床现代简约青少年房定制卧室床双人床高低床上下床双层床多功能上下铺带护栏 定制金 定制诚意金",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name: "倒数第四个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/89865/35/14949/185248/5e69e642E03b28f1b/f4137d57389df6df.jpg.webp",
          goods_name: "倒数第三个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/90039/32/14506/146108/5e685a23Eb929702d/15793a413c41e1cf.jpg.webp",
          goods_name: "倒数第二个",
          price: "1000",
          seckill_price: "2600"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/102581/18/14887/130465/5e6b5b2cE29798e8b/dbccbefccbde263e.jpg.webp",
          goods_name: "倒数第一个",
          price: "1000",
          seckill_price: "2600"
        }
      ]
    };
  },
  methods: {
    left() {
      this.marginLeft = this.marginLeft - 198 * 4;
      if (this.marginLeft === -198 * 24) {
        this.transition = "";
        this.marginLeft = -198 * 4;
      }
      this.transition = "all 0.5s";
    },
    right() {
      this.marginLeft = this.marginLeft + 198 * 4;
      if (this.marginLeft === 0) {
        this.transition = "";
        this.marginLeft = -198 * 20;
      }
      this.transition = "all 0.5s";
    }
  }
};
</script>

<style lang="scss">
$cellwidth: 198px;
.gswiper {
  width: $cellwidth * 4;
  overflow: hidden;
  position: relative;
  background-color: #fff;
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
  img {
    width: 90%;
  }
  ul {
    width: $cellwidth * 24;
  }
  li {
    text-align: center;
    float: left;
    overflow: hidden;
    width: $cellwidth;
    height: 266px;
    padding: 30px 20px;
    position: relative;
    ::after {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      top: 0;
      width: 1px;
      background-image: linear-gradient(#fff, #eee, #fff);
      right: 0;
    }
  }
  .title {
    width: 100%;
    overflow: hidden;
    height: 1.5em;
    margin: 10px 0;
  }
  .price {
    span {
      border: 1px solid red;
      vertical-align: middle;
      float: left;
    }
    &-sp {
      background-color: red;
      color: #fff;
      font-size: 16px;
      width: 82px;
      position: relative;
      &::before {
        content: " ";
        width: 0;
        height: 0;
        border-color: transparent white transparent transparent;
        border-style: solid;
        border-width: 24px 8px 0 0;
        position: absolute;
        top: 0;
        left: 76px;
      }
    }
    &-p {
      color: #ccc;
      text-decoration: line-through;
      padding: 3px 15px;
    }
  }
}
</style>