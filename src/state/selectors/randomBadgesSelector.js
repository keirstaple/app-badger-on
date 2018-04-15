import { createSelector } from 'reselect';
import shuffle from 'lodash/shuffle';

import RANDOM_BADGE_COUNT from '../../consts/randomBadges';

const locallyPersistedBadges = state => state.badges.locallyPersistedBadges;
const cloudPersistedBadges = state => state.badges.cloudPersistedBadges;

const stateBadges = locallyPersistedBadges || cloudPersistedBadges;

const randomBadgesSelector = createSelector(
  stateBadges,
  badges => shuffle(badges).slice(0, RANDOM_BADGE_COUNT),
);

export default randomBadgesSelector;
