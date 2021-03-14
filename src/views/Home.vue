<template>
  <div class="py-5">
      <div class="container">
          <TitleWrapper name="our" title="products" />
              <Filters />
          <Modal />
          <div class="row">
            <Product v-for="product in (filteredProducts.length > 0 ? filteredProducts : allProducts)" v-bind:product="product" v-bind:key="product.id" />
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import ButtonWrapper from '../components/ButtonWrapper'

import Product from '@/components/Product';
import TitleWrapper from '@/components/TitleWrapper'
import { mapActions, mapGetters } from 'vuex'
import Modal from '../components/Modal'
import Filters from '../components/Filters'

export default {
  name: 'Home',
  components: {
    Product, TitleWrapper, Modal, Filters
  },
  computed: mapGetters(['allProducts', 'filteredProducts']),
  methods: mapActions(['fetchProducts']),
  mounted(){
      console.log(this.allProducts);
    // this.fetchProducts('../data.js')
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
