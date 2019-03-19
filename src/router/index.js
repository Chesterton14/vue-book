import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Detail from '../components/Detail.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      meta:{keepAlive:true}
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/add',
      component:Add
    },
    {
      path:'/collect',
      component:Collect
    },
    {
      path:'/detail/:gid',
      component:Detail,
      name:'detail'
    },
    {
      path:'*',
      redirect: '/home'
    }
  ]
})
