import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Cart = () => import('../view/cart/Cart')
const Home = () => import('../view/home/Home')
const Profile = () => import('../view/profile/Profile')
const Category = () => import('../view/category/Category')

const routes = [
    {
        path:'',
        redirect: '/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/category',
        component:Category
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router