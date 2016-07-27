import Vue from 'vue'

import ProductIndex from './Product/views/ProductIndex'

export default {
  register: function () {
    Vue.component('product-index', ProductIndex)
  }
}
