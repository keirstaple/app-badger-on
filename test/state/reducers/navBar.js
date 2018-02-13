import { expect } from 'chai';

import { navBar, INITIAL_STATE } from '../../../src/state/reducers/navBar';
import { navBarOpen } from '../../../src/consts/navBar';
import UPDATE_NAV_BAR_STATUS from '../../../src/actionTypes/navBar';

describe('navBar actions', () => {
    it('should update the navBar status', () => {
        const action = { type: UPDATE_NAV_BAR_STATUS, status: navBarOpen };
        const results = { navBarStatus: navBarOpen };
        expect(navBar(INITIAL_STATE, action)).toEqual(results);
    });
});
