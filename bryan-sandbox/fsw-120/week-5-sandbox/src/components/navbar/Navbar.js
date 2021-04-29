import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () =>  {
  return (
    <div className="App">
      <ul>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/register/:id'> Register </Link>
      </ul>
    </div>
  );
}

export default Navbar;
