import Fuse from 'fuse.js';

const filterBadgesBySearchTerm = (badges, query) => {
  if (badges) {
    return new Fuse(badges, {
      keys: ['value.name', 'value.description', 'value.tags'],
    }).search(query);
  }
  return [];
};

export default filterBadgesBySearchTerm;
