import React from 'react';

import './styles.css';

import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={'Content'}>
      {props.children}
    </main>
  </Auxiliary>
  );

export default layout;