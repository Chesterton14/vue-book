webpackJsonp([1],{"+3Rs":function(t,e){},"+Pdy":function(t,e){},"E6f+":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("router-link",{attrs:{to:"/home"}},[e("i",{staticClass:"iconfont icon-shouye"})]),this._v(" "),e("router-link",{attrs:{to:"/list"}},[e("i",{staticClass:"iconfont icon-list"})]),this._v(" "),e("router-link",{attrs:{to:"/add"}},[e("i",{staticClass:"iconfont icon-detail-add"})]),this._v(" "),e("router-link",{attrs:{to:"/collect"}},[e("i",{staticClass:"iconfont icon-star-line"})])],1)},staticRenderFns:[]};var i={name:"App",components:{Tab:a("VU/8")({name:"Tab"},s,!1,function(t){a("dxJ7")},"data-v-6ef03c7a",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fadeIn"}},[e("router-view")],1),this._v(" "),e("tab")],1)},staticRenderFns:[]};var c=a("VU/8")(i,r,!1,function(t){a("+3Rs")},null,null).exports,o=a("/ocq"),u=a("Xxa5"),l=a.n(u),d=a("d7EF"),p=a.n(d),v=a("exGp"),g=a.n(v),m={name:"Mheader",props:{back:{type:Boolean,default:!1}},methods:{goBack:function(){this.$router.go(-1)}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._t("default"),this._v(" "),this.back?e("i",{staticClass:"iconfont icon-fanhui",on:{click:this.goBack}}):this._e()],2)},staticRenderFns:[]};var h=a("VU/8")(m,f,!1,function(t){a("E6f+")},"data-v-ddccbeb4",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperSlides,function(t,a){return e("swiper-slide",{key:a},[e("img",{attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var k=a("VU/8")({name:"carousel",props:["swiperSlides"],data:function(){return{swiperOption:{setWrapperSize:!0,autoplay:!0,pagination:{el:".swiper-pagination"}}}}},_,!1,function(t){a("+Pdy")},"data-v-fc19a76c",null).exports,P=a("mtWM"),U=a.n(P);U.a.defaults.baseURL="http://119.29.144.11:4000";var G=function(t){return U.a.delete("/gpu?id="+t)},x=function(){return U.a.all([U.a.get("/sliders"),U.a.get("/hotgpus")])},w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sk-circle"},[a("div",{staticClass:"sk-circle1 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle2 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle3 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle4 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle5 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle6 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle7 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle8 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle9 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle10 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle11 sk-child"}),t._v(" "),a("div",{staticClass:"sk-circle12 sk-child"})])}]};var C=a("VU/8")({name:"Loading"},w,!1,function(t){a("necB")},"data-v-c9c5b00a",null).exports,b={name:"home",components:{Mheader:h,Swiper:k,Loading:C},data:function(){return{sliders:[],GPUs:[],loading:!0}},created:function(){this.getAllData()},methods:{getAllData:function(){var t=this;return g()(l.a.mark(function e(){var a,n,s,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:a=e.sent,n=p()(a,2),s=n[0],i=n[1],t.sliders=s.data,t.GPUs=i.data,t.loading=!1;case 9:case"end":return e.stop()}},e,t)}))()}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Mheader",[t._v("首页")]),t._v(" "),a("div",{staticClass:"content"},[t.loading?a("Loading"):[a("Swiper",{attrs:{swiperSlides:t.sliders}}),t._v(" "),a("div",{staticClass:"container"},[a("h3",[t._v("热门游戏显卡")]),t._v(" "),a("ul",t._l(t.GPUs,function(e,n){return a("router-link",{key:n,attrs:{tag:"li",to:{name:"detail",params:{gid:e.GPUId}}}},[a("img",{attrs:{src:e.GPUImg}}),t._v(" "),a("span",[t._v(t._s(e.GPUName))])])}),1)])]],2)],1)},staticRenderFns:[]};var $=a("VU/8")(b,M,!1,function(t){a("Y1xa")},"data-v-6d9a1738",null).exports,N=a("Gu7T"),I=a.n(N),y={name:"List",components:{Mheader:h,Loading:C},data:function(){return{gpus:[],loading:!0,hasMore:!0,pageNum:0}},created:function(){this.pageLimitData()},methods:{del:function(t){var e=this;return g()(l.a.mark(function a(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,G(t);case 2:e.gpus=e.gpus.filter(function(e){return e.GPUId!==t});case 3:case"end":return a.stop()}},a,e)}))()},pageLimitData:function(){var t=this;return g()(l.a.mark(function e(){var a,n,s,i,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=t.pageNum,U.a.get("/page?pageNum="+c);case 2:a=e.sent,n=a.data,s=n.gpus,i=n.hasMore,r=n.pageSize,t.gpus=[].concat(I()(t.gpus),I()(s)),t.hasMore=i,t.pageNum=t.gpus.length/r,t.loading=!1;case 11:case"end":return e.stop()}var c},e,t)}))()},getMore:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var e=t.$refs.scroll;e.scrollTop+e.clientHeight>e.scrollHeight&&t.pageLimitData()},50)},getMoreBtn:function(){this.pageLimitData()}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Mheader",{attrs:{back:!0}},[t._v("列表")]),t._v(" "),a("div",{ref:"scroll",staticClass:"content",on:{scroll:t.getMore}},[t.loading?a("Loading"):[a("ul",t._l(t.gpus,function(e,n){return a("router-link",{key:n,attrs:{tag:"li",to:{name:"detail",params:{gid:e.GPUId}}}},[a("span",[a("img",{attrs:{src:e.GPUImg}})]),t._v(" "),a("div",[a("h5",[t._v(t._s(e.GPUName))]),t._v(" "),a("p",[t._v("￥"),a("span",[t._v(t._s(e.GPUPrice))]),t._v(".00")]),t._v(" "),a("span",[t._v("Vue自营旗舰店 >")]),t._v(" "),a("button",{on:{click:function(a){return a.stopPropagation(),t.del(e.GPUId)}}},[t._v("删除")])])])}),1),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.hasMore,expression:"hasMore"}],staticStyle:{"text-align":"center"},on:{click:t.getMoreBtn}},[t._v("加载更多")])]],2)],1)},staticRenderFns:[]};var F=a("VU/8")(y,E,!1,function(t){a("Xzku")},"data-v-5d984693",null).exports,R={name:"Detail",data:function(){return{gpu:{},msg:""}},components:{Mheader:h},computed:{gid:function(){return this.$route.params.gid}},created:function(){this.getGPUData(),this.msg=""},methods:{getGPUData:function(){var t=this;return g()(l.a.mark(function e(){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s=t.gid,U.a.get("/gpu?id="+s);case 2:a=e.sent,n=a.data,t.gpu=n;case 5:case"end":return e.stop()}var s},e,t)}))()},changePrice:function(){var t=this;return g()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.gid,s=t.gpu,U.a.put("/gpu?id="+n,s);case 2:a=e.sent,alert(a.data),t.$router.push("/list");case 5:case"end":return e.stop()}var n,s},e,t)}))()}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("Mheader",{attrs:{back:!0}},[t._v("详情")]),t._v(" "),a("div",{staticClass:"content"},[a("img",{attrs:{src:t.gpu.GPUImg,alt:""}}),t._v(" "),a("div",[a("p",{staticClass:"title"},[a("span",[t._v(t._s(t.gpu.GPUName))]),t._v(" "),a("i",{staticClass:"iconfont icon-star-line"})]),t._v(" "),a("p",{staticClass:"price"},[t._v("￥"),a("span",[t._v(t._s(t.gpu.GPUPrice))]),t._v(".00")]),t._v(" "),a("label",[t._v("\n        修改价格：\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gpu.GPUPrice,expression:"gpu.GPUPrice"}],attrs:{type:"text"},domProps:{value:t.gpu.GPUPrice},on:{input:function(e){e.target.composing||t.$set(t.gpu,"GPUPrice",e.target.value)}}}),t._v(" "),a("button",{on:{click:t.changePrice}},[t._v("确定")])])])])],1)},staticRenderFns:[]};var L=a("VU/8")(R,D,!1,function(t){a("ofYD")},"data-v-6c40beaf",null).exports,V={name:"Add",components:{Mheader:h},data:function(){return{gpu:{GPUImg:"",GPUName:"",GPUPrice:""}}},methods:{add:function(){var t=this;return g()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.gpu,U.a.post("/gpu",n);case 2:a=e.sent,alert(a.data),t.$router.push("/list");case 5:case"end":return e.stop()}var n},e,t)}))()}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Mheader",{attrs:{back:!0}},[t._v("添加")]),t._v(" "),a("div",{staticClass:"content"},[a("p",[a("label",[t._v("显卡名字"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gpu.GPUName,expression:"gpu.GPUName"}],attrs:{type:"text"},domProps:{value:t.gpu.GPUName},on:{input:function(e){e.target.composing||t.$set(t.gpu,"GPUName",e.target.value)}}})])]),t._v(" "),a("p",[a("label",[t._v("显卡价格"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gpu.GPUPrice,expression:"gpu.GPUPrice"}],attrs:{type:"number"},domProps:{value:t.gpu.GPUPrice},on:{input:function(e){e.target.composing||t.$set(t.gpu,"GPUPrice",e.target.value)}}})])]),t._v(" "),a("p",[a("label",[t._v("显卡图片"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gpu.GPUImg,expression:"gpu.GPUImg"}],attrs:{type:"text"},domProps:{value:t.gpu.GPUImg},on:{input:function(e){e.target.composing||t.$set(t.gpu,"GPUImg",e.target.value)}}})])]),t._v(" "),a("button",{on:{click:t.add}},[t._v("添加")])])],1)},staticRenderFns:[]};var S=a("VU/8")(V,A,!1,function(t){a("sIXK")},"data-v-e4d1e18a",null).exports,T={name:"Collect",components:{Mheader:h}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Mheader",{attrs:{back:!0}},[this._v("收藏")])],1)},staticRenderFns:[]};var X=a("VU/8")(T,B,!1,function(t){a("gmFs")},"data-v-3e14d2ff",null).exports;n.a.use(o.a);var z=new o.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:$,meta:{keepAlive:!0}},{path:"/list",component:F},{path:"/add",component:S},{path:"/collect",component:X},{path:"/detail/:gid",component:L,name:"detail"},{path:"*",redirect:"/home"}]}),H=(a("uMhA"),a("7QTg")),Y=a.n(H);a("v2ns");n.a.config.productionTip=!1,n.a.use(Y.a),new n.a({el:"#app",router:z,components:{App:c},template:"<App/>"})},Xzku:function(t,e){},Y1xa:function(t,e){},dxJ7:function(t,e){},gmFs:function(t,e){},necB:function(t,e){},ofYD:function(t,e){},sIXK:function(t,e){},uMhA:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f17360011de84ebe494b.js.map