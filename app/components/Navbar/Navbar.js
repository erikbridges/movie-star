import React, { Fragment } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar__logo">Logo Goes Here</div>
        <div className="navbar__search">
          <input type="text" placeholder="Search Movies" />
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </span>
        </div>
      </nav>
      <nav className="side-nav">
        <div className="side-nav__wrap">
          <a>New Releases</a>
          <a>Trending</a>
          <a>Coming Soon</a>
          <a>Favorites</a>
          <a>Watch Later</a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
