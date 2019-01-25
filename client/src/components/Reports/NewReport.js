import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Tooltip from '@material-ui/core/Tooltip';

import { connect } from 'react-redux';

class NewReport extends Component {
  state = { open: false };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Tooltip title={!this.props.loggedIn ? "You must be logged in." : "" }>
          <span>
            <Button
              variant="contained"
              color="inherit"
              onClick={this.handleOpen}
              disabled={!this.props.loggedIn}
            >
              New
            </Button>
          </span>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>New Report</DialogTitle>
          <DialogContentText>Submit a new report</DialogContentText>
          <DialogActions>
            <Button>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.account !== null
});

export default connect(mapStateToProps)(NewReport);
