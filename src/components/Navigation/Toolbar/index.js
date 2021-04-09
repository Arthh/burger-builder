import React from 'react';

import './styles.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

const styled = {
  height: '11%',
}

const toolbar = (props) => (
  <header className="Toolbar">
    <div>MENU</div>
      <Logo style={styled} />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);


export default toolbar;