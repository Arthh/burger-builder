
import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder';

import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;