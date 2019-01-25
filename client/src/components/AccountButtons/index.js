import React, { Component } from 'react';
import { connect }  from 'react-redux'

import Button from '@material-ui/core/Button';
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'

import { logout } from '../../actions'

class AccountButtons extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <Button
          color="inherit"
          onClick={this.props.logout}
        >
          Logout
        </Button>
      );
    } else {
      return (
        <React.Fragment>
          <RegisterModal />
          <LoginModal />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.account !== null
});

const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountButtons);
