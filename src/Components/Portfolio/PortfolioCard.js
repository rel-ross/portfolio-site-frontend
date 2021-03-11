import React from 'react'

import './PortfolioCard.css'

export default function PortfolioCard({ portfolioItem }) {
    return (
        <div className="portfolio-card">
            <div class="portfolio-image">    
                <a className="image-link" href={ portfolioItem.siteURL }>
                    <img className="portfolio-card-image" src={portfolioItem.image}></img>
                </a>
            </div>
            <h3>{ portfolioItem.title }</h3>
            <p> 
                <a className="text-link" href={ portfolioItem.githubURL }>Github</a> |&nbsp; 
                { portfolioItem.languages } </p>
        </div>
    )
}
