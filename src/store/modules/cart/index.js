"use strict"
import axios from "axios"

const state = { 
    cartItems: []
}

const mutations = {
    UPDATE_CART_ITEM (state, payload) {
        state.cartItems = payload
    }
}

const actions = {
    getCartItems({commit}, token){
        axios.get(`/api/cart?token=${token}`)
        .then((response) => {
            console.log(response)
            commit("UPDATE_CART_ITEM", response.data)
        })
    },
    addCartItem({commit}, payload){
        return axios.post("/api/cart", payload)
            .then((response) => {
                commit("UPDATE_CART_ITEM", response.data)
            })
    },
    removeCartItem({commit}, payload){
        axios.post("/api/cart/delete", payload)
            .then((response) => {
                commit("UPDATE_CART_ITEM", response.data)
            })
    },
    removeAllCartItems({commit}){
        axios.post("/api/cart/delete/all")
            .then((response) => {
                commit("UPDATE_CART_ITEM", response.data)
            })
    },
    removeCartContainer({commit}, payload){
        axios.post("/api/cart/product/delete", payload)
            .then((response) => {
                commit("UPDATE_CART_ITEM", response.data)
            })
    }
}
const getters = {
    cartItems: (state) => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((sum, cartItem) => {
            return (cartItem.quantity * cartItem.price) + sum
        },0)
    },
    cartQuantity: state => {
        return state.cartItems.reduce((sum, cartItem) => {
            return cartItem.quantity + sum
        },0)
    }

    
}

const cartModule = {
    state,
    getters,
    mutations,
    actions
}

export default cartModule