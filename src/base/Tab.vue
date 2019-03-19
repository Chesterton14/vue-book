<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-list"></i>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-detail-add"></i>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-star-line"></i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Tab"
    }
</script>
<!--
  display:flex;
  flex-direction:row/column;
  justify-content:center;//垂直居中
  align-item:center://水平居中
  flex:1
-->
<style scoped lang="less">
.footer{
  position: fixed;
  left: 0;
  bottom:0;
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #282828;
  box-sizing: border-box;
  a{
    display: flex;
    color: #C8C8C8;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    i{
      font-size: 22px;
    }
  }
  a.router-link-active{
    color:  #00FF00;
  }
}
</style>
