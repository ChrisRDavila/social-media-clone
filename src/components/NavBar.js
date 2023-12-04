import React from 'react';
import NavLinks from './NavLinks.js';
import NavSearch from './NavSearch.js';
import NavTweet from './NavTweet.js';

function NavBar() {
  return (
    <React.Fragment>
      <NavLinks />
      <NavSearch />
      <NavTweet />
    </React.Fragment>
  );
}

export default NavBar;