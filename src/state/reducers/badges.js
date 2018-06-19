import { REHYDRATE } from 'redux-persist/lib/constants';
import { actionTypes as firebaseActionTypes } from 'react-redux-firebase';
import getProp from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';

export const getInitialState = () => ({
  locallyPersistedBadges: {},
  cloudPersistedBadges: {},
});

export const badges = (state = getInitialState(), action) => {
  const locallyPersistedBadges = getProp('payload.locallyPersistedBadges')(action);
  const cloudPersistedBadges = getProp('ordered')(action);
  switch (action.type) {
  case REHYDRATE:
    return {
      ...state,
      locallyPersistedBadges,
    };
  case firebaseActionTypes.SET:
    return !isEmpty(cloudPersistedBadges)
      ? {
        ...state,
        cloudPersistedBadges,
        locallyPersistedBadges: cloudPersistedBadges,
      }
      : state;
  default:
    return state;
  }
};
