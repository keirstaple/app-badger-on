import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BadgeTile from '../components/badgeTile';
import randomBadgesSelector from '../../state/selectors/randomBadgesSelector';

import badgePropType from '../../consts/propTypes';

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
          randomBadges.map(({ key, value }) => <BadgeTile key={key} randomBadge={value} />)
        }
      </div>
    );
  }
}

RandomBadges.propTypes = {
  randomBadges: PropTypes.arrayOf(badgePropType).isRequired,
};

export const baseComponent = RandomBadges;

export default connect(state => ({ randomBadges: randomBadgesSelector(state) }))(RandomBadges);
