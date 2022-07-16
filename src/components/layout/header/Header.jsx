import { Link, NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="Header">
      <NavLink to="/">
        <h1 className="title-header">
          <i>Welldone</i>
        </h1>
        <h3 className="title-header2">
          <i>Stay cursious..</i>
        </h3>
      </NavLink>

      <nav className="header-nav">
        <NavLink to="/login">
          <button className="button">Login</button>
        </NavLink>
        <NavLink to="/new-articule">
          <button className="button">Create Articule</button>
        </NavLink>
        {/* <NavLink to="/adverts/blog">
          <button className="button-login">create Account</button>
        </NavLink> */}
      </nav>
    </header>
  );
}

export default Header;
