import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/fp/pick';

import BadgeDescription from './badgeDescription';

import getBadgeCategoryDetails from '../../utils/getBadgeCategoryDetails';

import badgePropType from '../../consts/propTypes';

const BadgeTile = ({ randomBadge }) => {
  const {
    imageUrl,
    name,
    proof,
    description,
  } = randomBadge ? pick(['imageUrl', 'name', 'proof', 'description'])(randomBadge) : '';
  const { categoryName, textColor, backgroundColor } = randomBadge ? getBadgeCategoryDetails(randomBadge) : '';

  return (
    <div
      className="badge-tile hover-hand random-badge-content"
      style={{ backgroundColor }}
    >
      <div className="badge-tile-image-details">
        <img className="detail-image" src={imageUrl} alt={name} />
        <div className="badge-tile-details">
          <h1 className="badge-tile-name" style={{ color: textColor }}>{name}</h1>
          <span className="badge-tile-subtitle" style={{ color: textColor }}>
            To do:
          </span>
          <BadgeDescription description={description} />
          <br />
          <span className="badge-tile-subtitle" style={{ color: textColor }}>
            Proof:
          </span>
          <span className="badge-tile-description">{proof}</span>
        </div>
      </div>
      <h1 className="badge-tile-category" style={{ color: textColor }}>{categoryName}</h1>
    </div>
  );
};

BadgeTile.propTypes = {
  randomBadge: PropTypes.shape(badgePropType).isRequired,
};

export default BadgeTile;
