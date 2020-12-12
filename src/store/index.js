import Vue from 'vue'
import Vuex from 'vuex'

// module importieren
import cartModule from "./modules/cart/index.js"
import productModule from "./modules/product/index.js"
import authModule from "./modules/auth/index.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cartModule,
    productModule,
    authModule
  }
})
