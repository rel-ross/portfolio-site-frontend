import React from 'react'

import './PortfolioCard.css'

export default function PortfolioCard() {
    return (
        <div className="portfolio-card">
            <img className="portfolio-card-image" src={'http://arielleross.com/assets/portfolio/KateDowdyYoga.jpg'}></img>
            <h3>Kate Dowdy Yoga</h3>
            <p> 
                <a href="www.katedowdyyoga.com">www.katedowdyyoga.com</a> | 
                Github | 
                HTML, CSS, Javascript </p>
        </div>
    )
}
