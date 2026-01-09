import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json"; // Make sure path is correct

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from data.json on component mount
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border rounded-lg overflow-hidden hover:shadow-lg transition transform hover:scale-105"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              View Recipe →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
