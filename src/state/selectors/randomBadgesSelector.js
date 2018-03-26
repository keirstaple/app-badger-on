import { createSelector } from 'reselect';
import shuffle from 'lodash/shuffle';

import RANDOM_BADGE_COUNT from '../../consts/randomBadges';

const stateBadges = state => state.firebaseDataStore.data.badges;

const randomBadgesSelector = createSelector(
  stateBadges,
  badges => shuffle(badges).slice(0, RANDOM_BADGE_COUNT),
);

export default randomBadgesSelector;
