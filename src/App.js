import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import 'bulmaswatch/darkly/bulmaswatch.min.css'
import Header from './Header';
import Home from './Home';
// import Teams from "./Teams";
// import ReportForm from './ReportForm';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      standsUrl: 'http://localhost:3000/',
      loginKey: null,
      loginModalActive: false
    }

    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
  }

  closeLoginModal() {
    this.setState({ loginModalActive: false });
  }

  openLoginModal() {
    this.setState({ loginModalActive: true });
  }

  async loginHandler(username, password) {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.status !== 200) {
      return false;
    }

    return await response.text();
  }

  render() {
    return (
      <div className="App">
        <Header openLoginModal={this.openLoginModal} loginKey={this.state.loginKey} />
        <Home />
        {/* <ReportForm /> */}
        {/* <Teams /> */}
        <Login close={this.closeLoginModal} active={this.state.loginModalActive} />
      </div>
    );
  }
}

export default App;
