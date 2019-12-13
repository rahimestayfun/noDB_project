import React, { Component } from 'react'
import axios from 'axios';
import "../styles/AddRecipe.css"

export default class AddRecipe extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            imageUrl:'',
            ingredients:[],
            directions:[],
        } 
        this.updateTitle = this.updateTitle.bind(this);
        this.updateImageUrl = this.updateImageUrl.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
        this.updateDirections = this.updateDirections.bind(this);
        this.handleClick= this.handleClick.bind(this)
    }
    updateTitle(e){
        this.setState({title: e.target.value})
    }
    updateImageUrl(e){
        this.setState({ imageUrl: e.target.value})
    }
    updateIngredients(e){
        this.setState({ingredients: e.target.value})
    }
    updateDirections(e){
        this.setState({directions: e.target.value})
    }
    
    //we will send this post request via body, it will ask for the second parameter,but I don't want to send additional info.

    handleClick(){
        // let body={title, imgUrl,ingredients, directions}
        let {title, imageUrl, ingredients, directions} = this.state;
        let body = { title, imageUrl, ingredients: [ingredients], directions: [directions]};
        axios.post("/api/recipes", body).then(response => {
            this.props.updateRecipes(response.data);
            });
        }


    render() {
        // console.log(this.state.directions)
        return (
            <div className="add_recipe_container">
                <div className="add_recipe_input">
                <input onChange={this.updateTitle} placeholder="recipe title"/>
                <input onChange={this.updateImageUrl} placeholder="image URL"/>
                <input onChange={this.updateIngredients} placeholder="ingredients"/>
                <input onChange={this.updateDirections} placeholder="directions"/>
                <button className="add_recipe_button" onClick={this.handleClick}>Start By Adding</button>
                </div>
                
            </div>
        )
    }
}

