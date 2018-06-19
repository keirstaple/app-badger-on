import UPDATE_NAV_BAR_STATUS from '../../actionTypes/navBar';
import { navBarClosed } from '../../consts/navBar';

export const getInitialState = () => ({
  navBarStatus: navBarClosed,
});

export const navBar = (state = getInitialState(), action) => {
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
