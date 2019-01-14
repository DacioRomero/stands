import React, { Component } from 'react';
import { Modal, ModalBackground, ModalContent, ModalClose, Field, Label, Control, Input } from 'bloomer';

export default class extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    alert('Submit test success!');
  }

  render() {
    return (
      <Modal isActive={this.props.active}>
        <ModalBackground />
        <ModalContent>
          <form onSubmit={this.submitHandler}>
            <Field>
              <Label>
                Username
            </Label>
              <Control>
                <Input type="text" placeholder="DozerBot22" />
              </Control>
            </Field>
            <Field>
              <Label>
                Password
            </Label>
              <Control>
                <Input type="text" placeholder="******" />
              </Control>
            </Field>
          </form>
        </ModalContent>
        <ModalClose onClick={this.props.close}/>
      </Modal>
    );
  }
}
