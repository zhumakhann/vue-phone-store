export default{
  actions: {
    init(ctx){
      const allProducts = ctx.getters.allProducts;
      ctx.commit('updatefilteredProducts', allProducts)
    },
    getFilters(ctx, state){
      const companies = [... new Set(state.map(item => item.company))]
      
      ctx.commit('updateFilters', companies)
    },
    filterProducts(ctx, company){
      const allProducts = ctx.getters.allProducts;
      let products = []
      if(company === 'All'){
        products = [...allProducts]
      }else{
        products = allProducts.filter(item => item.company == company)
      }
      ctx.commit('updatefilteredProducts', products);
      // ctx.dispatch('filterByPrice', {filteredProducts: products, value: ctx.getters.priceSort})
    },
    filterByPrice(ctx, value){
      const filteredProducts = ctx.getters.filteredProducts;
      let products = []
      if(value === 'high'){
        products = filteredProducts.sort((a, b) => b.price - a.price)
      }else if(value === 'low'){
        products = filteredProducts.sort((a, b) => a.price - b.price)
      }
      ctx.commit('updatefilteredProducts', products)
      
    },
    updatePriceSort(ctx, value){
      ctx.commit('updatePriceSort', value)
    }
  },
  mutations: {
    updateFilters(state, newState){
      state.filters = newState;
    },
    updatefilteredProducts(state, newState){
      state.filteredProducts = newState
    },
    updatePriceSort(state, value){
      state.priceSort = value;
    }
  },
  state: {
    filters: [],
    filteredProducts: [],
    priceSort: '',
  },
  getters: {
    allFilters(state){
      return state.filters
    },
    filteredProducts(state){
      return state.filteredProducts
    },
    priceSort(state){
      return state.priceSort
    }
  }
}