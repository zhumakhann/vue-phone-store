<template>
  <button class="button-wrapper" v-bind:class="{'btn-cart': type === 'cart'}" 
    
    @click="clickHandler"
  >
    <slot />
    <!-- hello -->
  </button>
</template>

<script>
export default {
  name: 'ButtonWrapper',
  props: ['type', 'click'],
  methods: {
    clickHandler(){
      console.log('click');
      this.$emit('click', '')
    } 
  }
}
</script>

<style lang="scss" scoped>
  .button-wrapper{
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all .5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
    &.btn-cart{
      border-color: var(--mainYellow);
      color: var(--mainYellow);
      &:hover{
        color: var(--lightBlue);
        background: var(--mainYellow);
      }
    }
  }
</style>