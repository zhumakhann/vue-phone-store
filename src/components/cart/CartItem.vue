<template>
    <div class="row my-2 text-capitalize text-center">
      <div class="col-10 mx-auto col-lg-2">
          <img 
              src={img} 
              alt="Product img" 
          /> 
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">
              product:
          </span>{title}
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">
              price:
          </span>{price}
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <div class="col-10 mx-auto col-lg-2 my-2 my-lg-0">
              <div class="d-flex justify-content-center">
                  
                      <span 
                          class="btn btn-black mx-1"
                      >
                          -
                      </span>
                      <span class="btn btn-black mx-1">
                          {count}
                      </span>
                      <span 
                          class="btn btn-black mx-1"
                      >
                          +
                      </span>
                  
              </div>
          </div>
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <div class="cart-icon">
              <i class="fas fa-trash"></i>
          </div>
      </div>
      <div class="col-10 mx-auto col-lg-2">
          <strong>item total: </strong>
          ${total}
      </div>
      <div class="col-10 mx-auto col-lg-2">
          
      </div>
      <div class="col-10 mx-auto col-lg-2">
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem'
}
</script>