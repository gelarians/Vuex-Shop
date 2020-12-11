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
    getProductItems: state => state.productItems
    
}

const productModule = {
    state,
    getters,
    mutations,
    actions
}
export default productModule