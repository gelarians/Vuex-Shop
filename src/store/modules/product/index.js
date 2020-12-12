"use strict"
import axios from "axios"

const state = {
    productItems: []

}

const mutations = {
    UPDATE_PRODUCT_ITEMS (state, payload){
        state.productItems = payload
    }
}

const actions = {
    getProductItems ({ commit }){
        axios.get("/api/products")
        .then((response) => {
            console.log(response)
            commit("UPDATE_PRODUCT_ITEMS", response.data)
        })

    }
    
}

const getters = {
    getProductItems: state => state.productItems,
    productItemById: state => id => {
        console.log("ID: ", id)
        const item = state.productItems.find(item => item.id === id)
        console.log("ITEM:", item) 
        return state.productItems.find(item => item.id === id)
    }
    
}

const productModule = {
    state,
    getters,
    mutations,
    actions
}
export default productModule