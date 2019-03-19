<template>
  <div class="detail">
    <Mheader :back="true">详情</Mheader>
    <div class="content">
      <img :src="gpu.GPUImg" alt="">
      <div>
        <p class="title">
          <span>{{gpu.GPUName}}</span>
          <i class="iconfont " :class="{'icon-star':isCollect,'icon-star-line':!isCollect}" @click="collect"></i>
        </p>
        <p class="price">￥<span>{{gpu.GPUPrice}}</span>.00</p>
        <label>
          修改价格：
          <input type="text" v-model="gpu.GPUPrice">
          <button @click="changePrice">确定</button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader.vue';
  import {findGPU,updateGPU} from '../api';

  export default {
    name: "Detail",
    data() {
      return {
        gpu: {},
        msg:"",
        isCollect:false
      }
    },
    components: {
      Mheader
    },
    computed: {
      gid() {
        return this.$route.params.gid
      }
    },
    created() {
      this.getGPUData();
      this.msg='';
    },
    methods: {
      async getGPUData() {
        let {data} = await findGPU(this.gid);
        //console.log(data);
        this.gpu = data;
        this.isCollect =data.isCollect;
      },
      async changePrice(){
        let res=await updateGPU(this.gid,this.gpu);
        alert(res.data);
        this.$router.push('/list');
      },
      async changeCollect(){
        let {data} = await updateGPU(this.gid,this.gpu);
      },
      collect(){
        if (this.isCollect === true){
          this.isCollect = false;
          this.gpu.isCollect = false;
          this.changeCollect();
        }else if(this.isCollect === false) {
          this.isCollect = true;
          this.gpu.isCollect = true;
          this.changeCollect();
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .icon-star{
    color: yellow;
  }
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 100;
  }

  .content {
    width: 100%;
    text-align: center;

    img {
      width: 100%;
      /*height: 350px;*/

    }

    div {
      text-align: left;
      border-top: 1px solid #cccccc;
      padding: 0 10px;

      .title {
        display: flex;
        text-align: center;

        span {
          display: inline-block;
          width: 90%;
          text-align: left;
          font-weight: bold;
        }

        i {
          display: inline-block;
          width: 10%;
          font-size: 24px;
        }
      }

      .price {
        color: #e93b3d;

        span {
          font-size: 20px;
        }
      }
      input:focus{
        outline:none
      }
    }
  }
</style>
