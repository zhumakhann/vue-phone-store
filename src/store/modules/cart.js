export default{
  actions: {
    addCartProduct(ctx, product){
      console.log(product);
      ctx.commit('addCartProduct', product)
      console.log(ctx);
    }
  },
  mutations: {
    addCartProduct(state, product){
      state.cartProducts.push(product)
    },
    resetCartProducts(state){
      state.cartProducts = []
    },
    cartProductQuantityPlus(state, product){
      console.log(state, product)
    },
    cartProductQuantityMinus(state, product){
      console.log(state, product)
    },
  },
  state: {
    cartProducts: [],
  },
  getters: {
    cartProducts(state){
      return state.cartProducts
    },
  }
}