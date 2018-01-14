import React, { Component } from 'react';

// https://stackoverflow.com/a/42141641
const calculateWindowDimensions = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = { width: undefined, height: undefined };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return <WrappedComponent {...this.props} windowWidth={this.state.width} windowHeight={this.state.height} />;
  }
};

export default calculateWindowDimensions;
