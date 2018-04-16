import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import RandomBadgeTile from '../../../src/views/components/randomBadge/randomBadgeTile';

describe('RandomBadgeTile', () => {
  const wrapper = props => shallow(<RandomBadgeTile {...props} />);
  it('should render', () => {
    expect(wrapper({})).to.have.length(1);
  });
});
