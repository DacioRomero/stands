import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import 'typeface-roboto';

import Header from './Header';
import Reports from './Reports';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Reports />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
