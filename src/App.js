import React, { Component } from 'react'
import './reset.css'
import axios from "axios"
import "./styles/App.css"

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
      showContent: false,
      editStatus: false,
    }
  }

  componentDidMount() {
    axios.get("/api/recipes").then(response => {
      console.log(response.data)
      this.setState({
        recipes: response.data
      })
    }).catch((error)=>console.log(error))
  }

  updateRecipes = (newRecipes) => {
    this.setState({ recipes: newRecipes })
  }

  show = () => {
    console.log("show")
    this.setState({ showContent: true })
  }
  hide=()=>{
    this.setState({showContent:false})
  }

  edit = () => {
    this.setState({ editStatus: true })
  }
  // hideEdit=()=>{
  //   this.setState({ editStatus: false })
  // }

  deleteRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`).then(response => {
      this.setState({ recipes: response.data })
    })
  }
  
 
  editRecipe = (id,body) => {
     axios.put(`/api/recipes/${id}`, body).then(response => {
      this.setState({recipes : response.data })
    })
    this.setState({editStatus: false})
  }



  


  render() {

    let mappedRecipes = this.state.recipes.map((element, index) => {
      return (
        <div key={index}>
          <RecipeCard
            title={element.title}
            ingredients={element.ingredients}
            directions={element.directions}
            imageUrl={element.imageUrl}
            deleteRecipe={this.deleteRecipe}
            editRecipe={this.editRecipe}
            show={this.show}
            showContent={this.state.showContent}
            id={element.id}
            edit ={this.edit}
            editStatus={this.state.editStatus}
            hide={this.hide}
            recipes= {this.state.recipes}
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
          <AddRecipe
            updateRecipes={this.updateRecipes}
          />
          <div className="recipe_list_container">
            {mappedRecipes}
          </div>

        </main>
        <footer>
          <Footer />
        </footer>

      </div>
    )
  }
}
export default App
