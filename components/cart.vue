<template>
  <div class="cart">
    <div class="cart-title">
      <div class="cart-count">4</div>
      <svg
        t="1584285907453"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2282"
        width="16"
        height="16"
      >
        <path
          d="M352.512 832c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S387.872 832 352.512 832L352.512 832zM800.512 832c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S835.872 832 800.512 832L800.512 832zM864 800 344.224 800c-46.112 0-86.656-36.48-92.288-83.04l-54.272-382.08-30.88-178.56C164.864 140.736 150.656 128 136.768 128L96 128C78.336 128 64 113.664 64 96s14.336-32 32-32l40.768 0c46.688 0 87.68 36.48 93.344 83.04l30.816 177.888 54.496 383.712C317.216 723.488 330.656 736 344.224 736L864 736c17.696 0 32 14.304 32 32S881.696 800 864 800zM384.224 672c-16.608 0-30.656-12.8-31.872-29.664-1.312-17.632 11.936-32.96 29.536-34.24l434.112-32c15.936-0.096 29.376-12.608 31.136-26.848l50.4-288.384c1.28-10.752-1.696-22.528-8.128-29.824C885.28 226.368 880.096 224 874.048 224L320 224C302.336 224 288 209.664 288 192s14.336-32 32-32l554.048 0c24.448 0 46.912 10.144 63.264 28.608 18.688 21.088 27.264 50.816 23.52 81.632l-50.432 288.416C904.96 603.52 864.448 640 818.336 640l-431.744 31.904C385.792 671.968 384.992 672 384.224 672z"
          p-id="2283"
          fill="#d81e06"
        />
      </svg>
      我的购物车
    </div>
    <div class="cart-content">
      <img
        src="https://img11.360buyimg.com/uba/jfs/t3571/299/131233948/1117/a1196554/58004d6dN2927f0f7.png"
        alt
      />
      购物车中还没有商品，赶紧选购吧！
    </div>
  </div>
</template>

<style lang="scss">
.cart {
  &:hover {
    .cart-title {
      border: 1px solid red;
      position: relative;
      &:after {
        width: 100%;
        content: "";
        display: block;
        height: 2px;
        background-color: #fff;
        position: absolute;
        z-index: 9999;
        left: 0;
        bottom: -2px;
      }
    }
    .cart-content {
      display: block;
    }
  }
  position: relative;
  &-title {
    padding: 10px 20px;
    border: 1px solid #eee;
    color: red;
  }
  &-content {
    width: 400px;
    background-color: #fff;
    right: 0;
    padding: 10px 20px;
    border: 1px solid red;
    position: absolute;
    display: none;
  }
  svg {
    margin-right: 10px;
  }
  &-count {
    position: absolute;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    padding: 0 7px;
    transform: translate(10px, -10px);
  }
}
</style>