import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="link">
        <h1 className="logo">Digital Monsters</h1>
      </Link>
    </header>
  );
};

export default Header;
