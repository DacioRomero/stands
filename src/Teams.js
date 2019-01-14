import React, { Component } from 'react';
import { Card, CardHeader, CardHeaderTitle, CardContent, Content, Columns, Column } from 'bloomer';
import Loading from './Loading';

const TBA_KEY = process.env.REACT_APP_TBA_KEY;

const TeamCard = (props) => (
  <Card style={{
    height: "100%",
    width: "100%"
  }}>
    <CardHeader>
      <CardHeaderTitle>
        {props.nickname}
      </CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Content>
        {props.motto}
      </Content>
    </CardContent>
  </Card>
);

export default class extends Component {
  state = { teams: null };

  async componentDidMount() {
    const response = await fetch('https://www.thebluealliance.com/api/v3/teams/0', {
      headers: {
        'X-TBA-Auth-Key': TBA_KEY,
      },
    });

    console.log(response);

    const teams = await response.json();

    this.setState({ teams });
  }

  render() {
    const { teams } = this.state;

    if(teams === null) {
      return (
        <Loading />
      )
    }

    return (
      <Columns isMultiline={true}>
        {
          teams.map(team => (
            <Column key={team.key} isSize="1/3" style={ { display: "flex"} }>
              <TeamCard {...team} />
            </Column>
          ))
        }
      </Columns>
    )
  }
}
