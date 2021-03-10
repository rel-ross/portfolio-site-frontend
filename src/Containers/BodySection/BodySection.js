import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import './BodySection.css'

import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Portfolio from '../../Components/Portfolio/Portfolio'
import AddToPortfolio from '../../Components/AddToPortfolio'

export default function BodySection() {
    return (
        <div className="body-section">
            <Switch>
                <Route exact path="/" component={ About }/>
                <Route exact path="/Portfolio" component={ Portfolio }/>
                <Route exact path="/Contact" component={ Contact }/>
                <Route exact path="/AddToPortfolio" component={ AddToPortfolio }/>
                <Redirect to='/' />
            </Switch>
        </div>
    )
}
