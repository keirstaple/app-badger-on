import Fuse from 'fuse.js';

import queriedBadgeListKeys from '../consts/queriedBadgeListKeys';

import getLongestStringLength from './getLongestStringLength';

const filterBadgesBySearchTerm = (badges, query) => {
  const longestStringLength = getLongestStringLength(badges);
  if (badges) {
    return new Fuse(badges, {
      shouldSort: true,
      includeScore: true,
      includeMatches: true,
      threshold: 0.2,
      location: 0,
      distance: longestStringLength,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: queriedBadgeListKeys,
    }).search(query);
  }
  return [];
};

export default filterBadgesBySearchTerm;
