<template>
  <div class="container">
    <div class="row">
        <div class="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <router-link to="/">
                <button 
                    class="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    @click="this.clearCart"
                >
                    Clear Cart
                </button>
            </router-link>
            <h5>
                <span class="text-title">
                    subtotal:
                </span> <strong>{{ cartPrice.subTotal }}$</strong> 
            </h5>
            <h5>
                <span class="text-title">
                    tax:
                </span> <strong>{{ cartPrice.tax }}$</strong> 
            </h5>
            <h5>
                <span class="text-title">
                    total:
                </span> <strong>{{ cartPrice.total }}$</strong> 
            </h5>
        </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CartTotals',
  computed: mapGetters(['cartPrice']),
  methods: mapActions(['clearCart'])
}
</script>