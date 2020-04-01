getRecipes = async (req, res)=>{
    const db = req.app.get('db');
    const recipes = await db.getRecipes()
    res.status(200).json(recipes)
}

addRecipe= async(req, res)=>{
    const db = req.app.get('db');
    let {recipe_title,recipe_img,ingredients,directions } = req.body;
    const newRecipe = await db.addRecipe(recipe_title,recipe_img,ingredients,directions);   
    // console.log(newRecipe)
    res.status(200).json(newRecipe);
};

editRecipe= async(req, res)=>{
    const db = req.app.get('db');
    const id = +req.params.id;
    let {recipe_title,recipe_img,ingredients, directions } = req.body;
    const editedRecipe = await db.editRecipe(recipe_title,recipe_img,ingredients,directions,id);
    res.status(200).json(editedRecipe);
}

deleteRecipe= async(req, res)=>{
    const db = req.app.get('db')
    const { id } = req.params;
    const deletedRecipe = await db.deleteRecipe(id);
    res.status(200).json(deletedRecipe);
}

module.exports = {
    getRecipes,
    addRecipe,
    deleteRecipe,
    editRecipe
}
