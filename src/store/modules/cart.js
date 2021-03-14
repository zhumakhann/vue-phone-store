export default{
  actions: {
    removeCartItem(ctx, id){
      const cartProducts = [...ctx.getters.cartProducts];
      console.log(id);
      
      const newState = cartProducts.filter(item => item.id !== id);
      ctx.commit('updateCartProducts', newState)
      ctx.dispatch('resetProduct', id)
      ctx.dispatch('countCartPrice', newState)
    },
    countCartPrice(ctx, state = []){
      console.log(state);
      const subTotal = state.reduce((acc, item) => {
        acc += item.total
        return acc
      }, 0)
      const tax = subTotal / 10;
      const total = tax + subTotal;
      ctx.commit('countTotal', {subTotal, tax, total})
    },
    addCartProduct(ctx, product){
      ctx.commit('openModal', product)
      const cartProducts = [...ctx.getters.cartProducts];
      product.inCart = true;
      product.count = 1;
      product.total = product.price;
      cartProducts.push(product)
      // const cartPrice = this.countCartPrice(newProducts)
      // console.log(cartPrice);
      ctx.commit('updateCartProducts', cartProducts)
      ctx.dispatch('countCartPrice', cartProducts)
    },
    closeModal(ctx){
      ctx.commit('resetModal')
      ctx.dispatch('countCartPrice')
    },
    cartProductQuantityHandler(ctx, item){
      const {product, type} = item;
      const newCartProducts = [...ctx.getters.cartProducts]
      const index = newCartProducts.indexOf(product);
      const newCartProduct = newCartProducts[index];
      console.log(type);
      if(type === 'plus'){
        newCartProduct.count++
      }else{
        newCartProduct.count--
        console.log(newCartProduct.count);
        if(!newCartProduct.count){
          console.log('remove item');
          return ctx.dispatch('removeCartItem', newCartProduct.id)
        }
        
      }
      newCartProduct.total =  newCartProduct.count * newCartProduct.price; 
      ctx.commit('updateCartProducts', newCartProducts)
      ctx.dispatch('countCartPrice', newCartProducts)
    },
    clearCart(ctx){
      ctx.commit('clearCart')
      ctx.dispatch('resetProducts')
    }
  },
  mutations: {
    addCartProduct(state, product){
      state.cartProducts.push(product);
    },
    updateCartProducts(state, newState){
      state.cartProducts = newState
    },
    countTotal(state, price){
      state.cartPrice = price
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
    clearCart(state){
      state.cartProducts = [],
      state.cartPrice = {}
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
    cartProducts: [
      // {
      //   id: 1,
      //   title: "Google Pixel - Black",
      //   img: "img/product-1.png",
      //   price: 10,
      //   company: "GOOGLE",
      //   info:
      //     "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      //   inCart: false,
      //   count: 1,
      //   total: 10
      // },
    ],
    cartPrice: {},
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
    },
    cartPrice(state){
      return state.cartPrice
    }
  }
}