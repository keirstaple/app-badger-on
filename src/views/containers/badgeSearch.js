import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { withRouter } from 'react-router';
import getProp from 'lodash/fp/get';

import BadgeSearchList from '../components/badgeSearchList';

import stateBadges from '../../state/selectors/stateBadges';

import filterBadgesBySearch from '../../utils/filterBadgesBySearch';

import badgePropType from '../../consts/propTypes';
import { BADGE_SEARCH_FORM, FORM_FIELDS, KEYBOARD } from '../../consts/form';
import routeParams from '../../consts/routeParams';

const { BADGE_FUZZY_SEARCH } = FORM_FIELDS;

class BadgeSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.grabSearchTerm = this.grabSearchTerm.bind(this);
  }
  handleChange(e) {
    const { history } = this.props;
    const { key, target: { value } } = e;
    const uri = `${routeParams.rootSearch}${encodeURIComponent(value)}`;
    this.props.change(BADGE_FUZZY_SEARCH, value);
    if (key === KEYBOARD.ENTER) {
      history.push(uri);
    }
  }
  grabSearchTerm() {
    const { match } = this.props;
    return getProp('params.searchTerm')(match);
  }
  render() {
    const { badges } = this.props;
    const searchedBadges = filterBadgesBySearch(badges, this.grabSearchTerm());
    return (
      <div className="badge-search-container">
        <Field
          name={BADGE_FUZZY_SEARCH}
          component="input"
          type="text"
          onKeyPress={this.handleChange}
        />
        {searchedBadges && <BadgeSearchList searchedBadges={searchedBadges} />}
      </div>
    );
  }
}

BadgeSearch.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.shape(badgePropType)).isRequired,
  change: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      searchTerm: PropTypes.string,
    }),
  }).isRequired,
};

export default compose(
  withRouter,
  reduxForm({
    form: BADGE_SEARCH_FORM,
  }),
  connect(state => ({
    values: getFormValues(BADGE_SEARCH_FORM)(state),
    badges: stateBadges(state),
  })),
)(BadgeSearch);

