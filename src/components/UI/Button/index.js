import React from 'react';

import './styles.css';

const button = (props) => (
  <button
    className={['Button', props.btnType].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);

export default button;