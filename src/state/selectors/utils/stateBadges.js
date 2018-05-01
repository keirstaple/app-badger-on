import { badges as mockBadges } from '../../../mocks/mockBadges.json';

// TODO: return cloudPersistedBadges first, and then if those are undefined after a while then
// return locallyPersistedBadges with a last updated time stamp and a user notification.
const locallyPersistedBadges = state => state.badges.locallyPersistedBadges;
const cloudPersistedBadges = state => state.badges.cloudPersistedBadges;

const stateBadges = cloudPersistedBadges || locallyPersistedBadges;

// TODO: change this to @mars package version of an env variable if needed for integration tests
const badges = process.env.MOCK === 'mock' ? mockBadges : stateBadges;

export default badges;
