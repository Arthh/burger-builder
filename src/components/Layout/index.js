import React from 'react';

import './styles.css';

import Toolbar from '../Navigation/Toolbar';
import Auxiliary from '../../hoc/Auxiliary';
import SideDrawer from '../Navigation/SideDrawer';

const layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className={'Content'}>
      {props.children}
    </main>
  </Auxiliary>
  );

export default layout;