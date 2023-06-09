import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="link">
        <h1 className="logo digimon-font">Digital Monsters</h1>
      </Link>
    </header>
  );
};

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
}
