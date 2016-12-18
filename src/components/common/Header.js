import React from 'react';
import { Link, IndexLink } from 'react-router';


const Header = () => {
  return (
    <nav className="navbar">
      <IndexLink to="/" className="active">Home</IndexLink>
      {" | "}
      <Link to="/movies" className="active">Movies</Link>
      {" | "}
      <Link to="/about" className="active">About</Link>
    </nav>
  )
};

export default Header