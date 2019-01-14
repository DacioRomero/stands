import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import Loading from './Loading';

export default class extends Component {
  state = { schema: null }
  async componentDidMount() {
    const response = await fetch('https://gitcdn.xyz/repo/DacioRomero/Stands-Schemas/master/2019.json');
    const schema = await response.json();
    console.log(schema);
    this.setState({ schema });
  }
  render() {
    const { schema } = this.state;

    if (schema === null) {
      return <Loading />
    }

    return (
      <Form schema={ schema } />
    )
  }
}
