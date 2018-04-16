import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RandomBadgeTile from '../components/randomBadge/randomBadgeTile';
import randomBadgesSelector from '../../state/selectors/randomBadgesSelector';

class RandomBadges extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { randomBadges } = this.props;
    return (
      <div className="random-badges-container">
        <h2 className="section-header">RANDOM BADGES</h2>
        <div className="break" />
        {
          randomBadges.map((randomBadge) => {
            const { value } = randomBadge;
            return <RandomBadgeTile key={randomBadge.key} randomBadge={value} />;
          })
        }
      </div>
    );
  }
}

RandomBadges.propTypes = {
  randomBadges: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export const baseComponent = RandomBadges;

export default connect(state => ({ randomBadges: randomBadgesSelector(state) }))(RandomBadges);
