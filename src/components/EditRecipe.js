import React, { Component } from 'react'
import "../styles/EditRecipe.css"

export default class EditRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            imageUrl:this.props.imageUrl,
            ingredients:this.props.ingredients,
            directions:this.props.directions,  
        }
             
    // this.updateTitle = this.updateTitle.bind(this);
    // this.updateImageUrl = this.updateImageUrl.bind(this);
    // this.updateIngredients = this.updateIngredients.bind(this);
    // this.updateDirections = this.updateDirections.bind(this); 
    }
    updateTitle= (e)=> { 
        this.setState({title: e.target.value})
    }
    updateImageUrl=(e)=>{
        this.setState({ imageUrl: e.target.value})
    }
    updateIngredients=(e)=>{
        this.setState({ingredients: e.target.value})
    }
    updateDirections=(e)=>{
        this.setState({directions: e.target.value})
    }
   
    render() {
        console.log(this.state.title);
        console.log(this.props.title);
        return (
            <div className="edit-container">
                <h2>Title</h2>
                <textarea className="title" onChange={this.updateTitle} value={this.state.title} />
               
                <h2>Image</h2>
                <textarea className="image" onChange={this.updateImageUrl} value={this.state.imageUrl}/>

                <h2>ingredients</h2>
                <textarea  className="ingredients"onChange={this.updateIngredients} value={this.state.ingredients}/>

                <h2>directions</h2>
                <textarea className="directions" onChange={this.updateDirections} value={this.state.directions}/>
                
                <div className="button-list">
                <button className="save-button" onClick={()=>{
                    
                    let {title,imageUrl,ingredients,directions} = this.state
                    let recipe= {title,imageUrl,ingredients:[ingredients],directions:[directions]}
                    this.props.editRecipe(this.props.id,recipe)
                    
                    }}>Save</button>
                <button className="cancel-button" onClick={this.props.hideEdit}>Cancel</button>
                </div>

                
            </div>
        )
    }
}



