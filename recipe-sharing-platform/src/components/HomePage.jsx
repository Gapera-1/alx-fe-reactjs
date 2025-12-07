import { Link } from "react-router-dom";
import recipes from "../data";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border rounded-lg overflow-hidden hover:shadow-lg transition transform hover:scale-105"
        >
          {/* Recipe Image */}
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />

          {/* Recipe Content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>

            {/* View Recipe Button */}
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