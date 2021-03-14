<template>
  <section v-if="cartProducts.length > 0">
    <TitleWrapper name="your" title="cart" />
    <CartColumns />
    <CartItem v-for="product in cartProducts" :key="product.id" :product="product"  />
    <CartTotals />
  </section>
  <EmptyCart v-else />
</template>

<script>

import TitleWrapper from '../components/TitleWrapper';
import CartColumns from '../components/cart/CartColumns';
import CartItem from '../components/cart/CartItem';
import CartTotals from '../components/cart/CartTotals';
import EmptyCart from '../components/cart/EmptyCart'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Cart',
  components: {
    TitleWrapper,
    CartColumns,
    CartItem,
    CartTotals,
    EmptyCart
  },
  computed: mapGetters(['cartProducts']),
  methods: mapActions(['closeModal']),
  mounted(){
    this.closeModal()
  }
 
}
</script>