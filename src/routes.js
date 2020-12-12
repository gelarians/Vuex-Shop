import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Signin from "./components/auth/Signin.vue"

import ProductList from "./components/product/ProductList.vue"
import CartList from "./components/card/CardList.vue"
import ProductItem from "./components/product/ProductItem.vue"

import NotFound from "./components/error/NotFound.vue"


const routes = [
    // Jede route hat ein objekt innerhalb der liste
    {
        path: "/login",
        component: Signin
    },
    {
        path: '/',
        component: ProductList
    },
    {
        path: '/cart',
        component: CartList
    },
    {
        path: '/products/:id',
        component: ProductItem,
        props: true
    },
    {
        path: '*',
        component: NotFound
    }


]

export const router = new VueRouter({
    // mode: "history" wenn du nicht willst das localhost:8080/#/ steht sondern nur ...:8080/
    mode: "history",
    routes,
})