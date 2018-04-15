import React from 'react';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import NavBar from './navBar';
import RandomBadges from './randomBadges';

const Home = () => (
  <div className="home-container">
    <NavBar />
    <RandomBadges />
  </div>
);

const dataPath = 'badges';
const enhance = compose(firebaseConnect([dataPath]));

export const baseComponent = Home;

export default enhance(Home);
