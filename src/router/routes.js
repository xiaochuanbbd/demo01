import Home from "../pages/Home/index.vue"
import Login from "../pages/Login/index.vue"
import Register from "../pages/Register/index.vue"
import Search from "../pages/Search/index.vue"
import Detail from "../pages/Detail"
import AddCartSuccess from "../pages/AddCartSuccess"
import ShopCart from "../pages/ShopCart"
import Trade from "../pages/Trade"
import Pay from "../pages/Pay"
import PaySuccess from "../pages/PaySuccess"

export default [
    {
        path:'/trade',
        component:Trade,
    },
    {
        path:'/pay',
        component:Pay,
    },
    {
        path:'/shopcart',
        component:ShopCart,
    },
    {
        path:"/addcartsuccess",
        component:AddCartSuccess,
    },
    {
        path: '/detail/:goodsId',
        component: Detail
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isHide: true,
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isHide: true,
        }
    },
    {
        name: "search",
        path: '/search/:keyword?',
        component: Search
    },

    {
        path: '/',
        redirect: "/home"
    }

]