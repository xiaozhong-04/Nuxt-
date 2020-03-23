<template>
  <div class="t1">
    {{mynum}}
    <br />
    <button @click="mynum=Math.random()">修改num</button>
  </div>
</template>

<script>
export default {
  // 定义属性方法一.直接使用组件
  props: ["num"],
  // 定义属性方法二,定义一个对象 (定义类型.默认值.格式验证)
  //   props: {}

  computed: {
    // 定义计算属性方法一,直接写一个函数(只读)
    // mynum: function() {
    //   return this.num;
    // }
    // 定义计算属性方法二,对象 (读写) 完整
    mynum: {
      // 读取 mynum 时调用这个函数 (getter:读取器)
      get: function() {
        return this.num;
      },
      //   修改 mynum 时调用这个函数 (setting: 修改器)
      set: function(value) {
        this.$emit("change", value);
      }
    }
  }

  //   data() {
  //     return {
  //       mynum: this.num
  //     };
  //   },
  //   // 监听器
  //   watch: {
  //     // 监听 num 属性
  //     num: function() {
  //       this.mynum = this.num;
  //     },
  //     // 监听 mynum 数据
  //     mynum: function() {
  //       this.$emit("change", this.mynum);
  //     }
  //   }
};
</script>