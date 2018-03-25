import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { baseComponent as Home } from '../../../src/views/containers/Home';

const wrapper = shallow(<Home />);

describe('Home', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
    expect(wrapper.find('.App').hasClass('App')).to.equal(true);
  });
});
