export const PRODUCT = {
  RECEIVE: 'PRODUCT:RECEIVE',
  INSERT: 'PRODUCT.INSERT',
  UPDATE: 'PRODUCT.UPDATE'
}

export default {
  state: {
    all: []
  },
  mutations: {
    [PRODUCT.RECEIVE] (state, products) {
      state.all = products
    },
    [PRODUCT.INSERT] (state, product) {
      state.all.push(product)
    },
    [PRODUCT.UPDATE] (state, product) {
    }
  }
}
