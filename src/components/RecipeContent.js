import React, { Component } from 'react'
// import "../styles/App.js"



export default class RecipeContent extends Component {
    constructor(){
        super();
        this.state={}
    }

    render() {
        console.log(this.props.ingredients);
        return (
            <div>
                <h3>Title:</h3>
                {this.props.title}
                

                <h3>Ingredients:</h3>
                {this.props.ingredients.map((el) => {
                    return <li> {el}</li>
                })}

                <h3>Directions</h3>
                {this.props.directions.map((el) => {
                    return <li> {el}</li>
                })}
                <button 
                onClick={this.props.hide}>Hide</button>

            </div>
        )
        }
}