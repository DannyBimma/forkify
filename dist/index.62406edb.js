const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
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
const foodRecipe = async function() {
    try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=47746`);
        const recipeData = await response.json();
        // guard clause:
        if (!response.ok) throw new Error(`${response.statusText}`);
        console.log(response);
        console.log(recipeData);
    } catch  {
        (error)=>console.error(error)
        ;
    }
};
foodRecipe();

//# sourceMappingURL=index.62406edb.js.map
