<template>
  <div>
    <div class="header">
      cnode 论坛
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link to="/order">订单页</nuxt-link>
    </div>
    <div class="main">
      <nuxt />
    </div>
    <div class="footer">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #333;
  text-decoration: none;
}
.header {
  height: 50px;
  line-height: 50px;
  background-color: #444444;
  color: #fff;
  padding: 0 100px;
}
.header a{
  color: #fff;
}
.main {
  background-color: #dddddd;
  padding: 20px 0;
}
.footer {
  padding: 50px;
  background-color: #fff;
}
</style>