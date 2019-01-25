import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

import { connect } from 'react-redux';
import { register } from '../../actions'

class Register extends Component {
  state = {
    open: false,
    error: false,
    username: '',
    password: '',
    confirmPassword: ''
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
      error: false,
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  handleRegister = () => {
    const { username, password, confirmPassword, } = this.state;

    if(password === confirmPassword) {
      this.props.register({ username, password });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Button
          variant="text"
          color="inherit"
          onClick={this.handleOpen}
        >
          Register
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>Register</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To register choose your username and password.
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
              error={this.state.error}
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              fullWidth

              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"

              value={this.state.confirmPassword}
              error={this.state.error}
              onChange={this.handleChange}
              onKeyPress={(e) => {
                if(e.key === 'Enter') {
                  this.handleRegister();
                }
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleRegister}>Register</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = { register };

export default connect(
  null,
  mapDispatchToProps
)(Register);
