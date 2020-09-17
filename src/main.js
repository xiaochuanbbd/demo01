import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

// 定义公共组件
import TypeNav from './components/TypeNav'
Vue.component('TypeNav',TypeNav)
import Pagination from "./components/Pagination"
Vue.component('Pagination',Pagination)
 //引入轮播图公共组件
 import SliderLoop from "./components/SliderLoop"
 Vue.component('SliderLoop',SliderLoop)

 
// 试试发ajax请求
import * as  API  from '@/api'  //加载api的index.js 让其能够直接运行



//注入store对象
import store from "./store/index"
//注入router对象
import router from './router/index';

//引入mock文件 注册使用让mock可以注册上接口 
 import './mock/mockServer'



new Vue({
    //定义全局事件中总线
 beforeCreate() {
   Vue.prototype.$bus =this,
   Vue.prototype.$API = API
},
   el:"#app",
   render:h=>h(App),
   router,
   store
})
