import React, { Component } from 'react';

import 'typeface-roboto';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Reports from './components/Reports';

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
