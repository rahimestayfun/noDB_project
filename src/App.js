import React, { Component } from 'react'
import './reset.css'
import axios from "axios"
import "./styles/RecipeCard.css"

//COMPONENTS
import AddRecipe from "./components/AddRecipe";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard"


class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      showContent: false
    }
  }

  componentDidMount() {
   this.getRecipes()
  }

  getRecipes=()=>{
    axios.get("/api/recipes")
    .then(response=>{
        // console.log(response.data)
        this.setState({recipes: response.data})
    })
    .catch(()=>console.log('Error in sending the response.'))
}
  show = () => {
    console.log("show")
    this.setState({ showContent: true })
  }
  hide = () => {
    this.setState({ showContent: false })
  }

  edit = () => {
    this.setState({ editStatus: true })
  }
 

  deleteRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`).then(response => {
      this.getRecipes();
    })
  }

  editRecipe = (id, body) => {
    axios.put(`/api/recipes/${id}`, body).then(response => {
      this.getRecipes();
    })
    this.setState({ editStatus: false })
  }

  render() {
    let mappedRecipes = this.state.recipes.map((element, index) => {
      return (
        <div key={index}>
          <RecipeCard
            id = {element.recipe_id}
            recipe_title={element.recipe_title}
            ingredients={element.ingredients}
            directions={element.directions}
            recipe_img={element.recipe_img}
            deleteRecipe={this.deleteRecipe}
            editRecipe={this.editRecipe}
            getRecipes={this.getRecipes}
            recipes={this.state.recipes}
          />
        </div>
      )
    })
    return (
      <div >
        <header>
          <Navbar />
        </header>

        <main>
          <AddRecipe getRecipes={this.getRecipes}/>
        
          <div className="recipe_list_container">
            {mappedRecipes}
          </div>

        </main>
        <footer>
          <Footer/>
        </footer>

      </div>
    )
  }
}
export default App


