<template>
  <div class="container py-5">
      <Modal />
      <div class="row">
          <div class="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>{{ detailProduct.title }}</h1>
          </div>
      </div>
      <div class="row">
          <div class="col-10 mx-auto col-md-6 my-3">
              <img :src="detailProduct.img" class="img-fluid" alt="Product" />
          </div>  
          <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2>model: {{ detailProduct.title }}</h2>
              <h4 class="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span class="text-uppercase">{company}</span>
              </h4>
              <h4 class="text-blue">
                  price: <span>$</span>{{ detailProduct.price }}
              </h4>
              <p class="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
              </p>
              <p class="text-muted lead">
                  {{ detailProduct.info }}
              </p>
              <div>
                  <router-link to='/'>
                      <ButtonWrapper>
                          back to products
                      </ButtonWrapper>
                  </router-link>
                  <ButtonWrapper type="cart"
                      @click="addCartProduct(detailProduct)"
                      :disabled="detailProduct.inCart"
                  >
                      <span v-if="detailProduct.inCart">
                        In Cart
                      </span>
                      <span v-else>
                        Add to cart
                      </span>
                  </ButtonWrapper>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import ButtonWrapper from '../components/ButtonWrapper'
import Modal from '../components/Modal'

export default {
  name: 'Product',
  components: {ButtonWrapper, Modal},
  computed: mapGetters(['detailProduct']),
  methods: {
    ...mapActions(['getDetailProduct', 'addCartProduct'])
  },
  mounted(){
    const id = this.$route.params.id
    // console.log();
    return this.getDetailProduct(id)
  }
}
</script>
