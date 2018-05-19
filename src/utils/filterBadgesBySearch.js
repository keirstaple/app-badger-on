import Fuse from 'fuse.js';

const filteredBadgesBySearchTerm = (badges, query) => (badges ? new Fuse(badges, {
  keys: ['name', 'description', 'tags'],
}).search(query) : []);

export default filteredBadgesBySearchTerm;
