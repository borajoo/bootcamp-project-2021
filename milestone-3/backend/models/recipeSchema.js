const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    recipeName: String,
    recipeDescription: String,
    recipeImage: String,
    ingredientList: [String],
    instructionList: [String]
  },
  { collection: "Recipes" }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
