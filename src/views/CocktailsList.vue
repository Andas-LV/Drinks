<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCocktailStore } from '@/stores/store';

interface Cocktail {
  idDrink: string;
  strDrink: string;
}

interface ApiResponse {
  drinks: Cocktail[] | null;
}

const store = useCocktailStore();
const cocktails = ref<Cocktail[]>([]);

onMounted(async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  const data: ApiResponse = await response.json();

  if (data.drinks) {
    store.setCocktails(data.drinks);
    cocktails.value = data.drinks;
  }
});
</script>

<template>
  <div>
    <h1>Cocktail List</h1>
    <ul>
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
        <router-link :to="{ name: 'CocktailDetails', params: { id: cocktail.idDrink }}">
          {{ cocktail.strDrink }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
