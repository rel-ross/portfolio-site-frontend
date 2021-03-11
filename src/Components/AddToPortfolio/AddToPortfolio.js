import React from 'react'
import { useReducer } from 'react'

import './AddToPortfolio.css'

const initialState = {
    image: '',
    githubURL: '',
    siteURL: '',
    languages: '',
    title: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

export default function AddToPortfolio({ addPortfolioItem }) {
        const [state, dispatch] = useReducer(reducer, initialState)


    const handleChange = (event) => {
       dispatch({ field: event.target.name, value: event.target.value })
    }

    const { image, githubURL, siteURL, languages, title } = state

    const handleSubmit = (event) => {
        event.preventDefault()
        addPortfolioItem(state)
        fetch('http://localhost:3000/portfolio_items', {
            method: "POST",
            headers: {
                "Content-type": "application/json" 
            },
            body: JSON.stringify({
                portfolioItem: { title, image, githubURL, siteURL, languages }
            })
        })
        console.log(JSON.stringify({
            title, image, githubURL, siteURL, languages
        }))
    }
    
    return (
        <div>
        <h1 className="page-title">Add To Portfolio</h1>
            <div className="portfolio-item-container">
                <form className="portfolio-item-form" onSubmit={ handleSubmit }>
                    <label>Title:</label>
                    <input name="title" value={ title } onChange={ handleChange }></input>
                    
                    <label>Image:</label>
                    <input name="image" value={ image } onChange={ handleChange }></input>

                    <label>Github URL:</label>
                    <input name="githubURL" value={ githubURL } onChange={ handleChange }></input>

                    <label>Deployed Site URL:</label>
                    <input name="siteURL" value={ siteURL } onChange={ handleChange }></input>

                    <label>Languages:</label>
                    <input name="languages" value={ languages } onChange={ handleChange }></input>

                    <button type="submit" onSubmit={ handleSubmit }>Submit</button>
                </form>
            </div>
        </div>
    )
}
