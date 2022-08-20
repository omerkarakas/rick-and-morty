import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/rm-logo.png';
import * as sc from './Navbar.styles';

const Navbar = () => {
  return (
    <sc.NavbarContainer>
      <div className="nav-center">
        <Link to="/">
          <img
            src={logo}
            alt="rick and morty logo"
            className="logo"
            width="120px"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </sc.NavbarContainer>
  );
};

export default Navbar;
