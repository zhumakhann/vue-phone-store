<template>
  <div class="modal">
    <div class="container">
        <div class="row">
            <div id="modal"
                class="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
                <h5>Item added to the cart</h5>
                <img src={img} class="img-fluid" alt="Product" />
                <h5>{title}</h5>
                <h5 class="text-muted">
                    price: ${price}
                </h5>
                <router-link to='/'>
                    <ButtonContainer
                    >
                        Store
                    </ButtonContainer>
                </router-link>
                <router-link to='/cart'>
                    <ButtonContainer cart
                    >
                        go to cart
                    </ButtonContainer>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
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
    #modal{
        background: var(--mainWhite)
    }
  }
</style>