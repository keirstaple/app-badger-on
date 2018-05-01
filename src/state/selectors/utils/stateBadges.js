// TODO: return cloudPersistedBadges first, and then if those are undefined after a while then
// return locallyPersistedBadges with a last updated time stamp and a user notification.
const locallyPersistedBadges = state => state.badges.locallyPersistedBadges;
const cloudPersistedBadges = state => state.badges.cloudPersistedBadges;

const stateBadges = cloudPersistedBadges || locallyPersistedBadges;

export default stateBadges;
