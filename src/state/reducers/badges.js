import { REHYDRATE } from 'redux-persist/lib/constants';
import { actionTypes as firebaseActionTypes } from 'react-redux-firebase';
import getProp from 'lodash/fp/get';

export const INITIAL_STATE = {
  persistedBadges: {},
};

export const badges = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REHYDRATE:
    return {
      ...state,
      locallyPersistedBadges: getProp('payload.firebaseDataStore.ordered.badges')(action),
    };
  case firebaseActionTypes.SET:
    return {
      ...state,
      cloudPersistedBadges: getProp('ordered')(action),
    };
  default:
    return state;
  }
};
