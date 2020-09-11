//GET RECIPE OBJECT DATA
import { recipedata } from "./data.js";

//DOMSTRINGS
let DOMStrings = {
  addrecipe: "#addrecipe",
  foodcontent: ".food-content",
  btnremoveallrecipe: "#btn-remove-all-recipe",
  searchtext: "#search-text",
};

//FIRST ON LOAD RECIPE HTML
const getHTMLData = (recipe) => {
  recipe.forEach((res) => {
    let resEl = document.createElement("div");
    let ing_count = getCompletedIngredients(res);
    resEl.innerHTML = `<a href="/recipe.html#${res.ID}"><div class="demo"><h3>${res.title}</h3><p>${res.emoji} you have ${res.ingredient.length} ingredients for ${res.title} recipe</p></div></a>`;
    document.querySelector(DOMStrings.foodcontent).appendChild(resEl);
  });
};

//SET RECIPE LOCAL STORAGE
const userRecipe = JSON.stringify(recipedata);
localStorage.setItem("recipe", userRecipe);

//GET RECIPE FROM LOCAL STORAGE
const recipeJSON = localStorage.getItem("recipe");
const recipe = JSON.parse(recipeJSON);

//FILETR FEATURE FORM SEARCH
const filters = {
  searchText: "",
};

//COMPLETED INGREDIENTS
const getCompletedIngredients = (res) => {
  let count = 0;
  let ing = res.ingredient;
  ing.forEach((i) => {
    if (i.isPresent) {
      count++;
    }
  });

  return count;
};

//DISPLAY RECIPE
const renderRecipe = (recipe, filters) => {
  const filterRecipe = recipe.filter((res) => {
    return res.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector(DOMStrings.foodcontent).innerHTML = "";
  getHTMLData(filterRecipe);
};

//SEARCH & FILTER FEATURE
document.querySelector(DOMStrings.searchtext).addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderRecipe(recipe, filters);
});

//INITIAL DATA LOAD
getHTMLData(recipe);
