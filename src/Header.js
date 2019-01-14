import React, { Component } from 'react';
import { Navbar, NavbarItem, NavbarStart, NavbarBrand, NavbarMenu, NavbarBurger, NavbarEnd, Button } from 'bloomer';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { menuActive: false };
    this.menuHandler = this.menuHandler.bind(this);
  }

  menuHandler() {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }));
  }

  render() {
    var Account;

    if(!this.props.loggedIn) {
      Account = (
        <div className="buttons">
          <Button isColor="primary">
            <strong>Sign up</strong>
          </Button>
          <Button isColor="light" onClick={this.props.openLoginModal}>
            Log in
          </Button>
        </div>
      );
    } else {
      Account = (
        <Button isColor="primary" onClick={this.props.logoutHandler}>
          <strong>Logout</strong>
        </Button>
      );
    }

    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem href="/">
            The Stands
          </NavbarItem>
          <NavbarBurger onClick={this.menuHandler} isActive={this.state.menuActive} />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.menuActive}>
            <NavbarStart>
              <NavbarItem href="#">
                Teams
              </NavbarItem>
              <NavbarItem href="#">
                Events
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                { Account }
              </NavbarItem>
            </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}
