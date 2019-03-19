<template>
  <div id="app">
    <!--<transition name="fadeIn">
      <keep-alive>&lt;!&ndash;需要缓存&ndash;&gt;
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>-->
    <transition name="fadeIn">
      <!--<keep-alive>&lt;!&ndash;不需要缓存&ndash;&gt;
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>-->
      <router-view></router-view>
    </transition>

    <tab></tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue';

  export default {
    name: 'App',
    components: {
      Tab
    }
  }
</script>

<style>
  a {
    text-decoration: none
  }

  .content {
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 40px;
    width: 100%;
    overflow: auto;
  }

  ul li {
    list-style: none
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.2s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.2s linear;
    opacity: 0;
  }
</style>
