import React, { Component } from 'react'
import "../styles/EditRecipe.css"

export default class EditRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipe_title: this.props.recipe_title,
            recipe_img:this.props.recipe_img,
            ingredients:this.props.ingredients,
            directions:this.props.directions,  
        }
    }
    updateTitle= (e)=> { 
        this.setState({recipe_title: e.target.value})
    }
    updateImageUrl=(e)=>{
        this.setState({recipe_img: e.target.value})
    }
    updateIngredients=(e)=>{
        this.setState({ingredients: e.target.value})
    }
    updateDirections=(e)=>{
        this.setState({directions: e.target.value})
    }
   
    render() {
        return (
            <div className="edit-container">
                <h2>Title</h2>
                <textarea className="title" onChange={this.updateTitle} value={this.state.recipe_title} />
               
                <h2>Image</h2>
                <textarea className="image" onChange={this.updateImageUrl} value={this.state.recipe_img}/>

                <h2>Ingredients</h2>
                <textarea  className="ingredients"onChange={this.updateIngredients} value={this.state.ingredients}/>

                <h2>Directions</h2>
                <textarea className="directions" onChange={this.updateDirections} value={this.state.directions}/>
                
                <div className="button-list">
                <button className="save-button" onClick={()=>{
                    
                    let {recipe_title,recipe_img,ingredients,directions} = this.state
                    let recipe= {recipe_title,recipe_img,ingredients,directions}
                    this.props.editRecipe(this.props.id,recipe);
                    this.props.toggleEditRecipe();
                    
                    }}>Save</button>
                <button className="cancel-button" onClick={this.props.toggleEditRecipe}>Cancel</button>
                </div>

                
            </div>
        )
    }
}



