import { expect } from 'chai';
import uniq from 'lodash/uniq';

import { RANDOM_BADGE_COUNT } from '../../../src/consts/randomBadges';
import randomBadgesSelector from '../../../src/state/selectors/randomBadgesSelector';
import mockState from '../../mocks/mockState';

describe('randomBadgesSelector', () => {
  const randomBadges = randomBadgesSelector(mockState);
  it(`should return ${RANDOM_BADGE_COUNT} badges`, () => {
    expect(randomBadges.length).to.equal(RANDOM_BADGE_COUNT);
  });
  it(`should return ${RANDOM_BADGE_COUNT} badges that are not equal to one another`, () => {
    const uniqueCheck = uniq(randomBadges);
    expect(uniqueCheck.length).to.equal(RANDOM_BADGE_COUNT);
  });
});
