import React from 'react'
import RecipeContent from "./RecipeContent"
import EditRecipe from './EditRecipe'
// import '../styles/RecipeCard.css'
// import "../styles/App.css"



export default class RecipeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
  

    render() {
        return (
            <div>
                {this.props.editStatus ?
                
                    <EditRecipe
                        title={this.props.title}
                        ingredients={this.props.ingredients}
                        directions={this.props.directions}
                        imageUrl={this.props.imageUrl}
                        edit={this.props.edit}
                        id={this.props.id}
                        hideEdit={this.props.hideEdit}
                        editRecipe={this.props.editRecipe}

                    />
                    :
                    <div className="recipe_card">

                        {this.props.showContent ?
                            <RecipeContent
                                title={this.props.title}
                                ingredients={this.props.ingredients}
                                directions={this.props.directions}
                                hide={this.props.hide}
                            />
                            :
                            <div>
                                <img className="recipe_image" alt="food" src={this.props.imageUrl} />
                                <h2 className="recipe_title"> {this.props.title} </h2>
                                <div className="button_list">
                                    <button onClick={this.props.show}>Show</button>
                                    <button onClick={this.props.edit}>Edit</button>
                                    <button onClick={() => this.props.deleteRecipe(this.props.id)}>Delete</button>

                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}
