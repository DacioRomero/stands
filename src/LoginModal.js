import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';

export default class extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { buttonColor } = this.props;

    return (
      <div>
        <Button
          variant="text"
          color={buttonColor}
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
              id="username"
              label="Username"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Cancel
            </Button>
            <Button onClick={this.handleClose}>
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
