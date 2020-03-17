<template>
  <div class="countdown">
    <h2>宝购秒杀</h2>
    <div class="countdown-info">
      <span>{{title}}</span>
      点场 倒计时
    </div>
    <div class="countdown-time">
      <span>{{hour}}</span>
      <strong>:</strong>
      <span>{{minute}}</span>
      <strong>:</strong>
      <span>{{sec}}</span>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性
  props: {
    //秒杀开始时间
    start: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inter: null,
      hour: "",
      minute: "",
      sec: ""
    };
  },
  // 组件加载完之后执行
  mounted() {
    this.inter = setInterval(this.compute, 1000);
  },
  beforeDestroy() {
    clearInterval(this.inter);
  },
  methods: {
    leftPad0(data) {
      return data > 9 ? data : "0" + data;
    },
    compute() {
      // 计算开始时间到现在剩余的秒数
      let now = parseInt(Date.now() / 1000); //当前时间
      let start = parseInt(new Date(this.start).getTime() / 1000); //秒数开始时间的秒数
      let leftTime = start - now; // 距离开始时间剩余的秒数
      // 剩余的小时
      if (leftTime <= 0) {
        this.hour = "00";
        this.minute = "00";
        this.sec = "00";
        clearInterval(this.inter);
      } else {
        this.hour = this.leftPad0(parseInt(leftTime / 3600));
        // 剩余的分钟
        this.minute = this.leftPad0(parseInt((leftTime % 3600) / 60));
        // 剩余的秒
        this.sec = this.leftPad0(parseInt((leftTime % 3600) % 60));
      }
    }
  }
};
</script>

<style lang="scss">
.countdown {
  background-image: url("https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/img/4a15d8883775742e3efbb850ae14def7.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding: 35px 0px 25px;
  text-align: center;
  h2 {
    font-size: 32px;
    margin-bottom: 90px;
  }
  &-info {
    font-size: 14px;
    span {
      font-size: 18px;
    }
  }
  &-time {
    margin-top: 10px;
    span {
      background-color: #000;
      padding: 5px;
      font-size: 20px;
    }
    strong {
      margin: 0 5px;
      font-size: 18px;
    }
  }
}
</style>