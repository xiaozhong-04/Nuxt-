<template>
  <card title="排行榜">
    <div class="topn">
      <ul class="topn-cate">
        <li
          @mouseover="active = index"
          :class="{avtive: index == active}"
          v-for="(item, index) in cate"
          :key="index"
        >{{item.cat_name}}</li>
      </ul>
      <div class="topn-goods">
        <div class="row" v-for="(item, index) in cate[active].goods" :key="index">
          <div class="col-2">
            <TopIcon :value="index + 1" />
          </div>
          <div class="col-4">
            <img :src="item.image" alt />
          </div>
          <div class="col-6">{{item.goods_name}}</div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from "~/components/Card";
import TopIcon from "~/components/TopIcon";
export default {
  components: {
    Card,
    TopIcon
  },
  data() {
    return {
      active: 0, // 当前选中的分类下标
      cate: [
        {
          cat_name: "智能设备",
          goods: [
            {
              image:
                "https://img11.360buyimg.com/mobilecms/s100x100_jfs/t1/49862/33/9683/132514/5d6e7827E2c046832/de91851ca2efbe5b.jpg!q90.webp",
              goods_name:
                "小米米家智能摄像机云台版白色1080P家用监控高清360度红外夜视增强移动监测摄像头"
            },
            {
              image:
                "https://img10.360buyimg.com/mobilecms/s70x70_jfs/t1/39569/20/14672/106366/5d5a59d0E12440436/7b7b66ed08c683af.jpg!q90.webp",
              goods_name:
                "小米体脂秤2 智能电子秤人体秤家用体重秤高精准13项身体数据平衡测试 APP数据测量可称快递蔬菜"
            },
            {
              image:
                "https://img12.360buyimg.com/mobilecms/s70x70_jfs/t1/7064/16/255/298915/5bc9ab84E5e2a8b70/32b5e1b721bd9887.jpg!q90.webp",
              goods_name:
                "华为 HUAWEI 智能体脂秤 体重秤脂肪秤家用健康秤电子秤 APP蓝牙led显示健身减肥运动 黑色CH18 京东纪念版"
            }
          ]
        },
        {
          cat_name: "女装",
          goods: [
            {
              image:
                "https://img20.360buyimg.com/mobilecms/s100x100_jfs/t1/90006/40/15668/182046/5e741fcdE52376520/d1bfd53ed31d92e3.jpg!q90.webp",
              goods_name:
                "蝶唯欧牛仔裤女宽松阔腿裤2020年春季新款潮显瘦高腰垂感直筒拖地阔腿女裤 复古色深蓝 26码【适合80-90斤】"
            },
            {
              image:
                "https://img13.360buyimg.com/mobilecms/s70x70_jfs/t1/101177/25/13340/209326/5e571c90E188f22c0/0600a75233ac1052.jpg!q90.webp",
              goods_name:
                "南极人外穿打底裤女2020春夏弹力小脚裤高腰薄款紧身休闲铅笔裤子 黑色无扣132【春薄】 S70-89斤"
            },
            {
              image:
                "https://img10.360buyimg.com/mobilecms/s70x70_jfs/t1/103313/28/15617/195135/5e73988aEc83fc5e1/a434084a2990a8df.jpg!q90.webp",
              goods_name:
                "艾路丝婷2020夏装新款纯棉T恤女短袖上衣韩版修身纯色体恤衫TX3560 黑色V领 S"
            }
          ]
        },
        {
          cat_name: "大家电",
          goods: [
            {
              image:
                "https://img14.360buyimg.com/mobilecms/s100x100_jfs/t1/101511/26/15284/80306/5e6f19d5E907fd57a/98b0b3c6ca331224.jpg!q90.webp",
              goods_name:
                "美的（Midea）1.5匹 一级能效变频 冷暖壁挂式 卧室 防直吹 空调挂机KFR-35GW/BP3DN8Y-PH200(B1) 线下同款"
            },
            {
              image:
                "https://img20.360buyimg.com/mobilecms/s70x70_jfs/t1/103998/11/15505/177195/5e7087f5E0a10198a/caa77291529ca79e.jpg!q90.webp",
              goods_name:
                "小天鹅（LittleSwan）8公斤 波轮洗衣机全自动 健康免清洗 一键脱水 品质电机 TB80V20"
            },
            {
              image:
                "https://img10.360buyimg.com/mobilecms/s70x70_jfs/t1/93670/1/15219/88547/5e6f2564E251561f9/2160f19ff54a2c5c.jpg!q90.webp",
              goods_name:
                "美的（Midea）1.5匹 变频 智弧 冷暖 智能壁挂式卧室空调挂机 KFR-35GW/WDAA3@"
            }
          ]
        },
        {
          cat_name: "厨房小电",
          goods: [
            {
              image:
                "https://img14.360buyimg.com/mobilecms/s100x100_jfs/t1/94906/16/14818/226393/5e69f820E960e6185/363587f30b26490b.jpg!q90.webp",
              goods_name:
                "美的（Midea）M1-L213B 21升 快捷微波炉 家用小型迷你 360°转盘加热 旋钮操控 精准控温 五档火力 易洁内胆"
            },
            {
              image:
                "https://img13.360buyimg.com/mobilecms/s70x70_jfs/t1/88560/8/13571/182933/5e5dc643Ecce07369/2db2ed5b0c9fbaa3.jpg!q90.webp",
              goods_name:
                "美的（Midea）电磁炉 触控按键 黑晶面板 八档火力 一键爆炒 定时功能 C21-WK2102（WK2102/WH2202）"
            },
            {
              image:
                "https://img20.360buyimg.com/mobilecms/s70x70_jfs/t1/92469/15/12321/360405/5e48de4aE24688f63/5e039ccf4cc731bf.jpg!q90.webp",
              goods_name:
                "美的（Midea）电饭煲电饭锅4L智能预约电饭煲气动涡轮防溢金属机身圆灶釜内胆家用多功能电饭煲MB-WFS4037"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.topn {
  height: 276px;
  ul {
    margin-bottom: 10px;
  }
  li {
    display: inline-block;
    margin-left: 5px;
    background-color: #eee;
    padding: 2px 10px;
    border-radius: 20px;
    &.avtive {
      background-color: red;
      color: #fff;
    }
  }
  img {
    width: 80%;
  }
  .col-6 {
    font-size: 14px;
    font-family: Microsoft Yahei, PingFangSC-Medium, sans-serif, serif;
    height: 3em;
    overflow: hidden;
  }
  .row {
      margin-bottom: 10px;
  }
}
</style>