<template>
  <div class="row d-flex justify-content-between align-items-center">
    <div class="btn-group">
      <button class="btn-filter btn btn-primary m-1" @click="filterHandler">All</button>
      <button class="btn-filter btn btn-primary m-1" @click="filterHandler" v-for="(filter, i) in allFilters" v-bind:key="i">{{ filter }}</button>
    </div>
    <label>
      Sort by: 
      <select @change="priceSortHandler">
        <option value="" disabled selected>Default</option>
        <option value="low">Low to high</option>
        <option value="high">High to low</option>
      </select>
    </label>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Filter',
  props: '',
  computed: mapGetters(['allFilters', 'allProducts', 'priceSort']),
  methods: {
    ...mapActions(['getFilters', 'getActiveFilters', 'filterProducts', 'filterByPrice', 'init', 'updatePriceSort']),
    filterHandler(e){
      const btnFilters = document.querySelectorAll('.btn-filter');
      for(let i = 0; i < btnFilters.length; i++){
        btnFilters[i].classList.remove('btn-success');
      }
      e.target.classList.add('btn-success')
      console.log(e.target);
      this.filterProducts(e.target.textContent)
    }, 
    priceSortHandler(e){
      console.log(e.target.value);
      console.log('change');
      this.updatePriceSort(e.target.value)
      this.filterByPrice(e.target.value)
    }
  },
  mounted(){
    // console.log();
    this.getFilters(this.allProducts);
    this.init()
  }
}
</script>


<style>

</style>