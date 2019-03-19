<template>
  <div>
    <Mheader :back="true">添加</Mheader>
    <div class="content">
      <p><label>显卡名字<input type="text" v-model="gpu.GPUName"></label></p>
      <p><label>显卡价格<input type="number" v-model="gpu.GPUPrice"></label></p>
      <p><label>显卡图片<input type="text" v-model="gpu.GPUImg"></label></p>
      <button @click="add">添加</button>
    </div>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader.vue'
  import {addGPU} from '../api'

  export default {
    name: "Add",
    components: {
      Mheader
    },
    data(){
      return{
        gpu:{GPUImg:'',GPUName:'',GPUPrice:""}
      }
    },
    methods:{
      async add(){
        let res=await addGPU(this.gpu);
        alert(res.data);
        this.$router.push('/list');
      }
    }
  }
</script>

<style scoped lang="less">
.content{
  text-align: center;
}
</style>
