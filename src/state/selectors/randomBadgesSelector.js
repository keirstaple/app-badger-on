import { createSelector } from 'reselect';
import shuffle from 'lodash/shuffle';

import stateBadges from './stateBadges';

import { RANDOM_BADGE_COUNT } from '../../consts/randomBadges';

const randomBadgesSelector = createSelector(
  stateBadges,
  badges => shuffle(badges).slice(0, RANDOM_BADGE_COUNT),
);

export default randomBadgesSelector;
