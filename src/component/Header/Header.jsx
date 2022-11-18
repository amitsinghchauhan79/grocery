import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Search from './SearchForm/Search';
import Shopping from './Cart/Shopping';
import User from './User/User';
import './Header.css';
import Navbar from './Navbar/Navbar';

 function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeShopping, setActiveShopping] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  window.onscroll = () => {
    setActiveUser(false);
    setActiveShopping(false);
    setActiveSearch(false);
    setActiveMenu(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
    setActiveSearch(false);
    setActiveShopping(false);
    setActiveUser(false);
  };
  const handleSearchButton = () => {
    setActiveSearch(!activeSearch);
    setActiveShopping(false);
    setActiveUser(false);
    setActiveMenu(false);
  };
  const handleShoppingCartButton = () => {
    setActiveShopping(!activeShopping);
    setActiveSearch(false);
    setActiveUser(false);
    setActiveMenu(false);
  };
  const handleUserFormButton = () => {
    setActiveUser(!activeUser);
    setActiveSearch(false);
    setActiveShopping(false);
    setActiveMenu(false);
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        <i>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </i>
        My Grocary
      </a>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <button type="button" id="search-btn" onClick={handleSearchButton}>
          <FontAwesomeIcon className="fa-icon" icon={faSearch} />
        </button>
        <button type="button" id="cart-btn" onClick={handleShoppingCartButton}>
          <FontAwesomeIcon className="fa-icon" icon={faShoppingCart} />
        </button>
        <button type="button" id="user-btn" onClick={handleUserFormButton}>
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
        </button>
      </div>
      <Search active={activeSearch} />
      <Shopping active={activeShopping} />
      <User active={activeUser} />
    </header>
  );
}
export default Header