//GET DATA FROM LOCAL STORAGE
const recipeJSON = localStorage.getItem("recipe");
const recipe = JSON.parse(recipeJSON);
const hashID = location.hash.substring(1);

//REMOVE INGREDIENT
const removeIngredient = (i) => {
  const index = recipe[hashID].ingredient.findIndex((inp) => {
    return inp.id === i.id;
  });

  if (index > -1) {
    recipe[hashID].ingredient.splice(index, 1);
  }

  //RE RENDER APGE
  renderRecipe(recipe[hashID]);
};

//TOGGLE CHECKBOX
const toggleIngredient = (id) => {
  const ing = recipe[hashID].ingredient.find((ing) => {
    return ing.id === id;
  });

  if (ing !== undefined) {
    ing.isPresent = !ing.isPresent;
  }
};

//ADD INGREDIENTS TO DS WHEN BUTTON IS CLICKED
const addIngredientElement = (element) => {
  let count = 0;
  element.forEach((i) => {
    const ingEl = document.createElement("div");
    ingEl.classList.add("ingredient-box");
    const checkedbox = document.createElement("input");
    const text = document.createElement("span");
    const removeButton = document.createElement("button");
    removeButton.classList.add("ingredient-text");

    //ADD CHECKBOX
    checkedbox.setAttribute("type", "checkbox");
    ingEl.appendChild(checkedbox);
    checkedbox.addEventListener("change", () => {
      toggleIngredient(i.id);

      //COUNT NO. OF INGREDIENTS
      if (i.isPresent) {
        count++;
      } else {
        count--;
      }
    });

    //ADD INGREDIENT TEXT
    text.textContent = i.name;
    ingEl.appendChild(text);
    
    //ADD REMOVE BUTTON
    removeButton.textContent = "remove";
    ingEl.appendChild(removeButton);

    document.querySelector(".ingredients-content").appendChild(ingEl);

    //EACH REMOVE BUTTON EVENT HANDLER
    removeButton.addEventListener("click", (e) => {
      removeIngredient(i);
    });

    //CHECKBOX CHECKED AND UPDATE IN INGREDIENT isPresent
    if (checkedbox.checked) {
      i.isPresent = true;
    } else {
      i.isPresent = false;
    }
  });
};

//ADD STEPS DIRECTION
const addDirections = (direction) => {
  direction.forEach((dir) => {

    const dirEl = document.createElement("div");
    const steps = document.createElement("span");
    const text = document.createElement("span");
    steps.innerHTML = '<i class="ion-checkmark-circled icon-small icon">';
    dirEl.appendChild(steps);
    text.textContent = dir.step;
    dirEl.appendChild(text);
    document.querySelector(".directions").appendChild(dirEl);
  });
};

//RENDER RECIPE
const renderRecipe = (data) => {
  document.querySelector("#recipe-name").textContent = data.emoji + data.title;
  document.querySelector("#steps").textContent = data.about;
  document.querySelector(".nutritions").textContent = data.nutritions;

  document.querySelector(
    "#ing-count"
  ).textContent = `You required ${recipe[hashID].ingredient.length} ingredient for recipe`;
  document.querySelector(".ingredients-content").innerHTML = "";
  addIngredientElement(data.ingredient);
  //console.log(data.directions);
};

//ADD BUTTON EVENT HANDLER
document.querySelector("#btn-ingredient").addEventListener("click", () => {
  let usering = document.querySelector("#add-ingredient").value;
  //CHECK IF INPUT IS NOT EMPTY
  if(usering.trim().length !=0){
    recipe[hashID].ingredient.push({
      name: usering,
      isPresent: true,
      id: uuidv4(),
    });
  }

  renderRecipe(recipe[hashID]);
  document.querySelector("#add-ingredient").value = "";
});

//ONLOAD ADD INGREDIENT DATA
addDirections(recipe[hashID].directions);
renderRecipe(recipe[hashID]);
