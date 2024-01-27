<template>
  <div v-if="cocktail" class="wrapper">
    <h1>{{ cocktail.drinkName }}</h1>
    <p>{{ cocktail.instructions }}</p>
    <p>Category: {{ cocktail.category }}</p>
    <img :src="cocktail.thumb" alt="Drink Thumbnail" loading="lazy" class="img"/>
  </div>
  <div v-else>
    <p>No cocktail information available</p>
  </div>
</template>

<script setup lang="ts">
  defineProps(['cocktail']);
</script>

<style scoped>
.wrapper{
  margin-top: 50px;

  .img {
    max-width: 100%;
    height:500px
  }
}
</style>
