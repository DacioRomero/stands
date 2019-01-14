import React, { Component } from 'react';
import { Section } from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class extends Component {
  render() {
    return (
      <Section style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%"
      }}>
        Loading... <FontAwesomeIcon icon={faSpinner} pulse />
      </Section>
    )
  }
}
