import React from "react";
import RecipeContent from "./RecipeContent";
import EditRecipe from "./EditRecipe";
import "../styles/RecipeCard.css";

export default class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecipeOpen: false,
      canEditRecipe: false
    };
  }
  toggleRecipeContent = () => {
    this.setState({ isRecipeOpen: !this.state.isRecipeOpen });
  };
  toggleEditRecipe = () => {
    this.setState({ canEditRecipe: !this.state.canEditRecipe });
  };

  render() {
    // console.log(this.state.isRecipeOpen);
    return (
      <div>
        {this.state.canEditRecipe ? (
          <EditRecipe
            recipe_title={this.props.recipe_title}
            ingredients={this.props.ingredients}
            directions={this.props.directions}
            recipe_img={this.props.recipe_img}
            id={this.props.id}
            editRecipe={this.props.editRecipe}
            toggleEditRecipe={this.toggleEditRecipe}
          />
        ) : (
          <div className="recipe_card">
            {this.state.isRecipeOpen ? (
              <RecipeContent
                recipe_title={this.props.recipe_title}
                ingredients={this.props.ingredients}
                directions={this.props.directions}
                toggleRecipeContent={this.toggleRecipeContent}
              />
            ) : (
              <div className="basic_recipe_card">
                <img
                  className="recipe_image"
                  alt="food"
                  src={this.props.recipe_img}
                />
                <h2 className="recipe_title"> {this.props.recipe_title} </h2>
                <div className="button_list">
                  <button onClick={this.toggleRecipeContent}>Show</button>
                  <button onClick={this.toggleEditRecipe}>Edit</button>
                  <button
                    onClick={() => this.props.deleteRecipe(this.props.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
