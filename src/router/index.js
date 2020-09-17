import  Vue  from 'vue';
import VueRouter from "vue-router"
import routes from './routes';
 Vue.use(VueRouter);



const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    //代表没有传递处理的回调无论是成功还是失败
    return originPush.call(this,location).catch(() => {})
  }else{
    return originPush.call(this,location,onResolved,onRejected)
  }
}
VueRouter.prototype.replace = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    //代表没有传递处理的回调无论是成功还是失败
    return originReplace.call(this,location).catch(() => {})
  }else{
    return originReplace.call(this,location,onResolved,onRejected)
  }
}
 export default new VueRouter({
    
     routes,
     scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
 })