 
import { Promise } from 'core-js';
import {reqAddOrUpdateShopCart,reqShopCartList,reqUpdateCartIsChecked,reqDeleteCart} from '../api';

const state={
        shopCartList :[]
}
const mutations  = {
        RECEIVESHOPCARTLIST(state,shopCartList){
                state.shopCartList = shopCartList
        }       
}
const actions  = {
        async addOrUpdateShopCart({commit},{skuId,skuNum}){
                let result = await reqAddOrUpdateShopCart(skuId,skuNum)
                if(result.code===200){
                return "ok";
                }else{
                    return Promise.reject(new error('faild'))
                }
        },
        async getShopCartList ({commit}){
                const result = await reqShopCartList()
                if(result.code===200){
                       commit('RECEIVESHOPCARTLIST',result.data)  
                }

        },
        async getupdateCartIsChecked({commit},{skuId,isChecked}){
                const result = await reqUpdateCartIsChecked(skuId,isChecked)
                if(result.code===200){
                        return  "ok"
                }else{
                        return  Promise.reject(new Error ("faild"))
                }
        },
        updateAllCartIsChecked({state,dispatch},isChecked){
                let promises = []
                state.shopCartList.forEach(item => {
                  if(item.isChecked === isChecked) return 
                  const promise = dispatch('getupdateCartIsChecked',{skuId:item.skuId,isChecked:isChecked})
                  promises.push(promise)
                })
                return Promise.all(promises)
              },
        async deleteCart({commit},skuId){
                let result  = await reqDeleteCart(skuId)
                if(result.code===200){
                        return "ok"
                }else{
                        return Promise.reject(new Error('faild'))
                }
              },
              deleteAllCart({state,dispatch}){
                      let promises = []
                      state.shopCartList.forEach(item=>{
                              if(!item.isChecked) return 
                              const promise  = dispatch('deleteCart',item.skuId)
                              promises.push(promise)
                      })
                      return Promise.all(promises)
              }
}
const getters = {

}

export default {
state,
mutations,
actions,
getters,
}