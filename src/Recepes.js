import React from "react";
import './Receptes.css';

const Recipe = ({title, calories,ingredients, image}) => {
    return (
        <div className="container">
                <div className="recipe">
                    <h1 className="book-title">{title}</h1>
                    <p className="calories">{calories}</p>
                    <ol className="recipe-ingredients" >{ingredients.map(ingredient  =>(
                        <li>{ingredient.text}</li>
                    ))}</ol>
                    <img className="recipe-image" src={image} alt="" />
                </div>
                
            
        </div>
    )
};

export default Recipe; 