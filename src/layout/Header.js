import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link': '';

function Header() {
    return (
        <nav className = "indigo darken-4">
        <div className="nav-wrapper container">
          <NavLink href="/" className="brand-logo">Movies SPA</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/"className={setActive}>Home</NavLink>
            </li>  
            <li>
              <NavLink to="/about" className={setActive}>About me</NavLink>
            </li>        
          </ul>
        </div>
      </nav>
    )
}

export { Header };