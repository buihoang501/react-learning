import React from 'react';

class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bui Hoang',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'Bui Hoang' });
    }, 2000);
  }

  render() {
    console.log('Render Component');
    return <div>Pure Component</div>;
  }
}

export default PureComponent;
