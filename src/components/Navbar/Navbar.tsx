import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <img src={logo} />
      <button>
        <img src={hamburger} />
      </button>
    </nav>
  );
};

export default Navbar;
