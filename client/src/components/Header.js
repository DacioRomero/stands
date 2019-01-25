import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'

import AccountButtons from './AccountButtons';

const styles = {
  grow: {
    flexGrow: 1
  }
}

class Header extends Component {
  state = {
    auth: false
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            The Stands
          </Typography>
          <AccountButtons />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
