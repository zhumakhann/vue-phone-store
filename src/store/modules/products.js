import { storeProducts } from '../../data'

export default{
  actions: {
    fetchProducts(ctx, url){
      fetch(url)
        .then(res => res.json())
        .then(products => ctx.commit('updateProducts', products))
    }
  },
  mutations: {
    updateProducts(state, products){
      state.products = products
    }
  },
  state: {
    isLoading: false,
    products: storeProducts
  },
  getters: {
    allProducts(state){
      return state.products
    },
    allProductsLoading(state){
      return state.isLoading
    }
  }
}