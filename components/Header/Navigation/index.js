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
          title: "Auction",
          href: '/auction',
          as: '/auction',
        },
        {
          title: 'My Lots',
          href: '/myLots',
          as: '/myLots',
        },
      ],
      account: {
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
        account: {
          title: this.state.account.title = `${this.props.name}`,
          href: '/my-account',
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
        data-login={this.props.isLogin}
      >
        <nav className={css.navigation}>
          <ul className="menu">
            {listItems}
          </ul>
        </nav>
        <Link href={this.state.account.href}>
          <button className={css.login}>
            <span>{this.state.account.title}</span>
          </button>
        </Link>
      </div>
    );
  }
}

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
