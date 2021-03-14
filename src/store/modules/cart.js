export default{
  actions: {
    addCartProduct(ctx, product){
      console.log(product);
      ctx.commit('openModal', product)
      console.log(ctx);
      const newProducts = [...ctx.getters.allProducts];
      // console.log(products);
      const index = newProducts.indexOf(product)
      const newProductsItem = newProducts[index];
      newProductsItem.inCart = true;
      newProductsItem.count = 1;
      newProductsItem.total = product.price;
      ctx.commit('addCartProduct', product, newProducts)
      // console.log(index);
    },
    closeModal(ctx){
      console.log('abc');
      ctx.commit('resetModal')
    }
  },
  mutations: {
    addCartProduct(state, product, products){
      state.cartProducts.push(product)
      state.products = products
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
    openModal(state, product){
      const {modal} = state;
      modal.isOpen = true;
      modal.title = product.title;
      modal.img = product.img;
      modal.price = product.price;
    },
    resetModal(state){
      const {modal} = state;
      modal.isOpen = false;
      modal.title = modal.img = modal.price = ''
    }
  },
  state: {
    cartProducts: [],
    modal: {
      isOpen: false,
      img: '',
      title: '',
      price: '',
    }
  },
  getters: {
    cartProducts(state){
      return state.cartProducts
    },
    cartModal(state){
      return state.modal
    }
  }
}