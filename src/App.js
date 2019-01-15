import React, { Component } from 'react';

import Header from './Header';
import Login from './Login';
import Reports from './Reports';

import 'bulma/css/bulma.min.css';
import 'bulmaswatch/darkly/bulmaswatch.min.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      standsUrl: 'http://localhost:3000',
      loginKey: null,
      loginModalActive: false
    }

    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  closeLoginModal() {
    this.setState({ loginModalActive: false });
  }

  openLoginModal() {
    this.setState({ loginModalActive: true });
  }

  async loginHandler(username, password) {
    const response = await fetch(`${this.state.standsUrl}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.status !== 200) {
      return false;
    }

    this.setState({ loginKey: await response.text() });

    return true;
  }

  logoutHandler() {
    this.setState({ loginKey: null });
  }

  render() {
    return (
      <div className="App">
        <Header logoutHandler={this.logoutHandler} openLoginModal={this.openLoginModal} loggedIn={this.state.loginKey !== null} />
        <Reports />
        <Login handler={this.loginHandler} close={this.closeLoginModal} active={this.state.loginModalActive} />
      </div>
    );
  }
}

export default App;
