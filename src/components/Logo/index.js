import React from 'react';

import './styles.css'
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
  <div className="Logo" style={props.style}>
    <img src={burgerLogo} alt="logo"/>
  </div>
);

export default logo;