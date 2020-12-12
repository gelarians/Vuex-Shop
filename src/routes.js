import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ProductList from "./components/product/ProductList.vue"

const routes = [
    // Jede route hat ein objekt innerhalb der liste
    {
        path: '/',
        component: ProductList
    }
]

export const router = new VueRouter({
    // mode: "history" wenn du nicht willst das localhost:8080/#/ steht sondern nur ...:8080/
    mode: "history",
    routes,
})