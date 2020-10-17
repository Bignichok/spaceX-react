import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import "./Header.css";

const Header = ({ rockets, changeRocket }) => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Logo Space X" className="logo" />
      </NavLink>
      <nav className="main-nav nav">
        <ul className="list">
          {rockets.map((rocket) => {
            return (
              <li key={rocket} className="item">
                <NavLink
                  to={`/rocket`}
                  // to={`/rocket/${rocket.replace(" ", "_")}`}
                  className="item-link"
                  activeClassName="active"
                  onClick={() => {
                    changeRocket(rocket);
                  }}
                >
                  {rocket}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="secondary-nav">
        <ul className="list">
          <li className="item">
            <NavLink exact to="/" activeClassName="active" className="item-link">
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/calendar" activeClassName="active" className="item-link">
              Calendar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
