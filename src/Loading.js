import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class extends Component {
  render() {
    return (
      <div width="100%" height="100%" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        Loading... <FontAwesomeIcon icon={faSpinner} pulse />
      </div>
    )
  }
}
