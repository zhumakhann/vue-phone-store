export default{
  actions: {
    getDetailProduct(ctx, id){
      console.log('getting');
      const products = [...ctx.getters.allProducts];
      // console.log(products);
      const product = products.find(item => item.id === +id)
      console.log(products, product, id);
      ctx.commit('addDetailProduct', product)
    },
    closeModal(ctx){
      console.log('abc');
      ctx.commit('resetModal')
    }
  },
  mutations: {
    addDetailProduct(state, product){
      state.detailProduct = product
    }
  },
  state: {
    detailProduct: {}
  },
  getters: {
    detailProduct(state){
      return state.detailProduct
    }
  }
}