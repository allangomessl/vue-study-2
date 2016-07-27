import Vue from 'vue'
import Vuex from 'vuex'
import products from './product/product.data'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    products
  },
  strict: debug
})
