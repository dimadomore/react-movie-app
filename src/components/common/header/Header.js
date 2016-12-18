import React from 'react';
import { Link, IndexLink } from 'react-router';
import './Header.css'

const Header = () => {
  return (
    <div className="top_header">
      <h1 className="logo">Movies<span>&amp;</span>Stuff</h1>
      <nav className="main_nav">
        <IndexLink to="/" className="active">Home</IndexLink>
        <Link to="/movies" className="active">Movies</Link>
        <Link to="/celebs" className="active">Celebs</Link>
        <Link to="/shows" className="active">TV Shows</Link>
      </nav>
    </div>
  )
};

export default Header
