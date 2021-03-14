<template>
  <div class="modal" :class="{active: cartModal.isOpen}">
    <div class="container">
      <div class="row">
        <div id="modal"
            class="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
        >
          <h5>Item added to the cart</h5>
          <img :src="cartModal.img" class="img-fluid" alt="Product" />
          <h5>{{ cartModal.title }}</h5>
          <h5 class="text-muted">
              price: {{ cartModal.price }}$
          </h5>
          <router-link to="/">
            <ButtonWrapper 
              v-on:click="closeModal"
            >
                Store
            </ButtonWrapper>
          </router-link>
          <router-link to='/cart'>
            <ButtonWrapper type="cart"
            >
                go to cart
            </ButtonWrapper>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ButtonWrapper from './ButtonWrapper'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Modal',
  components: {ButtonWrapper},
  computed: mapGetters(['cartModal']),
  methods: {
    ...mapActions(['closeModal']),
    clickHandler(){
      this.closeMoodal()
    }
  }

}
</script>

<style lang="scss">
  .modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    &.active{
      opacity: 1;
      visibility: visible;
    }
    #modal{
        background: var(--mainWhite)
    }
  }
</style>