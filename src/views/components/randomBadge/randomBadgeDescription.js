import React from 'react';
import PropTypes from 'prop-types';

const RandomBadgeDescription = ({ description }) => (description.length > 250 ?
  <p className="badge-tile-description">
    {description.substring(0, 250)} <span className="read-more">...</span>
  </p> :
  <p className="badge-tile-description">{description}</p>);

RandomBadgeDescription.defaultProps = {
  description: '',
};
RandomBadgeDescription.propTypes = {
  description: PropTypes.string,
};

export default RandomBadgeDescription;
