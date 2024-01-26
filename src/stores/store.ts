// stores/store.ts
import { defineStore } from 'pinia';

interface Drink {
    idDrink: string;
    strDrink: string;
    // Add other properties as needed
}

export const useCocktailStore = defineStore('cocktail', {
    state: () => ({
        cocktails: [] as Drink[],
    }),

    actions: {
        setCocktails(cocktails: Drink[]) {
            this.cocktails = cocktails;
        },
    },
});
