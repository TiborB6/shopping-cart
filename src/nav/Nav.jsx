import React from 'react'
import './nav.scss'
import { Link } from 'react-router-dom'
import GitHub from './github-mark.png'

export default function Nav () {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={GitHub} alt="<GitHub Logo>" />
        <a href="https://github.com/TiborB6/shopping-cart">GitHub</a>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        {/* Cart Component */}
      </div>
    </div>
  )
}
