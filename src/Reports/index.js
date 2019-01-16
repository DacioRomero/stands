import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ReportModal from './Modal';

const standsUrl = process.env.REACT_APP_STANDS_URL

export default class extends Component {
  state = { reports: [] };

  async componentDidMount() {
    const response = await fetch(`${standsUrl}/reports`);
    const reports = await response.json();
    this.setState({ reports });
  }

  render() {
    const rows = this.state.reports.map(report => {
      const id = report._id;
      const { team, year, event, round } = report.info;

      return (
        <TableRow id={id}>
          <TableCell>{team}</TableCell>
          <TableCell align="right">{year}</TableCell>
          <TableCell align="right">{event}</TableCell>
          <TableCell align="right">{round}</TableCell>
        </TableRow>
      )
    })

    return (
      <Grid container p={1}>
        <Grid container xs={12} justify="space-between">
            <Typography variant="h6">Reports</Typography>
            <ReportModal buttonColor="secondary" />
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
      </Grid>
    );
  }
}
