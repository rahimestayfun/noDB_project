let recipes = [{
    title: "CAKE",
    ingredients: ["chicken", "broth", "vegetables"],
    directions: ["cook chicken", "boil broth", 'add chicken and vegetables to broth'],
    imageUrl: "https://sugargeekshow.com/wp-content/uploads/2019/04/banana-split-cake-featured1.jpg",
    id: 0
}
];
let id = 1;

function getRecipes(req, res) {
    res.status(200).json(recipes)
}

function addRecipe(req, res) {
    const { title, imageUrl,ingredients,directions} = req.body;
    // console.log(req.body);
    recipes.push({
        title,
        imageUrl,
        ingredients,
        directions,
        id
    });
    id++;
    // console.log(recipes)
    res.status(200).json(recipes);
}

function deleteRecipe(req, res) {
    const { id } = req.params;
    let recipeIndex = recipes.findIndex(element => element.id == id);
    recipes.splice(recipeIndex, 1);
    res.status(200).json(recipes);

}


function editRecipe(req, res) {
    console.log(req.body)
    let { id } = req.params
    let { title, ingredients, directions, imageUrl } = req.body
    console.log(title)

    let recipeIndex = recipes.findIndex(element => element.id == +id);
    let recipe = recipes[recipeIndex];
 
    recipes[recipeIndex] = {
        title: title || recipe.title,
        ingredients: ingredients || recipe.ingredients,
        directions: directions || recipe.directions,
        imageUrl: imageUrl || recipe.imageUrl
    }
    res.status(200).json(recipes)

}

module.exports = {
    getRecipes,
    addRecipe,
    deleteRecipe,
    editRecipe
}
