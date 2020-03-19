<template>
  <div class="tejia">
    <card @change="onChange" title="每日特价" :btns="['精选','数码','家电','爱车']">
      <template>
        <div class="tejia-content">
          <div class="first">
            <img :src="tj[tj_i][0].image" alt />
            <div class="title">{{tj[tj_i][0].goods_name}}</div>
            <div class="price">
              ¥{{tj[tj_i][0].tprice}}
              <span>¥{{tj[tj_i][0].price}}</span>
            </div>
            <p>热卖中</p>
            <div class="tag">{{tj[tj_i][0].tag}}</div>
          </div>
          <div v-for="(item, index) in tj[tj_i].slice(1,5)" :key="index">
            <img :src="item.image" alt />
            <div class="title">{{item.goods_name}}</div>
            <div class="price">¥{{item.tprice}}</div>
          </div>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from "~/components/Card";
export default {
  components: {
    Card
  },
  data() {
    return {
      tj_i: 0,
      tj: [
        [
          {
            image:
              "https://img20.360buyimg.com/mobilecms/s144x144_jfs/t1/90922/39/15262/69912/5e6f1b99E66cb5688/479f60516f52715a.jpg!q70.jpg.webp",
            goods_name: "兜市精选 吸管杯儿童水杯",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t3727/171/1615929346/68151/6f1f24f/582c20ccN08120c0b.jpg!q70.jpg.webp",
            goods_name: "柔妮 洗衣液百合1.68kg",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img30.360buyimg.com/mobilecms/s144x144_jfs/t1/89518/31/14784/87816/5e68ab53E779b8a0b/98224b3b921984c8.jpg!q70.jpg.webp",
            goods_name: "炊大皇 不锈钢沥水置物架",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t1/95074/15/14603/132139/5e660874Eb3f2ac1b/55719fd5b122f133.jpg!q70.jpg.webp",
            goods_name: "小天籁 菜刀家用小菜刀切片刀",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img11.360buyimg.com/mobilecms/s144x144_jfs/t1/85945/40/13552/68884/5e5b5e5dE485b90ea/add50e3c63ca8565.jpg!q70.jpg.webp",
            goods_name: "【正常发货】无花果树苗5年苗",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          }
        ],
        [
          {
            image:
              "https://img30.360buyimg.com/mobilecms/s144x144_jfs/t1/105273/25/14984/198813/5e6ba90eE27527c28/64144a5c151d809a.jpg!q70.jpg.webp",
            goods_name: "【网课专用手机】华为畅享9",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t3727/171/1615929346/68151/6f1f24f/582c20ccN08120c0b.jpg!q70.jpg.webp",
            goods_name: "柔妮 洗衣液百合1.68kg",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img30.360buyimg.com/mobilecms/s144x144_jfs/t1/89518/31/14784/87816/5e68ab53E779b8a0b/98224b3b921984c8.jpg!q70.jpg.webp",
            goods_name: "炊大皇 不锈钢沥水置物架",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t1/95074/15/14603/132139/5e660874Eb3f2ac1b/55719fd5b122f133.jpg!q70.jpg.webp",
            goods_name: "小天籁 菜刀家用小菜刀切片刀",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img11.360buyimg.com/mobilecms/s144x144_jfs/t1/85945/40/13552/68884/5e5b5e5dE485b90ea/add50e3c63ca8565.jpg!q70.jpg.webp",
            goods_name: "【正常发货】无花果树苗5年苗",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          }
        ],
        [
          {
            image:
              "https://img11.360buyimg.com/mobilecms/s144x144_jfs/t1/108396/10/8042/112073/5e634244E8f3b962e/a9cdc8f3c85e994a.png!q70.jpg.webp",
            goods_name: "苹果转接器四合一",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t3727/171/1615929346/68151/6f1f24f/582c20ccN08120c0b.jpg!q70.jpg.webp",
            goods_name: "柔妮 洗衣液百合1.68kg",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img30.360buyimg.com/mobilecms/s144x144_jfs/t1/89518/31/14784/87816/5e68ab53E779b8a0b/98224b3b921984c8.jpg!q70.jpg.webp",
            goods_name: "炊大皇 不锈钢沥水置物架",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t1/95074/15/14603/132139/5e660874Eb3f2ac1b/55719fd5b122f133.jpg!q70.jpg.webp",
            goods_name: "小天籁 菜刀家用小菜刀切片刀",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img11.360buyimg.com/mobilecms/s144x144_jfs/t1/85945/40/13552/68884/5e5b5e5dE485b90ea/add50e3c63ca8565.jpg!q70.jpg.webp",
            goods_name: "【正常发货】无花果树苗5年苗",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          }
        ],
        [
          {
            image:
              "https://img14.360buyimg.com/mobilecms/s144x144_jfs/t1/100615/38/14739/174343/5e69ae99Efaabca32/e230661a3d62a7b0.jpg!q70.jpg.webp",
            goods_name: "宇仔大刀肉辣条258gx3袋",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t3727/171/1615929346/68151/6f1f24f/582c20ccN08120c0b.jpg!q70.jpg.webp",
            goods_name: "柔妮 洗衣液百合1.68kg",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img30.360buyimg.com/mobilecms/s144x144_jfs/t1/89518/31/14784/87816/5e68ab53E779b8a0b/98224b3b921984c8.jpg!q70.jpg.webp",
            goods_name: "炊大皇 不锈钢沥水置物架",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t1/95074/15/14603/132139/5e660874Eb3f2ac1b/55719fd5b122f133.jpg!q70.jpg.webp",
            goods_name: "小天籁 菜刀家用小菜刀切片刀",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          },
          {
            image:
              "https://img11.360buyimg.com/mobilecms/s144x144_jfs/t1/85945/40/13552/68884/5e5b5e5dE485b90ea/add50e3c63ca8565.jpg!q70.jpg.webp",
            goods_name: "【正常发货】无花果树苗5年苗",
            tprice: 40.9,
            price: 400,
            tag: "166天最低价"
          }
        ]
      ]
    };
  },
  methods: {
    onChange(i) {
      this.tj_i = i;
    }
  }
};
</script>

<style lang="scss">
.tejia {
  &-content {
    overflow: hidden;
    background-color: #fff;
    padding: 10px;
    & > div {
      float: left;
      width: 30%;
      padding: 20px 0;
      .price {
        color: red;
        padding: 0 5px;
        overflow: hidden;
      }
      .title {
        height: 3em;
        overflow: hidden;
        padding: 0 5px;
      }
    }
    .first {
      margin-right: 20px;
      text-align: center;
      position: relative;
      background-color: #f8f8f9;
      padding: 50px 0 10px 0;
      .title {
        font-size: 14px;
        padding: 5px 0;
        color: black;
      }
      .price {
        color: red;
        font-size: 18px;
        span {
          font-size: 12px;
          text-decoration: line-through;
          color: #ccc;
        }
      }
      img {
        width: 100px;
        height: 100px;
        float: none;
      }
      .tag {
        color: #fff;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAYBAMAAACIFvdWAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURfa3PfekAPesGfenC/a0MvewJ5uweioAAABjSURBVHjajdAxDYBQAMRQBhBwEggKsECCge9fDEwEaNLcmzt16i1b6nbekrTtSOp67Knr427b+lzzKEa8FCNQy4gPH/FnI8hGkI0gG0E2gmwEYYTCCIURCiMURiiMUBihMEJd/HcrFSr6YboAAAAASUVORK5CYII=");
        background-size: cover;
        background-position: 50%;
        width: 90px;
        height: 24px;
        position: absolute;
        left: 0;
        font-weight: 700;
        font-size: 12px;
        top: 0;
        line-height: 24px;
      }
    }
    img {
      width: 74px;
      height: 74px;
      float: left;
    }
  }
}
</style>