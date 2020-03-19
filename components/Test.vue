<template>
  <div class="test">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <!-- 由父组件解决每个格里面什么样
        把数据绑定到 name 属性上
        -->
        <slot :user="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss">
.test {
  li:nth-child(odd) {
    background-color: green;
    color: white;
  }
  li:nth-child(even) {
    background-color: yellow;
  }
}
</style>
