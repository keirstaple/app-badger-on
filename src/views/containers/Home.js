import React from 'react';

import RandomBadges from './randomBadges';
import BadgeSearch from './badgeSearch';

const Home = () => (
  <div className="home-container">
    <BadgeSearch />
    <RandomBadges />
  </div>
);

export default Home;
