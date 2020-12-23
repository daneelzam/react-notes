import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <header>
      <Link to="/">Main</Link>
      { isAuth
        ? (
          <>
            <Link to="/logout">Logout</Link>
            <Link to="/dashboard"> Dashboard </Link>
          </>
        )
        : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup"> SignUp </Link>
          </>
        )}
    </header>
  );
}
export default NavBar;
