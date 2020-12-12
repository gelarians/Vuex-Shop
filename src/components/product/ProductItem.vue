<template>
  <div 
  v-if="productItem"
  class="container mt-5">
      <div class="row">
          <div class="col-12">
              <div class="card">
                  <div class="row no-gutters">
                      <div class="col-4">
                          <img src="https://picsum.photos/350" alt="" class="card-img">
                      </div>
                      <div class="col-8">
                          <div class="card-body">
                              <h5 class="card-title mb-4 align-middle">
                                  {{productItem.title}}
                                  <button
                                    class="float-right btn bg-vue2 px-4"
                                    @click="addToCart(productItem)"
                                  >
                                  <i class="fas fa-cart-plus mr-3"></i> {{productItem.price}}
                                  </button>
                                  <button
                                    class="float-right btn btn-light"
                                    @click="$router.go(-1)"
                                  >
                                    <i class="fas fa-arrow-left"></i>Zurück
                                  </button>
                              </h5>
                              <p class="card-text">
                                  {{productItem.description}}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: ['id'],
    computed: {
        productItem () {
            console.log(this.$store.getters.productItemById(Number(this.id)))
           return this.$store.getters.productItemById(Number(this.id))
        }
    },
    methods: {
        addToCart(item){
            this.$store.dispatch("addCartItem", item)
                .then(() => {
                    this.$router.push("/cart")
                })
        
        }
    }


}
</script>

<style>

</style>