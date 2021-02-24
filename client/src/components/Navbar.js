import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <header>
      <nav>
        <div className="nav-wrapper  teal darken-3">
          <span href="/" className="brand-logo center">
            Shorten Your URLs
          </span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
            <li>
              <NavLink to="/links">Links</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>
                Exit
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
