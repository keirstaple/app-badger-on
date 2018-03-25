import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import NavBar from './navBar';

const Home = () => (
  <div className="App">
    <NavBar />
  </div>
);

const dataPath = 'badges';

const enhance = compose(
  firebaseConnect([dataPath]),
  connect(({ firebaseDataStore }) => ({
    badges: firebaseDataStore.data[dataPath],
  })),
);

export default enhance(Home);
