import React, { Component } from 'react';
import MountingTwo from './MountingTwo';

class MountingOne extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor A');
    this.state = {
      name: 'Bui Hoang',
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Get Derived State From Props A');
    return null;
  }
  componentDidMount() {
    console.log('Component Did Mount A');
  }

  render() {
    console.log('Render A');
    return <MountingTwo />;
  }
}

export default MountingOne;
