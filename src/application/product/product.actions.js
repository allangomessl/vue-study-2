import { PRODUCT } from './product.data'

export class Products {

  constructor (dispatch) {
    this.dispatch = dispatch
  }
  getAll () {
    this.dispatch(PRODUCT.RECEIVE, [{ 'name': 'Big Mac' }])
  }
  insert (product) {
    this.dispatch(PRODUCT.INSERT, product)
  }
}
