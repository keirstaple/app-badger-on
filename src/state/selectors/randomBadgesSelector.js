import { createSelector } from 'reselect';
import shuffle from 'lodash/shuffle';

const stateBadges = state => state.firebaseDataStore.data.badges;

const randomBadgesSelector = createSelector(
  stateBadges,
  badges => shuffle(badges).slice(0, 3),
);

export default randomBadgesSelector;
