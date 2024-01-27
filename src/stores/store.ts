import { defineStore } from 'pinia';
import memoize from 'lodash.memoize';

interface CocktailState {
    cocktail: {
        drinkName: string;
        instructions: string;
        category: string;
        thumb: string;
    }[];
}

export const useCocktailStore = defineStore({
    id: 'cocktails',

    state: (): CocktailState => ({
        cocktail: [],
    }),

    getters: {
        getCocktail: memoize((state: CocktailState) => state.cocktail),
    },

    actions: {
        async fetchCocktails(cocktail: string): Promise<void> {
            // Вместо того, чтобы изменять state.cocktail напрямую,
            // лучше использовать мутацию, чтобы Pinia отслеживала изменения
            const result = await this.fetchCocktailData(cocktail);
            console.log('Fetched data:', result);
            this.setCocktail(result);
        },

        async fetchCocktailData(cocktail: string): Promise<CocktailState['cocktail']> {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
            const data = await response.json();

            const newCocktail: CocktailState['cocktail'] = data.drinks.map((drink: any) => ({
                drinkName : drink.strDrink,
                instructions: drink.strInstructions,
                category: drink.strCategory,
                thumb: drink.strDrinkThumb,
            }));

            return newCocktail;
        },

        setCocktail(newCocktail: CocktailState['cocktail']): void {
            console.log('Setting new cocktail data:', newCocktail);
            this.cocktail = newCocktail;
        },
    },
});
