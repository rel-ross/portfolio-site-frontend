import './App.css';

import { useState, useEffect } from 'react'

import NavSection from './Containers/NavSection/NavSection'
import PhotoSection from './Containers/PhotoSection/PhotoSection'
import BodySection from './Containers/BodySection/BodySection'


function App() {

  const [portfolioItems, setPortfolioItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/portfolio_items')
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setPortfolioItems(result)
      })
  }, [])

  const addPortfolioItem = (item) => {
    setPortfolioItems(
        [...portfolioItems, item]
    )
  }

  return (
    <div className="App">
      <PhotoSection />
      <NavSection />
      <BodySection portfolioItems = { portfolioItems } addPortfolioItem={ addPortfolioItem }/>
     
    </div>
  );
}

export default App;
