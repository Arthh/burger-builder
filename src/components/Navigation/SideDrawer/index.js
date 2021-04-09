import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

import './styles.css';

const styled = {
  height: '11%',
  marginBottom: '32px'
}

const sideDrawer = (props) => {

  return(
    <div className="SideDrawer">
        <Logo style={styled}/>
      <nav>
        <NavigationItems />
      </nav>
    </div>  
  );
};

export default sideDrawer;