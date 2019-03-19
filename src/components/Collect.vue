<template>
  <div>
    <Mheader :back="true">收藏</Mheader>
    <div class="content">
      <ul>
        <router-link tag="li"
                     v-for="(gpu,index) in gpus"
                     :key="index"
                     :to="{name:'detail',params:{gid:gpu.GPUId}}">
          <span>
            <img :src="gpu.GPUImg">
          </span>
          <div>
            <h5>{{gpu.GPUName}}</h5>
            <p>￥<span>{{gpu.GPUPrice}}</span>.00</p>
            <span>Vue自营旗舰店 ></span>
            <button @click.stop="changeCollect(gpu.GPUId)">删除</button><!--加上.stop阻止事件冒泡，触发删除事件，由于冒泡导致同时注册跳转事件-->
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader.vue'
  import {getCollect,updateGPU,findGPU} from "../api";

  export default {
    name: "Collect",
    components: {
      Mheader
    },
    data(){
      return{
        gpus: [],
      }
    },
    created() {
      this.getCollectData();
    },
    methods:{
      async getCollectData(){
        let {data} = await getCollect();
        this.gpus = data;
      },
      async updateCollect(id,ndata){
        let {data} =await updateGPU(id,ndata);
      },
      async changeCollect(id){
        let {data}=await findGPU(id);
        data.isCollect = false;
        this.updateCollect(id,data);
        this.gpus = this.gpus.filter(item => item.GPUId !== id);
      }
    }

  }
</script>

<style scoped lang="less">
  ul {
    padding: 0;
    margin: 0;

  li {
    display: flex;

  span {
    width: 40%;

  img {
    width: 140px;
    height: 140px;
  }
  }

  div {
    width: 60%;
    height: 140px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    padding-right: 10px;

  h5 {
    font-weight: normal;
    margin: 5px 0;
    height: 65px;
  }

  p {
    font-size: 12px !important;
    color: #e93b3d;

  span {
    font-size: 18px !important;
    color: #e93b3d;
  }
  }

  span {
    font-size: 12px;
    color: #909399;
  }

  button {
    width: 50px;
    height: 20px;
    font-size: 13px;
    background-color: #e93b3d;
    border: none;
    border-radius: 10px;
    outline: none;
    color: #fff;
    position: absolute;
    right: 10px;
  }

  button:focus {
    border: none;
  }
  }
  }
  }
</style>
