import { create } from 'zustand';

// Use a named export to match your component imports
export const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  setRecipes: (recipes) => set({ recipes })
}));