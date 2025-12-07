import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import recipesData from "./data.json"; // initial static data

import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState(recipesData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
  };

  return (
    <Router>
      {/* Simple top nav for access */}
      <nav className="max-w-6xl mx-auto p-4 flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/add-recipe" className="text-blue-600 hover:underline">Add Recipe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm onAdd={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;