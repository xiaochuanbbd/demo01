import Vue from 'vue';
import  Vuex from 'vuex'
Vue.use(Vuex)
import {reqCategoryList,reqBannerList,reqFloorList} from "../api"

const state={
    categoryList:[],
     bannerList:[],
     floorList:[],
}
const mutations  = {
    RECEIVECATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    RECEIVEBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    RECEIVEFLOORLIST(state,floorList){
        state.floorList = floorList
    }

}
const actions  = {
    async getCategoryList({commit}){
     let result  = await   reqCategoryList()
        if(result.code===200){
            commit("RECEIVECATEGORYLIST",result.data)
        } 
     },
     async getBannerList({commit}){
        let result  = await   reqBannerList()
           if(result.code===200){
               commit("RECEIVEBANNERLIST",result.data)
           } 
        },
        async getFloorList({commit}){
            let result  = await  reqFloorList()
               if(result.code===200){
                   commit("RECEIVEFLOORLIST",result.data)
               } 
            },
}
const getters = {

}

export default {
state,
mutations,
actions,
getters

}