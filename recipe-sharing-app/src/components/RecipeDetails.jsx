import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));
  
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipeId);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;