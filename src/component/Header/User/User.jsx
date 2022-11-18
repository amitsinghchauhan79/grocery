import React from "react";
import PropTypes from 'prop-types';
import "./User.css"
function User (props) {
    const  {active}= props;
    return (
    <form className={`user-form ${active ? 'active' : ''}`}>
      <h3>login now</h3>
      <div className="box">
        <input type="email" placeholder="your email" />
      </div>
      <div className="box">
        <input type="password" placeholder="your password" />
      </div>
      <p>
        forgot your password
        {' '}
        <a href="/">click here</a>
      </p>
      <p>
        don&apos;t have an account
        {' '}
        <a href="/">create now</a>
      </p>
      <button type="submit" className="btn">
        login now
      </button>
    </form>
    );
}
User.propTypes ={
    active: PropTypes.bool,

}.isRequired
export default User