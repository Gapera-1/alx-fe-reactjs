import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favoritesIds = useRecipeStore(state => state.favorites);
  
  // Find the full recipe objects based on the favorite IDs
  const favorites = favoritesIds.map(id => 
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Filter out any undefined results

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? <p>No favorites yet!</p> : favorites.map(recipe => (
        <div key={recipe.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;