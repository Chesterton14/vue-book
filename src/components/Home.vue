<template>
  <div>
    <Mheader>首页</Mheader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else="loading">
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门游戏显卡</h3>
          <ul>
            <router-link tag="li"
                         v-for="(GPU,index) in GPUs"
                         :key="index"
                         :to="{name:'detail',params:{gid:GPU.GPUId}}">
              <img :src="GPU.GPUImg">
              <span>{{GPU.GPUName}}</span>
            </router-link>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader.vue';
  import Swiper from '../base/Swiper.vue';
  import {getAll} from '../api';
  import Loading from '../base/Loading.vue'

  export default {
    name: "home",
    components: {
      Mheader, Swiper,Loading
    },
    data() {
      return {
        sliders: [],
        GPUs: [],
        loading: true
      }
    },
    created() {
      this.getAllData();
    },
    methods: {
      async getAllData() {
        let [sliders, GPUs] = await getAll();
        this.sliders = sliders.data;
        this.GPUs = GPUs.data;
        this.loading = false;
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    width: 95%;
    margin: 0 auto;

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap; //默认不换行，设置wrap换行
      li {
        width: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding: 8px;
        margin: 5px 0;
        box-sizing: border-box;

        img {
          width: 100%;
        }
      }
    }

  }
</style>
