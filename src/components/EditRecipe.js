import React, { Component } from 'react'


export default class EditRecipe extends Component {
    constructor(){
        super()
            this.state={
                title: '',
                imageUrl:'',
                ingredients:[],
                directions:[],     
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateImageUrl = this.updateImageUrl.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
        this.updateDirections = this.updateDirections.bind(this);
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
   
    render() {
        return (
            <div>
                <h2>Title</h2>
                <input onChange={this.updateTitle}/>

                <h2>Image</h2>
                <input onChange={this.updateImageUrl}/>

                <h2>ingredients</h2>
                <input onChange={this.updateIngredients}/>

                <h2>directions</h2>
                <input onChange={this.updateDirections}/>

                <button onClick={()=>{
                    let {title,imageUrl,ingredients,directions} = this.state
                    let recipe= {title,imageUrl,ingredients:[ingredients],directions:[directions]}
                    this.props.editRecipe(this.props.id,recipe)
                    
                    }}>Edit</button>
                <button onClick={this.props.hideEdit}>Hide Edit</button>

                
            </div>
        )
    }
}
