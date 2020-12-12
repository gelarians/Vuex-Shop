<template>
  <div class="container">
    <h3 class="text-uppercase">
      Warenkorb
      <span v-if="cartItems.length > 0">
        ({{ cartQuantity }})
        <i 
        @click="removeAllCartItems" 
        class="fas fa-trash cursor-pointer"></i>
      </span>
    </h3>

    <table class="table table-borderless">
      <thead>
        <tr>
          <th>
            <div class="p-2 px-3 text-uppercase">Produkt</div>
          </th>
          <th>
            <div class="py-2 text-uppercase">Preis</div>
          </th>
          <th>
            <div class="py-2 text-uppercase">Anzahl</div>
          </th>
          <th>
            <div class="py-2 px-3"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <CartListItem
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          :cartItem="cartItem"
        />
      </tbody>
    </table>

    <hr />

    <div class="bg-light rounded-pill px-4 pt-3 text-uppercase font-weight-bold">
      Bestellübersicht
    </div>
    <div class="p-4">
      <ul class="list-unstyled mb-4">
        <li class="d-flex justify-content-between pb-3">
          <strong class="text-muted">Zwischensumme </strong
          ><strong>{{ cartTotalWithoutTaxes }}€</strong>
        </li>
        <li class="d-flex justify-content-between py-3">
          <strong class="text-muted">MwSt.</strong><strong>{{ cartTaxes }}€</strong>
        </li>
        <li class="d-flex justify-content-between py-3">
          <strong class="text-muted">Versandkosten</strong
          ><strong>{{ cartShipping }}€</strong>
        </li>
        <li class="d-flex justify-content-between py-3">
          <strong class="text-muted">Gesamtkosten</strong>
          <h5 class="font-weight-bold">{{ cartTotalWithShipping }}€</h5>
        </li>
      </ul>
      <button class="btn bg-vue rounded-pill py-2 btn-block">Zur Kasse</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./CardListItem.vue";

export default {
  name: "CardList",
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
    /*
      ########OLD########
            cartItems(){
          return this.$store.getters.cartItems
      },
      cartTotal(){
          return this.$store.getters.cartTotal
      },
      */

    cartTotalWithoutTaxes() {
      return parseFloat(this.cartTotal - this.cartTaxes).toFixed(2);
    },
    cartTaxes() {
      return (this.cartTotal * 0.19).toFixed(2);
    },
    cartShipping() {
      return 9.99;
    },
    cartTotalWithShipping() {
      console.log();
      return parseFloat(this.cartShipping + this.cartTotal).toFixed(2);
    },
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
  },
};
</script>

<style scoped></style>
