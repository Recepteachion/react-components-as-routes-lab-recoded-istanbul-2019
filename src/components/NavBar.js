import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      {/*{code here}*/}
      <NavLink to="/"
               exact
               >Home</NavLink>
    </div>
  );
};

export default NavBar;
