import React from 'react';

import NavBar from './navBar';
import RandomBadges from './randomBadges';
import BadgeSearch from './badgeSearch';

const Home = () => (
  <div className="home-container">
    <NavBar />
    <BadgeSearch />
    <RandomBadges />
  </div>
);

export default Home;
