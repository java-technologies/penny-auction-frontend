import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import css from './Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      routes: [
        {
          title: "Auction",
          href: '/auction',
          as: '/auction',
        },
        {
          title: "Lot creation",
          href: '/lot_creation',
          as: '/lot_creation',
        },
        {
          title: 'My Lots',
          href: '/my-lots',
          as: '/myLots',
        },
      ],
      account: {
        href: '/log-in',
        title: 'log in',
      },
    };
  }
  componentDidMount() {
      if (localStorage.getItem('penny-auction-token')) {
          this.setState({
              authenticated: true
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
    if (this.state.authenticated) return (
      <div
        className={css.header_navigation}
        data-login={this.state.authenticated}
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
    ); else return (<div
        className={css.header_navigation}
        data-login={this.state.authenticated}
    />)
  }
}

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
