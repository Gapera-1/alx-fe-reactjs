import { useState } from "react";

/* Exported validator for tests and reuse */
export const validate = ({ title, ingredients, steps }) => {
  const errors = {};

  const trimmedTitle = title.trim();
  const ingredientList = ingredients
    .split("\n")
    .map((i) => i.trim())
    .filter(Boolean);
  const stepList = steps
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!trimmedTitle) {
    errors.title = "Title is required.";
  }
  if (ingredientList.length < 2) {
    errors.ingredients = "Please provide at least two ingredients.";
  }
  if (stepList.length === 0) {
    errors.steps = "Preparation steps are required.";
  }

  // Return both errors and normalized values for submission
  return {
    errors,
    normalized: {
      title: trimmedTitle,
      ingredients: ingredientList,
      instructions: stepList,
    },
  };
};

export default function AddRecipeForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors: newErrors, normalized } = validate({ title, ingredients, steps });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title: normalized.title,
        summary: "User-submitted recipe",
        image: "https://via.placeholder.com/800x400?text=Recipe+Image",
        ingredients: normalized.ingredients,
        instructions: normalized.instructions,
      };

      onAdd?.(newRecipe);

      setTitle("");
      setIngredients("");
      setSteps("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-2 h-32 focus:ring-2 focus:ring-blue-500"
            placeholder="List ingredients, one per line"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded-lg p-2 h-32 focus:ring-2 focus:ring-blue-500"
            placeholder="Write preparation steps, one per line"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}