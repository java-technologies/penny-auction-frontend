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
      isLogin: true,
      name: 'Admin',
    };
  }
  componentWillMount() {
    this.isntLoggedin();
  }
  isntLoggedin() {
    const token = null;
    //заглушка для логаута
    if (token !== undefined && token !== null && token !== '') {
      this.setState(prevState => ({
        isLogin: !prevState.isLogin,
      }));
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.pageTitle}</title>
        </Head>
        <header className={css.header}>
          <div className={css.inner_header_wrapper}>
            <div className={css.logo}>
              <Link href="/"><span>Home</span></Link>
            </div>
            <Navigation
              pathname={this.props.pathname}
              isLogin={this.state.isLogin}
              name={this.state.name}
            />
          </div>
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
