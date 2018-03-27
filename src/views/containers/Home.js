import React from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import { firebaseConnect } from 'react-redux-firebase';
import NavBar from './navBar';
import RandomBadges from './randomBadges';

const Home = () => (
  <div className="home-container">
    <NavBar />
    <RandomBadges />
  </div>
);

// const dataPath = 'badges';
// const enhance = compose(
//   firebaseConnect([dataPath]),
//   connect(({ firebaseDataStore }) => ({
//     badges: firebaseDataStore.data[dataPath],
//   })),
// );

export const baseComponent = Home;

// export default enhance(Home);
export default Home;
