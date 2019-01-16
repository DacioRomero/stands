import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

// import Ajv from 'ajv';
// import JSONSchemaBridge from 'uniforms/JSONSchemaBridge';
// import AutoForm from 'uniforms/AutoForm';

export default class extends Component {
  state = {
    open: false,
    schemaBridge: null
  };

  // async componentDidMount() {
  //   const response = await fetch('https://gitcdn.xyz/repo/DacioRomero/Stands-Schemas/master/2019.json');
  //   const schema = await response.json();

  //   const validator = new Ajv({ allErrors: true, useDefaults: true }).compile(schema);

  //   const schemaValidator = model => {
  //       validator(model);

  //       if (validator.errors && validator.errors.length) {
  //           throw {details: validator.errors};
  //       }
  //   };

  //   const schemaBridge = new JSONSchemaBridge(schema, schemaValidator);

  //   this.setState({ schemaBridge });
  // }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { open/* , schemaBridge: schema */ } = this.state;
    const { buttonColor } = this.props;

    return (
      <div>
        <Button
          variant="contained"
          color={buttonColor}
          onClick={this.handleOpen}
        >
          New
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>New Report</DialogTitle>
          <DialogContentText>Submit a new report</DialogContentText>
          {/* {
            schema !== null ?
            <AutoForm schema={schema} /> :
            <div />
          } */}
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
