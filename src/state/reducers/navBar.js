import UPDATE_NAV_BAR_STATUS from '../../actionTypes/navBar';
import { navBarClosed } from '../../consts/navBar';

const INITIAL_STATE = {
  navBarStatus: navBarClosed,
};

const navBar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NAV_BAR_STATUS:
      return {
        ...state,
        navBarStatus: action.status,
      };
    default:
      return state;
  }
};

export default navBar;
