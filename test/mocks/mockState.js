import map from 'lodash/fp/map';
import { badges } from './mockBadges.json';

const orderedBadges = map(badge => ({
  key: `${badge.pushId}`, value: badge,
}))(badges);

const mockState = {
  firebaseDataStore: {
    data: {
      badges,
    },
  },
  badges: {
    locallyPersistedBadges: orderedBadges,
    cloudPersistedBadges: orderedBadges,
  },
};

export default mockState;
