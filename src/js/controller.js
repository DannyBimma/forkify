const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// Get example recipe with an ajax call to api:
// fetch(`https://forkify-api.herokuapp.com/api/get?rId=47746`)
//   .then(response => response.json())
//   .then(recipe => console.log(recipe));

const foodRecipe = async function () {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );

    const recipeData = await response.json();
    // const { img_url: image } = recipeData.recipe;
    // console.log(image);

    // guard clause:
    if (!response.ok) throw new Error(`${recipeData.status}`);

    console.log(response);
    console.log(recipeData);

    // shallow copy recipeData object with better property names:
    let { recipe } = recipeData.data;
    recipe = {
      duration: recipe.cooking_time,
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      source: recipe.source_url,
      title: recipe.title,
    };

    console.log(recipe);
  } catch {
    error => console.error(error);
  }
};

foodRecipe();
