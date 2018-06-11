import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../../../src/views/containers/Home';
import RandomBadges from '../../../src/views/containers/randomBadges';

const wrapper = shallow(<Home />);

describe('Home', () => {
  it('should render', () => {
    expect(wrapper).to.have.length(1);
    expect(wrapper.find('.home-container').hasClass('home-container')).to.equal(true);
  });
  it('should render the RandomBadges container', () => {
    expect(wrapper.find(RandomBadges).length).to.equal(1);
  });
});
