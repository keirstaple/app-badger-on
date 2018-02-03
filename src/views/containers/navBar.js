import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import Login from './Login';
import updateNavBarStatus from '../../actions/navBar';
import calculateWindowDimensions from '../HOCs/calculateWindowDimensions';
import { smallMaxWidth } from '../../consts/layout';
import { navBarOpen, navBarClosed } from '../../consts/navBar';
import badgeyIcon from '../../img/badgey.png';

class NavBar extends Component {
  constructor() {
    super();
    this.openMenu = this.openMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { windowWidth } = this.props;
    if (this.props.windowWidth !== nextProps.windowWidth) {
      if (windowWidth >= smallMaxWidth) {
        this.props.updateNavBarStatus(navBarClosed);
      }
    }
  }

  openMenu() {
    if (this.props.navBarStatus === navBarClosed) {
      this.props.updateNavBarStatus(navBarOpen);
    } else {
      this.props.updateNavBarStatus(navBarClosed);
    }
  }

  render() {
    const altText = 'badger-logo';
    return (
      <div className="navbar-div">
        <div className="navbar-icons">
          <NavLink className="navbar-clickable" to="/">
            <img
              id="navbar-image"
              src={badgeyIcon}
              alt={altText}
            />
          </NavLink>
          <button onClick={this.openMenu} id="ham" className="hamburger-icon" name="bars" size="2x" />
        </div>
        <ul className={this.props.navBarStatus}>
          <NavLink className="navbar-clickable" to="/about">About</NavLink>
          <NavLink className="navbar-clickable" to="/categories">Categories</NavLink>
          <NavLink className="navbar-clickable" to="/challenges">Challenges</NavLink>
          <NavLink className="navbar-clickable" to="/signup">My Account</NavLink>
          {/* <Login
            logIn={this.props.logIn}
            logOut={this.props.logOut}
            authenticated={this.props.authenticated}
            currentUser={this.props.currentUser}
          /> */}
        </ul>
      </div>
    );
  }
}

NavBar.propTypes = {
  updateNavBarStatus: PropTypes.func.isRequired,
  navBarStatus: PropTypes.string.isRequired,
  windowWidth: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  navBarStatus: state.navBar.navBarStatus,
});

const mapDispatchToProps = dispatch => ({
  updateNavBarStatus: status => dispatch(updateNavBarStatus(status)),
});

const wrappers = _.flowRight([
  calculateWindowDimensions,
  connect(mapStateToProps, mapDispatchToProps),
]);

export default wrappers(NavBar);
