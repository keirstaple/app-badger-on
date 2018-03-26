import { expect } from 'chai';
import uniq from 'lodash/uniq';

import randomBadgesSelector from '../../../src/state/selectors/randomBadgesSelector';
import mockState from '../../mocks/mockState';

describe('randomBadgesSelector', () => {
  const randomBadges = randomBadgesSelector(mockState);
  it('should return 3 badges', () => {
    expect(randomBadges.length).to.equal(3);
  });
  it('should return 3 badges that are not equal to one another', () => {
    const uniqueCheck = uniq(randomBadges);
    expect(uniqueCheck.length).to.equal(3);
  });
});
