<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
  </div>
</template>

<script>
  export default {
    name: "Mheader",
    props: {
      back: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    box-sizing: border-box;
    background-color: #282828;
    color:#C8C8C8;
    letter-spacing: 5px;
    i {
      position: absolute;
      left: 15px;
      font-size: 20px;
    }
  }
</style>
