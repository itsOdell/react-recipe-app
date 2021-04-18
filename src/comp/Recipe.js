import React from 'react'

function Recipe(props) {
    return (
        <div className="box">
            <h1>{props.title}</h1>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Recipe
