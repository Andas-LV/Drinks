<template>
  <div>
    <CocktailInfo :cocktail="useCocktailStore().cocktail[0]" />
  </div>
</template>

<script setup lang="ts">
import { useCocktailStore } from "@/stores/store";
import CocktailInfo from "../components/CocktailInfo.vue";

useCocktailStore().fetchCocktails('mojito');
</script>

