import React from 'react';

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    //ToDoMS - Log this error for debugging
  }

  render() {

    if (this.state.hasError) {
      return <h1>Error occured.</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
