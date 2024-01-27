<script setup lang="ts">
import {useCocktailStore} from "@/stores/store";

useCocktailStore().fetchCocktails('a1')
</script>

<template>
  <h1>a1</h1>
  <div >
    <h2>{{ useCocktailStore().cocktail }}</h2>
  </div>
</template>

<style scoped>

</style>