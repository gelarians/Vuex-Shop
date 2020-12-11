<template>
  <tr>
    <th>
      <div class="p-2">
        <img
          src="https://picsum.photos/70"
          width="70"
          class="img-fluid rounded shadow-sm"
        />
        <div class="ml-3 d-inline-block align-middle">
          <h5 class="mb-0">
            <div class="text-dark d-inline-block align-middle">{{cartItem.title }}</div>
          </h5>
          <span class="text-muted font-weight-normal font-italic"
            >Kategorie: Uhren</span
          >
        </div>
      </div>
    </th>
    <td class="align-middle">
      <strong>{{ cartItem.price}}€</strong>
    </td>
    <td class="align-middle">
      <strong>{{cartItem.quantity}}</strong>
      <i 
      @click="addCartItem(cartItem)"
      class="fas fa-plus-circle ml-1 cursor-pointer"></i>
      <i 
      @click="removeCartItem(cartItem)"
      class="fas fa-minus-circle ml-1 cursor-pointer"></i>
    </td>
    <td class="align-middle">
      <i 
      @click="removeCartContainer(cartItem)"
      class="fa fa-trash cursor-pointer"></i>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "CartListItem",
  props: ["cartItem"],
  methods: {
      ...mapActions([
          "addCartItem",
          "removeCartItem",
          "removeCartContainer"
      ]),
  }
  

};
</script>

<style>
</style>