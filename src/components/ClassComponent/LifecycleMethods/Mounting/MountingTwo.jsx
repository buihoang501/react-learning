import React, { Component } from 'react';

class MountingTwo extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor B');
    this.state = {
      name: 'Bui Hoang',
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Get Derived State From Props B');
    return null;
  }
  componentDidMount() {
    console.log('Component Did Mount B');
  }
  render() {
    console.log('Render B');
    return <div>Component Two</div>;
  }
}

export default MountingTwo;
