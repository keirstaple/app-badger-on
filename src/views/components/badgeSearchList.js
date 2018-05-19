import React from 'react';
import PropTypes from 'prop-types';

import BadgeTile from './badgeTile';

import badgePropType from '../../consts/propTypes';

const BadgeSearchList = ({ searchedBadges }) => (
  <div className="badge-list">
    {
      searchedBadges.map(({ key, value }) => <BadgeTile key={key} badge={value} />)
    }
  </div>
);

BadgeSearchList.propTypes = {
  searchedBadges: PropTypes.arrayOf(PropTypes.shape(badgePropType)).isRequired,
};

export default BadgeSearchList;
