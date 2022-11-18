import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';
function Search(props) {
    const {active}=props;
  return (
    <>
      <form action="" className={`search-form ${active ? 'active' : ''}`}>
        <label htmlFor="search-box">
          <input type="search" placeholder="search here..." id="search-box" />
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </label>
      </form>
    </>
  )
}

Search.propTypes = {
active: PropTypes.bool,

}.isRequired;

export default Search

