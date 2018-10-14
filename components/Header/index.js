import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import 'normalize-scss';
import css from './Header.scss';
import Navigation from './Navigation';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileToggler: false,
      isLogin: false,
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }
  componentWillMount() {
    this.isLogin();
  }
  isLogin() {
    const token = null;
    if (token !== undefined && token !== null && token !== '') {
      this.setState(prevState => ({
        isLogin: !prevState.isLogin,
      }));
    }
  }
  toggleMobileMenu() {
    this.setState(prevState => ({
      mobileToggler: !prevState.mobileToggler,
    }));
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.pageTitle}</title>
        </Head>
        <header className={css.header}>
          <Navigation
            pathname={this.props.pathname}
            collapsed={this.state.mobileToggler}
            isLogin={this.state.isLogin}
          />
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};
export default Header;
