<template>
  <nav class="navbar navbar-expand-sm navbar-dark px-sm-5">
    <router-link to="/">
      <img class="navbar-brand" src="../assets/logo.svg" alt=""/>
    </router-link> 
    <ul class="navbar-nav align-items-center">
        <li class="nav-item ml-5">
          <router-link class="nav-link" to="/">
                products
          </router-link> 
        </li>
    </ul>
    <router-link to="/cart" class="ml-auto">
        <ButtonWrapper>
            <span class='mr-2'>
                <i class="fa fa-cart-plus" />
            </span>
            My cart    
        </ButtonWrapper>
    </router-link>
  </nav>
</template>

<script>
import ButtonWrapper from './ButtonWrapper'

export default {
  name: 'Header',
  components: {ButtonWrapper},
}
</script>

<style>
  .navbar{
    background: var(--mainBlue);
  }
  .nav-link{
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
  }
</style>