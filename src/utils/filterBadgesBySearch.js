import Fuse from 'fuse.js';

const filterBadgesBySearchTerm = (badges, query) => {
  if (badges) {
    return new Fuse(badges, {
      shouldSort: true,
      includeScore: true,
      includeMatches: true,
      threshold: 0.3,
      location: 0,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        'value.name',
        'value.description',
        'value.tags',
        'value.challenges',
        'value.creator',
        'value.index',
      ],
    }).search(query);
  }
  return [];
};

export default filterBadgesBySearchTerm;
