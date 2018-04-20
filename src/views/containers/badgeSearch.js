import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { BADGE_SEARCH_FORM } from '../../consts/form';

const BadgeSearch = ({}) => {
  return (
    <div>
      <Field
        component="input"
        type="text"
      />
    </div>
  );
};

export default reduxForm({
  form: BADGE_SEARCH_FORM,
})(BadgeSearch);
