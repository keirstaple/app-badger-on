import { createSelector } from 'reselect';
import { badges as mockBadges } from '../../mocks/mockBadges.json';

// TODO: return cloudPersistedBadges first, and then if those are undefined after a while then
// return locallyPersistedBadges with a last updated time stamp and a user notification.
const cloudPersistedBadges = state => state.badges.cloudPersistedBadges;
const locallyPersistedBadges = state => state.badges.locallyPersistedBadges;

// TODO: This isn't actually working offline
const stateBadges = createSelector(
  cloudPersistedBadges,
  locallyPersistedBadges,
  (cloud, local) => (cloud || local),
);

// TODO: change this to @mars package version of an env variable if needed for integration tests
const badges = process.env.MOCK_ENV === 'mock' ? mockBadges : stateBadges;

export default badges;
