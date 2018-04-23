import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm, getFormValues } from 'redux-form';

import { BADGE_SEARCH_FORM, FORM_FIELDS } from '../../consts/form';

const BadgeSearch = ({ values }) => {
  console.log(values);
  return (
    <div className="badge-search-container">
      <Field
        name={FORM_FIELDS.BADGE_FUZZY_SEARCH}
        component="input"
        type="text"
      />
    </div>
  );
};

BadgeSearch.defaultProps = {
  values: {},
};

BadgeSearch.propTypes = {
  values: PropTypes.shape({}),
};

export default compose(
  reduxForm({
    form: BADGE_SEARCH_FORM,
  }),
  connect(state => ({
    values: getFormValues(BADGE_SEARCH_FORM)(state),
  })),
)(BadgeSearch);

