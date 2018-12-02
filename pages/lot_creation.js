import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Template from '../components/Template';
import LotCreation from '../components/LotCreation';
import store from '../components/stores';

const NewLot = ({ path }) => {
  const content = store(path);
  return (
    <Template pathname={path} pageTitle="Penny Auction">
      <LotCreation />
    </Template>
  );
};
NewLot.getInitialProps = async ({ pathname }) => ({ path: pathname });

NewLot.propTypes = {
  path: PropTypes.string.isRequired,
};

export default withRouter(NewLot);
