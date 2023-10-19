import React, { Component } from 'react';

class Name extends Component {
  render() {
    if (this.props.name === 'Hoang') {
      throw new Error(`Not a primary name`);
    }
    return <div>{this.props.name}</div>;
  }
}

export default Name;
