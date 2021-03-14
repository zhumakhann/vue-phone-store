import Vue from 'vue';
import Vuex from 'vuex';
import prodcuts from './modules/products'
import cart from './modules/cart'
import detail from './modules/detail'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    prodcuts,
    cart,
    detail
  }
})