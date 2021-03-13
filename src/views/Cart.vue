<template>
  <section>
    <TitleWrapper name="your" title="cart" />
    <CartColumns />
    <CartItem/>
    <CartTotals />
  </section>
</template>

<script>

import TitleWrapper from '../components/TitleWrapper';
import CartColumns from '../components/cart/CartColumns';
import CartItem from '../components/cart/CartItem';
import CartTotals from '../components/cart/CartTotals';

export default {
  name: 'Cart',
  components: {
    TitleWrapper,
    CartColumns,
    CartItem,
    CartTotals,
  }
}
</script>