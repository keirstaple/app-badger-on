import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { push } from 'react-router-redux';

import BadgeList from '../components/badgeList';

import filteredBadgesBySearchTerm from '../../state/selectors/filteredBadgesBySearchTerm';

import { BADGE_SEARCH_FORM, FORM_FIELDS } from '../../consts/form';
import badgePropType from '../../consts/propTypes';

const { BADGE_FUZZY_SEARCH } = FORM_FIELDS;

class BadgeSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props[BADGE_FUZZY_SEARCH] !== nextProps[BADGE_FUZZY_SEARCH]) {
      nextProps.change(BADGE_FUZZY_SEARCH, nextProps[BADGE_FUZZY_SEARCH]);
    }
  }
  handleChange(e, value) {
    const { pushURI } = this.props;
    pushURI(`/search/${encodeURIComponent(value)}`);
  }
  render() {
    const { searchedBadges } = this.props;
    return (
      <div className="badge-search-container">
        <Field
          name={BADGE_FUZZY_SEARCH}
          component="input"
          type="text"
          onChange={this.handleChange}
        />
        <BadgeList searchedBadges={searchedBadges} />
      </div>
    );
  }
}

BadgeSearch.defaultProps = {
  searchedBadges: [],
};

BadgeSearch.propTypes = {
  pushURI: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  searchedBadges: PropTypes.arrayOf(badgePropType),
};

export default compose(
  reduxForm({
    form: BADGE_SEARCH_FORM,
  }),
  connect(
    state => ({
      values: getFormValues(BADGE_SEARCH_FORM)(state),
      searchedBadges: filteredBadgesBySearchTerm(state),
    }),
    dispatch => ({
      pushURI: uri => dispatch(push(uri)),
    }),
  ),
)(BadgeSearch);

