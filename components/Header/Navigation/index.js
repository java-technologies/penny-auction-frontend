import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import css from './Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          title: "link1",
          href: '/link1',
          as: '/link1',
        },
        {
          title: 'link2',
          href: '/link2',
          as: '/link2',
        },
      ],
      loginBtn: {
        href: '/log-in',
        title: 'log in',
      },
    };
  }
  componentWillMount() {
    this.isLogin();
  }
  isLogin() {
    if (this.props.isLogin) {
      this.setState({
        loginBtn: {
          title: this.state.loginBtn.title = 'Hello, Somebody!',
          href: '/dashboard',
        },
      });
    }
  }
  render() {
    const router = this.props.pathname;
    const listItems = this.state.routes.map(val => (
      <li className="menu-item" key={val.href}>
        <Link href={val.href} as={val.as}>
          <span>
            {val.title}
          </span>
        </Link>
      </li>));
    return (
      <div
        className={css.header_navigation}
        data-collapsed={this.props.collapsed}
        data-login={this.props.isLogin}
      >
        <nav className={css.navigation}>
          <ul className="menu">
            {listItems}
          </ul>
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default Navigation;
