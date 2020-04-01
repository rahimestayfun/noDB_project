import React, { Component } from "react";
import "../styles/RecipeContent.css";

export default class RecipeContent extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const mappedIngredients = this.props.ingredients.split(',').map((el,i)=>{
      return <li key={i}>{el}</li>
    })
    const mappedDirections = this.props.directions.split('.').map((el,i)=>{
      return <li key={i}>{el}</li>
    })

    return (
        <div className="content">
          <h2 className="content-title">{this.props.recipe_title}</h2>
          <h2>Ingredients</h2>
          <ul>
          {mappedIngredients}
          </ul>
          
          <h2>Directions</h2>
          <ol>{mappedDirections}</ol>

          <button
            className="content-button"
            onClick={this.props.toggleRecipeContent}
          >
            Hide
          </button>
        </div>
    );
  }
}
