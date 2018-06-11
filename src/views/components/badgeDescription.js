import React from 'react';
import PropTypes from 'prop-types';

import { BADGE_TILE_DESCRIPTION_MAX } from '../../consts/badgeDescription';

const BadgeDescription = ({ description }) => (description.length > BADGE_TILE_DESCRIPTION_MAX
  ? (
    <p className="badge-tile-description">
      {description.substring(0, BADGE_TILE_DESCRIPTION_MAX)}<span className="read-more">...</span>
    </p>
  )
  : <p className="badge-tile-description">{description}</p>);

BadgeDescription.defaultProps = {
  description: '',
};

BadgeDescription.propTypes = {
  description: PropTypes.string,
};

export default BadgeDescription;
