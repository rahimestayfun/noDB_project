const dotenv = require("dotenv");
dotenv.config();
const massive = require("massive");
const express = require("express");
const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

//CONTROLLER
const {getRecipes,addRecipe,deleteRecipe,editRecipe} = require("./controller");

//DB CONNECTION
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB connected");
});

//ENDPOINTS
app.get("/api/recipes", getRecipes);
app.post("/api/recipes", addRecipe);
app.delete("/api/recipes/:id", deleteRecipe);
app.put("/api/recipes/:id", editRecipe);

//SERVER
app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
