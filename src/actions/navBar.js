import UPDATE_NAV_BAR_STATUS from '../actionTypes/navBar';

const updateNavBarStatus = status => ({
  type: UPDATE_NAV_BAR_STATUS,
  status,
});

export default updateNavBarStatus;
