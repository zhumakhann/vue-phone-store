<template>
    <div class="row my-2 text-capitalize text-center">
      <div class="col-10 mx-auto col-lg-2">
          <img 
            class="cart-img"
            :src="product.img"
            alt="Product img" 
          /> 
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">
              product:
          </span>{{ product.title }}
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">
              price:
          </span>{{ product.price }}$
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <div class="col-10 mx-auto col-lg-2 my-2 my-lg-0">
              <div class="d-flex justify-content-center">
                  
                      <span 
                          class="btn btn-black mx-1"
                          @click="cartProductQuantityHandler({product, type: 'minus'})"
                      >
                          -
                      </span>
                      <span class="btn btn-black mx-1">
                          {{ product.count }}
                      </span>
                      <span 
                          class="btn btn-black mx-1"
                          @click="cartProductQuantityHandler({product, type: 'plus'})"
                      >
                          +
                      </span>
                  
              </div>
          </div>
      </div>
      <div class="col-10 mx-auto col-lg-2" @click="removeCartItem(product.id)">
          <div class="cart-icon">
              <i class="fas fa-trash"></i>
          </div>
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <strong>item total: </strong>
          {{ product.total }}
      </div>
      <div class="col-10 mx-auto col-lg-2">
          
      </div>
      <div class="col-10 mx-auto col-lg-2">
          
      </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'CartItem',
  props: ['product'],
   methods: {
    ...mapActions(['cartProductQuantityHandler', 'removeCartItem'])
  }
}
</script>

<style lang="scss">
    .cart-img{
        width: 5rem;
        height: 5rem;
    }
</style>