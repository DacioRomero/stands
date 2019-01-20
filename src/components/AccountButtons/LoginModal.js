import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

import { connect } from 'react-redux';
import { login } from '../../actions'

class LoginModal extends Component {
  state = {
    open: false,
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      username: '',
      password: '',
    });
  };

  handleLogin = () => {
    this.props.login(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <Button
          variant="text"
          color="inherit"
          onClick={this.handleOpen}
        >
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To login enter your username and password.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              fullWidth

              id="username"
              name="username"
              label="Username"

              value={this.state.username}
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              fullWidth

              id="password"
              name="password"
              label="Password"
              type="password"

              value={this.state.password}
              onChange={this.handleChange}
              onKeyPress={(e) => {
                if(e.key === 'Enter') {
                  this.handleLogin();
                }
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleLogin}>Login</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(
  null,
  mapDispatchToProps
)(LoginModal);
