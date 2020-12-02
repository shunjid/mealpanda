<template>
  <main class="container cart">
    <p v-if="cart.length == 0" class="emptyCart">
      <b>Your Cart is Empty</b>
      <br />
      <img
        class="emptycart"
        src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/v2/assets/notfound.svg"
      />
    </p>
    <div v-else>
      <h2>Cart</h2>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Add Ons</th>
            <th>Amount</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>
              {{ item.item }}
              <span v-if="item.options">- {{ item.options }}</span>
            </td>
            <td>
              <span v-for="addon in item.addOns" :key="addon" class="comma">{{
                addon
              }}</span>
            </td>
            <td>{{ item.count }}</td>
            <td>{{ item.combinedPrice }}</td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td class="total">Total Price: ${{ totalPrice.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalPrice"])
  }
};
</script>

<style lang="scss" scoped>
.emptyCart {
  text-align: center;
  line-height: 100px;
}
</style>
