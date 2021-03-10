import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import './NavSection.css'

import Nav from '../../Components/Nav/Nav'


export default function NavSection() {
    return (
        <div className="nav-section">
            <Link className="about" to="/About"><Nav title="About"/></Link>
            <Link className="portfolio" to="/Portfolio"><Nav title="Portfolio"/></Link>
            <Link className="contact" to="/Contact"><Nav title="Contact" /></Link>
        </div>
    )
}
