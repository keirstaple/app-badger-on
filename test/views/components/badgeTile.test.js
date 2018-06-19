import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import BadgeTile from '../../../src/views/components/badgeTile';
import getBadgeCategoryDetails from '../../../src/utils/getBadgeCategoryDetails';
import randomBadge from '../../mocks/mockBadge';

describe(`<${BadgeTile.name} />`, () => {
  const wrapper = shallow(<BadgeTile badge={randomBadge} />);
  it('should render', () => {
    expect(wrapper).to.have.length(1);
  });
  it('should style the badge based on category', () => {
    const { categoryName, textColor, backgroundColor } = getBadgeCategoryDetails(randomBadge);
    expect(wrapper.find('.badge-tile').prop('style')).to.deep.equal({ backgroundColor });
    expect(wrapper.find('.badge-tile-name').prop('style')).to.deep.equal({ color: textColor });
    expect(wrapper.find('.badge-tile-subtitle').first().prop('style')).to.deep.equal({ color: textColor });
    expect(wrapper.find('.badge-tile-category').prop('style')).to.deep.equal({ color: textColor });
    expect(wrapper.find('.badge-tile-category').text()).to.equal(categoryName);
  });
});
