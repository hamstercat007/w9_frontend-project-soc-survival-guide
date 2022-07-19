import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"

function NavBar() {
  return (
    <div>
    <nav className="navBar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/resources">
        <li>Resources</li>
        </Link>
        <Link to="/mindset">
        <li>Mindset</li>
        </Link>
        <Link to="/selfcare">
        <li>Selfcare</li>
        </Link>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar