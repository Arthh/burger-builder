import React from 'react';

import './styles.css';
import NavigationItem from './NavigationItem'

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>Burguer Builder</NavigationItem>
    <NavigationItem link="/" >Checkout</NavigationItem>
  </ul>
)

export default navigationItems;

