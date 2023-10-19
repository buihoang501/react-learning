import React, { Component } from 'react';
import Name from './Name';
import ErrorBoundary from './ErrorBoundary';

class ErrorHandler extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <ErrorBoundary>
            <Name name='Hoang' />
          </ErrorBoundary>
          <ErrorBoundary>
            <Name name='Bui Hoang' />
          </ErrorBoundary>
          <ErrorBoundary>
            <Name name='Bui Hoang ABC' />
          </ErrorBoundary>
        </div>
      </React.Fragment>
    );
  }
}

export default ErrorHandler;
