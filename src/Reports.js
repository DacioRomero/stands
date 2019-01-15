import React, { Component } from 'react';
import { Table, Container, Title, Columns, Column, Button } from 'bloomer';
import Loading from './Loading';
import ReportModal from './ReportModal';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { reports: null };
    this.openModal = this.openModal.bind(this);
    this.reportModal = React.createRef();
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/reports');
    this.setState({ reports: await response.json() });
  }

  openModal() {
    this.reportModal.current.showSchema(2019);
  }

  render() {
    if (this.state.reports == null) {
      return <Loading />;
    }

    return (
      <Container>
        <Columns isMultiline={true} isMobile={true}>
          <Column isSize={6}>
            <Title>Reports</Title>
          </Column>
          <Column isSize={6}>
            <Button isColor="dark" className="is-pulled-right" onClick={this.openModal}>New Report</Button>
          </Column>
          <Column isSize={12}>
            <Table isStriped={true} width="100%">
              <thead>
                <tr>
                  <th>Team</th>
                  <td>Year</td>
                  <td>Event</td>
                  <td>Round</td>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.reports.map(report => (
                    <tr key={report._id}>
                      <th>{report.info.team}</th>
                      <td>{report.info.year}</td>
                      <td>{report.info.event}</td>
                      <td>{report.info.round}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Column>
        </Columns>
        <ReportModal ref={this.reportModal}/>
      </Container>
    );
  }
}
