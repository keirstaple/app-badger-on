import { expect } from 'chai';

import { navBar, INITIAL_STATE } from '../../../src/state/reducers/navBar';
import { navBarOpen, navBarClosed } from '../../../src/consts/navBar';
import UPDATE_NAV_BAR_STATUS from '../../../src/actionTypes/navBar';

describe('navBar actions', () => {
    it('should update the navBar status', () => {
        const action = { type: UPDATE_NAV_BAR_STATUS, status: navBarOpen };
        const results = { navBarStatus: navBarOpen };
        const actionCreator = navBar(INITIAL_STATE, action);
        expect(actionCreator).to.eql(results);
        expect(actionCreator.navBarStatus).to.not.eql(navBarClosed);
    });
});
