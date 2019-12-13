//OUR SERVER
const express= require('express')
const app= express();

//CONTROLLER IMPORTS
const {getRecipes, addRecipe,deleteRecipe, editRecipe} = require('./controller');


app.use(express.json());

//ENDPOINTS
app.get("/api/recipes", getRecipes);
app.post("/api/recipes", addRecipe);

app.delete('/api/recipes/:id', deleteRecipe);
app.put("/api/recipes/:id", editRecipe);



app.listen(3333, () => console.log('Listening on 3333'))