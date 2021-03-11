import React from 'react'

import './Portfolio.css'

import PortfolioCard from './PortfolioCard'

export default function Portfolio({ portfolioItems }) {

    const displayPortfolioitem = () => {
        return portfolioItems.map(portfolioItem => {
            return  <PortfolioCard portfolioItem={ portfolioItem } key={ portfolioItem.id } />
    })
}

    return (
        <div className="portfolio-container">
            <h1 className="page-title">Portfolio</h1>
            { displayPortfolioitem()}
        </div>
    )
}
