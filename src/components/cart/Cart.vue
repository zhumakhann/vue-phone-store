<template>
  <section>
    <TitleWrapper name="your" title="cart" />
    <CartColumns />
    <CartList/>
    <CartTotals />
  </section>
</template>

<script>

import TitleWrapper from '../TitleWrapper'
import CartColumns from 'CartColumns'
import CartList from 'CartList'
import CartTotals from 'CartTotals'

export default {
  name: 'Cart',
  components: {
    TitleWrapper,
    CartColumns,
    CartList,
    CartTotals,
  }
}
</script>