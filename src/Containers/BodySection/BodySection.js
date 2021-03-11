import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import './BodySection.css'

import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Portfolio from '../../Components/Portfolio/Portfolio'
import AddToPortfolio from '../../Components/AddToPortfolio/AddToPortfolio'

export default function BodySection({ portfolioItems, addPortfolioItem }) {
    return (
        <div className="body-section">
            <Switch>
                <Route exact path="/" render= { (routerProps) =>  <About /> } />
                <Route exact path="/Portfolio" render= { (routerProps) =>  <Portfolio portfolioItems={ portfolioItems }/> } />
                <Route exact path="/Contact" render= { (routerProps) =>  <Contact /> } />
                <Route exact path="/AddToPortfolio" render= { (routerProps) =>  <AddToPortfolio addPortfolioItem={ addPortfolioItem }/> } />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}
