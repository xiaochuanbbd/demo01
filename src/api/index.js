import Ajax from "../ajax/Ajax"
import mockAjax from '../ajax/mockAjax'
export const reqCategoryList=()=>{
        return Ajax({
            url:"/product/getBaseCategoryList",
            method:"get",
        })
}

export const reqBannerList =()=>{
    return mockAjax ({
        url:'/banner',
        method:"get",
    })
}


export const reqFloorList =()=>{
    return mockAjax ({
        url:'/floor',
        method:"get",
    })
}

export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url:'/list',
    method:'post',
    data:searchParams //必须是对象
  })
}
// reqGoodsListInfo({})
export const reqGoodsDetailInfo=(skuId)=>{
    return Ajax({
        url:`/item/${skuId}`,
        method:'get',
    })
}
// reqGoodsDetailInfo() /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>{
    return Ajax({
        url:`/cart/addToCart/${ skuId }/${ skuNum }`,
        method:'post',
    })
}

export const reqShopCartList = ()=>{
    return Ajax ({
        url:"/cart/cartList",
        method:"get"
    })
}
// /api/cart/checkCart/{skuID}/{isChecked}
export const  reqUpdateCartIsChecked=(skuId,isChecked)=>{
    return  Ajax({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:"get"
    })
}

export const reqDeleteCart=(skuId)=>{
    return Ajax({
        url:`/cart/deleteCart/${skuId}`,
        method:"delete"
    })
}

//请求注册
// /api/user/passport/register
export const reqUserRegister = (userInfo)=>{
    return  Ajax({
        url:"/user/passport/register",
        method:"post",
        data:userInfo,
    })
}
//登录请求函数
export const reqUserLogin = (userInfo)=>{
    return  Ajax({
        url:"/user/passport/login",
        method:"post",
        data:userInfo,
    })
}

export const reqUserLogout = ( )=>{
    return  Ajax({
        url:"/user/passport/logout",
        method:"get",
        
    })
}
export const reqTradeInfo = ()=>{
    return Ajax({
        url:"/order/auth/trade",
        method:"get"
    })
}
///api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqsubmitOrder=( tradeNo,tradeInfo)=>{
    return Ajax({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method:"post",
        data:tradeInfo
    })
}

export const reqPayInfo= (orderId)=>{
    return Ajax({
        url:`/payment/weixin/createNative/${orderId}`,
        method:"get"
    })
}