import React from 'react';
import { Link } from 'react-router';
import 'nav-bar/components/_nav-bar.scss';

const Navbar = () => (<div className="c-nav">
  <input type="checkbox" id="navigation" className="c-nav__hamburger c-nav__hamburger--desktop" />
  <label htmlFor="navigation" className="c-nav__label c-nav__label--box c-nav__label--desktop">
    <span className="c-nav__span c-nav--hidden">menu</span>
  </label>
  <ul className="c-nav__menu">
    <li className="c-nav__menu-item">
      <Link to="home" className="c-nav__link">Home</Link>
    </li>
    <li className="c-nav__menu-item">
      <Link to="spends" className="c-nav__link">Spends</Link>
    </li>
    <li className="c-nav__menu-item">
      <Link to="logout" className="c-nav__link">Logout</Link>
    </li>
  </ul>
</div>);

export default Navbar;
