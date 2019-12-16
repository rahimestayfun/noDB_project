import React, { Component } from 'react'
import "../styles/RecipeContent.css"

export default class RecipeContent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        console.log(this.props.ingredients);
        return (
            <div className="content">
                <h2 className="content-title">{this.props.title}</h2>

                <h3>Ingredients</h3>
                <div className="content-ingredients">{this.props.ingredients.map((el, i) => {
                    return <li key={i}> {el}</li>
                })}</div>

                <h3>Directions</h3>
                <div className="content-directions">{this.props.directions.map((el, i) => {
                    return <li key={i}> {el}</li>
                })}</div>
                <button className="content-button"
                    onClick={this.props.hide}> Hide</button>

            </div>
        )
    }
}

