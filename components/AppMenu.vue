<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/restaurants">Restaurants</nuxt-link>
      </li>
    </ul>
    <div class="smallnum" v-if="cartCount > 0">{{ cartCount }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style lang="scss" scoped></style>
