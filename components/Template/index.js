import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header pathname={this.props.pathname} pageTitle={this.props.pageTitle} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  pathname: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Template.defaultProps = {
  pathname: '/',
};

export default Template;
