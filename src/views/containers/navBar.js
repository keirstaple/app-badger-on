import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'lodash/fp/compose';

// import Login from './Login';
import updateNavBarStatus from '../../actions/navBar';
import { navBarOpen, navBarClosed } from '../../consts/navBar';
import badgeyIcon from '../../img/badgey.png';

class NavBar extends Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.browser.greaterThan.small) {
      this.props.updateNavBarStatus(navBarClosed);
    }
  }

  toggleMenu() {
    if (this.props.navBarStatus === navBarClosed) {
      this.props.updateNavBarStatus(navBarOpen);
    } else {
      this.props.updateNavBarStatus(navBarClosed);
    }
  }

  render() {
    return (
      <div className="navbar-div">
        <div className="navbar-icons">
          <NavLink className="navbar-clickable" to="/">
            <img
              id="navbar-image"
              src={badgeyIcon}
              alt="badger-logo"
            />
          </NavLink>
          <div
            onClick={this.toggleMenu}
            onKeyPress={this.toggleMenu}
            role="button"
            tabIndex={0}
          >
            <i className="hamburger-icon fas fa-bars fa-sm" />
          </div>
        </div>
        <ul className={this.props.navBarStatus}>
          <NavLink className="navbar-clickable" to="/about">About</NavLink>
          <NavLink className="navbar-clickable" to="/categories">Categories</NavLink>
          <NavLink className="navbar-clickable" to="/challenges">Challenges</NavLink>
          <NavLink className="navbar-clickable" to="/profile">
            <i fas className="fas fa-user-circle fa-sm" />
          </NavLink>
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
  browser: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  browser: state.browser,
  navBarStatus: state.navBar.navBarStatus,
});

const mapDispatchToProps = dispatch => ({
  updateNavBarStatus: status => dispatch(updateNavBarStatus(status)),
});

const wrappers = compose([
  connect(mapStateToProps, mapDispatchToProps),
]);

export default wrappers(NavBar);
