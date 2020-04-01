import React, { Component } from 'react'
import axios from 'axios';
import "../styles/AddRecipe.css"

export default class AddRecipe extends Component {
    constructor() {
        super();

        this.state = {
            recipe_title: '',
            recipe_img: '',
            ingredients: [],
            directions: [],
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateImageUrl = this.updateImageUrl.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
        this.updateDirections = this.updateDirections.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    updateTitle(e) {
        this.setState({ recipe_title: e.target.value })
    }
    updateImageUrl(e) {
        this.setState({ recipe_img: e.target.value })
    }
    updateIngredients(e) {
        this.setState({ ingredients: e.target.value })
    }
    updateDirections(e) {
        this.setState({ directions: e.target.value})
    }

    //we will send this post request via body, it will ask for the second parameter,but I don't want to send additional info.

    handleClick() {
        let { recipe_title, recipe_img, ingredients, directions } = this.state;
        let body = {recipe_title, recipe_img, ingredients, directions};
        axios.post("/api/recipes", body).then(response => {
            this.props.getRecipes();
        });
        this.setState({
            recipe_title: '',
            recipe_img: '',
            ingredients:'',
            directions: ''
        })
    }

 
    render() {
        // console.log(this.state.directions)
        return (
            <div className="add_recipe_container">
                <div className="add_recipe_input">
                    <textarea onChange={this.updateTitle} value={this.state.recipe_title} placeholder="recipe title" />
                    <textarea onChange={this.updateImageUrl} value={this.state.recipe_img} placeholder="image URL" />
                    <textarea onChange={this.updateIngredients}value= {this.state.ingredients} placeholder="ingredients" />
                    <textarea onChange={this.updateDirections} value={this.state.directions} placeholder="directions" />
                </div>
                <button className="add_recipe_button" onClick={this.handleClick}>Start By Adding</button>
                

            </div>
        )
    }
}