import React, { PureComponent } from 'react';
import NavBar from '../containers/navBar';
import getDisplayName from '../../utils/getDisplayName';

const withNavBar = WrappedComponent => class extends PureComponent {
  static displayName = `withNavBar(${getDisplayName(WrappedComponent)})`;

  render() {
    return (
      <div>
        <NavBar />
        <WrappedComponent {...this.props} />
      </div>
    );
  }
};

export default withNavBar;
