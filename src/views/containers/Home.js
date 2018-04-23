import React from 'react';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import NavBar from './navBar';
import RandomBadges from './randomBadges';
import BadgeSearch from './badgeSearch';

import DATA_PATHS from '../../consts/firebase';

const Home = () => (
  <div className="home-container">
    <NavBar />
    <BadgeSearch />
    <RandomBadges />
  </div>
);

const enhance = compose(firebaseConnect([DATA_PATHS.BADGES]));

export const baseComponent = Home;

export default enhance(Home);
