import React from 'react'

import './Portfolio.css'

import PortfolioCard from './PortfolioCard'

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1 className="page-title">Portfolio</h1>
            <PortfolioCard />

        </div>
    )
}
