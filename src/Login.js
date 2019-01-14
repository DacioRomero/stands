import React, { Component } from 'react';
import { Modal, ModalBackground, ModalContent, ModalClose, Field, Label, Control, Input } from 'bloomer';

export default class extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if(this.props.handler(username, password) !== false) {
      e.target.reset();
      this.props.close()
    }
  }

  render() {
    return (
      <Modal isActive={this.props.active}>
        <ModalBackground />
        <ModalContent>
          <form onSubmit={this.submitHandler}>
            <Field>
              <Label>Username</Label>
              <Control>
                <Input name="username" type="text" placeholder="DozerBot22" />
              </Control>
            </Field>
            <Field>
              <Label>Password</Label>
              <Control>
                <Input name="password" type="password" placeholder="******" />
              </Control>
            </Field>
            <Field>
              <Control>
                <Input type="submit" />
              </Control>
            </Field>
          </form>
        </ModalContent>
        <ModalClose onClick={this.props.close} />
      </Modal>
    );
  }
}
