import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Template from '../components/Template';
import store from '../components/stores';

const Auction = ({ path }) => {
  const content = store(path);
  return (
    <Template pathname={path} pageTitle="Auction">
      <p>Auction Page</p>
    </Template>
  );
};
Auction.getInitialProps = async ({ pathname }) => ({ path: pathname });

Auction.propTypes = {
  path: PropTypes.string.isRequired,
};

export default withRouter(Auction);
