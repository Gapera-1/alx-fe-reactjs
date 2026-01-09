import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Favorites Actions
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Recommendation Logic
  generateRecommendations: () => set(state => {
    // Basic recommendation logic: suggest recipes that are NOT already favorited
    // In a real app, this might use categories or ingredients
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.3
    );
    return { recommendations: recommended };
  }),

  // Previous actions (Search/Add/Set)
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));