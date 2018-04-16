import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import repeat from 'lodash/fp/repeat';

import RandomBadgeDescription from '../../../../src/views/components/randomBadge/randomBadgeDescription';
import { BADGE_TILE_DESCRIPTION_MAX } from '../../../../src/consts/randomBadges';

const smallDescription = 'rando';
const bigDescription = repeat(51)(smallDescription);

describe('<RandomBadgeDescription />', () => {
  it('should render the full description for descriptions under 250 characters', () => {
    const wrapper = shallow(<RandomBadgeDescription description={smallDescription} />);
    expect(wrapper.find('.badge-tile-description').text().length).to.equal(smallDescription.length);
  });
  it('should render a maximum of 250 characters for large descriptions and the ellipsis', () => {
    const wrapper = shallow(<RandomBadgeDescription description={bigDescription} />);
    const ellipsisLength = 3;
    expect(wrapper.find('.badge-tile-description').text().length).to.equal((BADGE_TILE_DESCRIPTION_MAX + ellipsisLength));
    expect(wrapper.find('.read-more').length).to.equal(1);
  });
});
