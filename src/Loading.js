import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class extends Component {
  render() {
    return (
      <span style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%"
      }}>
        Loading... <FontAwesomeIcon icon={faSpinner} pulse />
      </span>
    )
  }
}
