<template>
  <main class="container restaurants">
    <h1>Restaurants</h1>
    <app-restaurant-info />
  </main>
</template>

<script>
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";

export default {
  components: {
    AppRestaurantInfo
  }
};
</script>

<style lang="scss" scoped></style>
