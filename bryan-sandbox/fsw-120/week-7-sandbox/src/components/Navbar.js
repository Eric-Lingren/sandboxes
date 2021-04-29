import React from 'react';
import { Link } from 'react-router-dom'
import { withUser } from '../providers/UserProvider'

const Navbar = ({ handleLogout, isLoggedIn }) => {

  return (
    <div>
      <ul>
        <Link to='/'> Home </Link>
        { isLoggedIn && <Link to='/tweets'> Tweets </Link> }
        <Link to='/login'> Login </Link>
        <button onClick={handleLogout}> Logout </button>
      </ul>
    </div>
  );
}

export default withUser(Navbar)
