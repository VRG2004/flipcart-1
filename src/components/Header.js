import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png" alt="Logo" className="logo" />
      </div>

      {/* Search Bar */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for products, brands, and more"
        />
        <button className="header__searchButton">
          Search
        </button>
      </div>

      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menuItem">
            <FontAwesomeIcon icon={faStore} className="icon" />
            <span>Become a Seller</span>
          </li>
          <li className="header__menuItem">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            <span>Cart</span>
          </li>
          <li className="header__menuItem">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>Login</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

