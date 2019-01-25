import React, { Component } from 'react';

import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NewReport from './NewReport';

class Reports extends Component {
  render() {
    const rows = this.props.reports.map(report => {
      const id = report._id;
      const { team, year, event, round } = report.info;

      return (
        <TableRow key={id}>
          <TableCell>{team}</TableCell>
          <TableCell align="right">{year}</TableCell>
          <TableCell align="right">{event}</TableCell>
          <TableCell align="right">{round}</TableCell>
        </TableRow>
      );
    });

    return (
      <React.Fragment>
        <Grid container justify="space-between">
            <Typography variant="h6">Reports</Typography>
            <NewReport buttonColor="secondary" />
        </Grid>
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Event</TableCell>
                <TableCell align="right">Round</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { rows }
            </TableBody>
          </Table>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  reports: state.reports
});

export default connect(
  mapStateToProps,
  null
)(Reports);
