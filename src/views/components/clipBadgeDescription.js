import React from 'react';
import PropTypes from 'prop-types';

const ClipBadgeDescription = ({ description }) => (description.length > 250 ?
  <p className="badge-tile-description">
    {description.substring(0, 250)} <span className="read-more">...</span>
  </p> :
  <p className="badge-tile-description">{description}</p>);

ClipBadgeDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ClipBadgeDescription;
