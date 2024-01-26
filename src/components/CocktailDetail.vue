<template>
  <div>
    <h1>Cocktail Details</h1>
    <p>{{ cocktail?.strInstructions }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCocktailStore } from '@/stores/store';


const route = useRoute();
const store = useCocktailStore();
const cocktailId = ref(route.params.id);
const cocktail= ref(null);

onMounted(async () => {
  cocktail.value = await store.cocktails.find((c) => c.idDrink === cocktailId.value);
});
</script>
