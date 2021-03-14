import { storeProducts } from '../../data'

export default{
  actions: {
    fetchProducts(ctx, url){
      fetch(url)
        .then(res => res.json())
        .then(products => ctx.commit('updateProducts', products))
    },
    resetProducts(ctx){
      const products = [...ctx.getters.allProducts].map(product => {
        return {
          ...product,
          inCart: false,
          count: 0,
          total: 0,
        }
      });
      console.log(products);
      ctx.commit('updateProducts', products)
    },
    resetProduct(ctx, id){
      const products = [...ctx.getters.allProducts];
      const foundItem = products.find(item => item.id === id);
      const index = products.indexOf(foundItem);
      const productItem = products[index]
      productItem.inCart = false;
      productItem.count = 0;
      productItem.total = 0;
      ctx.commit('updateProducts', products)
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