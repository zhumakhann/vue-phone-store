<template>
  <div class="product-item col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div class="card">
          <div class="img-container p-5">
              <router-link :to="{ path: `product/${product.id}` }">
                  <img :src="product.img" alt="Product img" class="card-img-top" />
              </router-link>
              <button 
                  class="cart-btn" 
                  @click="addCartProduct(product)"
									:disabled="product.inCart"
              >
              
									<p class="text-capitalize mb-0" v-if="product.inCart">
											
										in Cart
									</p>
                <i class="fas fa-cart-plus" v-else />
              </button>
          </div>
          <div class="card-footer d-flex justify-content-between">
              <p class="align-self-center mb-0">
                  {{ product.title }}
              </p>
              <h5 class="text-blue font-italic mb-0">
                  <span class="mr-1">$</span>{{ product.price }}
              </h5>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import ButtonWrapper from '../components/ButtonWrapper'

import { mapActions } from 'vuex'

export default {
  name: 'Product',
  components: {
      // ButtonWrapper
  },
  props: ['product'],
  methods: { 
    ...mapActions(['addCartProduct']),
  },
  mounted(){
      // console.log(['product']);
  }
}
</script>


<style lang="scss">
.product-item{
  .card{
      border-color: transparent;
      transition: all 1s linear;
  }
  .card-footer{
      background: transparent;
      border-top: transparent;
      transition: all 1s linear;

  }
  &:hover{
      .card{
          border: 0.04rem solid rgba(0, 0, 0, .2);
          box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2)
      }
      .card-footer{
          background: rgba(247, 247, 247, 1)
      }
  }
  .img-container{
      position: relative;
      overflow: hidden;
  }
  .card-img-top{
      transition: all .3s linear;
  }
  .img-container:hover{
      .card-img-top{
          transform: scale(1.2)
      }
      .cart-btn{
          transform: translate(0, 0)
      }
  } 
  .cart-btn{
      position: absolute;
      bottom: 0px;
      right: 0px;
      padding: 0.2rem 0.4rem;
      background: var(--lightBlue);
      border: none;
      color: var(--mainWhite);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all .3s linear;
      &:hover{
          color: var(--mainBlue);
          cursor: pointer
      }
  }
}
</style>