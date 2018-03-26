import React from 'react';
import PropTypes from 'prop-types';

const RandomBadgeTile = ({ randomBadge }) => {
  console.log(randomBadge);
  return <div />;
};

RandomBadgeTile.propTypes = {
  randomBadge: PropTypes.shape({
    category: PropTypes.number,
    challenges: PropTypes.string,
    comments: PropTypes.string,
    creator: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    index: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    name: PropTypes.string,
    originalIndex: PropTypes.number,
    proof: PropTypes.string,
    pushId: PropTypes.number,
    tags: PropTypes.string,
  }).isRequired,
};

export default RandomBadgeTile;
