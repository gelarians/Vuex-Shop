<template>
  <div class="container">
    <h3 class="text-uppercase">Shop</h3>

    <div class="row">
      <div class="col-3"
       v-for="item in productItems" 
       :key="item.id">
       
       <ProductListItem 
       :item="item"
       />

      </div>
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem"

export default {
  name: "ProductList",
  components: {
      ProductListItem
  },
  computed: {
      productItems (){
          return this.$store.getters.getProductItems
      }
  }
};
</script>

<style scoped>

</style>