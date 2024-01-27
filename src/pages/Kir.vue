<script setup lang="ts">
import {useCocktailStore} from "@/stores/store";

useCocktailStore().fetchCocktails('kir')
</script>

<template>
<h1>Kir</h1>
  <div >
    <h2>{{ useCocktailStore().cocktail }}</h2>
  </div>
</template>

<style scoped>

</style>