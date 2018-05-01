import { createSelector } from 'reselect';
import { getLocation } from 'react-router-redux';

import stateBadges from './utils/stateBadges';

const queryTerm = createSelector(
  getLocation,
  location => location.pathname.split('search/'),
);

const filteredBadgesBySearchTerm = createSelector(
  stateBadges,
  getLocation,
  (badges, location) => 
);

export default filteredBadgesBySearchTerm;
