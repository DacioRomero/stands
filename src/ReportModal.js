import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import { Modal, ModalBackground, ModalContent, ModalClose } from 'bloomer';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schema: null,
      show: false
    }

    this.showSchema = this.showSchema.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  async showSchema(year) {
    const response = await fetch(`https://gitcdn.xyz/repo/DacioRomero/Stands-Schemas/master/${year}.json`);
    const schema = await response.json();

    this.setState({ schema, show: true });
  }

  hideModal() {
    this.setState({ show: false })
  }

  render() {
    const { schema } = this.state;

    if (schema == null) {
      return null;
    }

    return (
      <Modal isActive={this.state.show}>
        <ModalBackground />
        <ModalContent>
          <Form className="form" schema={ schema } />
        </ModalContent>
        <ModalClose onClick={this.hideModal} />
      </Modal>
    )
  }
}
