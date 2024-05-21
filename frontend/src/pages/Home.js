import React from 'react'
import logo from '../logo.svg';

function Home() {
  return (
    
    <header className="home-header">
    <img src={logo} className="home-logo" alt="logo" />
    <p>
      Tomate <code>src/App.js</code> and patate to reload.
    </p>
    <a
      className="home-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
  
  )
}

export default Home