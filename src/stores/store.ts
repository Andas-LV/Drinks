import { defineStore } from 'pinia'

export const useCocktailStore = defineStore({
    id: 'cocktails',

    state: () => ({
        cocktail: [],
    }),

    getters: {
        getCocktail: (state) => state.cocktail
    },

    actions: {
        async fetchCocktails(cocktail:string) {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
            const data = await response.json()
            this.cocktail = data.drinks[0].strCategory
        }
    }

})
