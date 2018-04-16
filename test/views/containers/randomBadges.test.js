import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { baseComponent as RandomBadges } from '../../../src/views/containers/randomBadges';
import RandomBadgeTile from '../../../src/views/components/randomBadge/randomBadgeTile';
import randomBadgesSelector from '../../../src/state/selectors/randomBadgesSelector';
import RANDOM_BADGE_COUNT from '../../../src/consts/randomBadges';

import mockState from '../../mocks/mockState';

describe('RandomBadges', () => {
  const defaultProps = {
    randomBadges: randomBadgesSelector(mockState),
  };
  const wrapper = props => shallow(<RandomBadges {...props} />);
  it('should render', () => {
    expect(wrapper(defaultProps)).to.have.length(1);
    expect(wrapper(defaultProps).find('.random-badges-container').hasClass('random-badges-container')).to.equal(true);
  });
  it(`should render ${RANDOM_BADGE_COUNT} random badge tiles`, () => {
    expect(wrapper(defaultProps).find(RandomBadgeTile).length).to.equal(RANDOM_BADGE_COUNT);
  });
});
