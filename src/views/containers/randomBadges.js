import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BadgeTile from '../components/badgeTile';

import randomBadgesSelector from '../../state/selectors/randomBadgesSelector';

import badgePropType from '../../consts/propTypes';
import { RANDOM_BADGES_HEADER } from '../../consts/randomBadges';

class RandomBadges extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { randomBadges } = this.props;
    return (
      <div className="random-badges-container">
        <h2 className="section-header">{RANDOM_BADGES_HEADER}</h2>
        <div className="break" />
        {
          randomBadges.map(({ key, value }) => <BadgeTile key={key} badge={value} />)
        }
      </div>
    );
  }
}

RandomBadges.propTypes = {
  randomBadges: PropTypes.arrayOf(PropTypes.shape(badgePropType)).isRequired,
};

export const baseComponent = RandomBadges;

export default connect(state => ({ randomBadges: randomBadgesSelector(state) }))(RandomBadges);
