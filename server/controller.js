let recipes = [
    {
        id: 0,
        title: "Brownie",
        ingredients: ["1/2 cup all purpose flour", "1 cup sugar", "1/4 tsp salt", "1/3 cup cocoa powder", "1 tsp vanilla extract","1tps honey"],
        directions: ["Preheat oven to 375°", "Grease and flour an 8-inch square pan.", "In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. Spread batter into prepared pan.","Bake in preheated oven for 25 to 30 minutes. Do not overcook.","To Make Frosting: Combine 3 tablespoons softened butter, 3 tablespoons cocoa, honey, 1 teaspoon vanilla extract, and 1 cup confectioners' sugar. Stir until smooth. Frost brownies while they are still warm."],
        imageUrl: "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/tcq_ep13_kirsten_s-chocolate-brownies-edited.jpg?itok=WoOaD1PQ",
        
    }
];
let id = 1;

function getRecipes(req, res) {
    res.status(200).json(recipes)
}

function addRecipe(req, res) {
    let { title, imageUrl, ingredients, directions } = req.body;
    // console.log(req.body);
    recipes.push({
        id,
        title,
        imageUrl,
        ingredients,
        directions,       
    });
    // recipes.push(req.body);
    id++;
    console.log(recipes)
    res.status(200).json(recipes);
};

function deleteRecipe(req, res) {
    const { id } = req.params;
    let recipeIndex = recipes.findIndex(element => element.id == id);
    recipes.splice(recipeIndex, 1);
    res.status(200).json(recipes);
}


function editRecipe(req, res) {
    // console.log(req.body)
    let { id } = req.params;
    let { title, ingredients, directions, imageUrl } = req.body;
    // console.log(title)

    let recipeIndex = recipes.findIndex(element => element.id == +id);
    let recipe = recipes[recipeIndex];

    recipes[recipeIndex] = {
        id: id|| recipe.id,
        title: title || recipe.title,
        ingredients: ingredients || recipe.ingredients,
        directions: directions || recipe.directions,
        imageUrl: imageUrl || recipe.imageUrl
    }
    res.status(200).json(recipes)
    console.log(recipes)
}

module.exports = {
    getRecipes,
    addRecipe,
    deleteRecipe,
    editRecipe
}
