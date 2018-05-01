import { createSelector } from 'reselect';
import { getLocation } from 'react-router-redux';
import Fuse from 'fuse.js';

import stateBadges from './utils/stateBadges';

import { rootSearch } from '../../consts/routeParams';

const queryTerm = createSelector(
  getLocation,
  location => decodeURIComponent(location.pathname.split(rootSearch)[1]),
);

const filteredBadgesBySearchTerm = createSelector(
  stateBadges,
  queryTerm,
  // TODO: read docs on how this actually should work/what options to send
  (badges, query) => new Fuse(badges).query(query),
);

export default filteredBadgesBySearchTerm;
