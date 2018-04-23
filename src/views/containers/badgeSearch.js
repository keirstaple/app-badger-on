import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { push } from 'react-router-redux';

import { BADGE_SEARCH_FORM, FORM_FIELDS } from '../../consts/form';

const { BADGE_FUZZY_SEARCH } = FORM_FIELDS;

class BadgeSearch extends Component {
  // componenDidMount() {

  // }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props[BADGE_FUZZY_SEARCH] !== nextProps[BADGE_FUZZY_SEARCH]) {
  //     nextProps.change(BADGE_FUZZY_SEARCH, nextProps[BADGE_FUZZY_SEARCH]);
  //   }
  // }
  render() {
    const { pushURI } = this.props;
    return (
      <div className="badge-search-container">
        <Field
          name={BADGE_FUZZY_SEARCH}
          component="input"
          type="text"
          onChange={(e, value) => pushURI(`/search/${encodeURI(value)}`)}
        />
      </div>
    );
  }
}

BadgeSearch.defaultProps = {
  // values: {},
};

BadgeSearch.propTypes = {
  pushURI: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  // values: PropTypes.shape({}),
};

export default compose(
  reduxForm({
    form: BADGE_SEARCH_FORM,
  }),
  connect(
    state => ({
      values: getFormValues(BADGE_SEARCH_FORM)(state),
    }),
    dispatch => ({
      pushURI: uri => dispatch(push(uri)),
    }),
  ),
)(BadgeSearch);

