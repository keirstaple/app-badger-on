import { expect } from 'chai';

import { navBar, getInitialState } from '../../../src/state/reducers/navBar';
import updateNavBarStatus from '../../../src/actions/navBar';
import { navBarOpen, navBarClosed } from '../../../src/consts/navBar';

describe(`${navBar.name} reducer`, () => {
  it('should update the navBar status', () => {
    const action = updateNavBarStatus(navBarOpen);
    const navBarReducer = navBar(getInitialState(), action);
    const results = { navBarStatus: navBarOpen };

    expect(navBarReducer).to.eql(results);
    expect(navBarReducer.navBarStatus).to.not.eql(navBarClosed);
  });
});
