import React from 'react'
import { Link } from 'react-router-dom'
//HomePage, MoviePage, ActorPage, FaqPage, RulesPage
const NavBar = () => {
  return (
    <div>

      <nav >
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li >
            <Link to="/moviepage">Movie</Link>
          </li>
          <li >
            <Link to="/actorpage">Actor</Link>
          </li>
          <li >
            <Link to="/faqpage">FAQ</Link>
          </li>
          <li >
            <Link to="/rulespage">Rules</Link>
          </li>
             </ul>
      </nav>
    </div>
  )
}

export default NavBar