import  {getUserTempId} from '../utils/userabout';
import {reqUserRegister,reqUserLogin,reqUserLogout} from "../api"

const state={
        userTempId:getUserTempId(),
        userInfo :JSON.parse(localStorage.getItem("USERINFO_KEY")) ||{},
        
}
const mutations  = {
        RECEIVEUSERINFO(state,userInfo){
                state.userInfo =userInfo
        }  ,
        RESETUSERINFO(state){
                state.userInfo = {}
        }
}
const actions  = {
        async getUserRegister({comments},userInfo){
                const result  = await reqUserRegister(userInfo);
                if(result.code===200){
                        return "ok";
                }else{
                        return Promise.reject(new Error("faild"))
                }
        },
        async getUserLogin({commit},userInfo){
                const result = await reqUserLogin(userInfo);
                if(result.code===200){
                        commit("RECEIVEUSERINFO",result.data);
                        localStorage.setItem("USERINFO_KEY",JSON.stringify(result.data))
                        return "ok"
                }else{
                        return Promise.reject(new Error("faild"))
                }
        },
        async  userLogout({commit}){
                const result = await reqUserLogout();
                if(result.code===200){
                        commit("RESETUSERINFO",result.code )
                        localStorage.removeItem("USERINFO_KEY")
                        return "ok"
                }else{
                        return Promise.reject(new Error("faild"))
                }
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