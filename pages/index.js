import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Template from '../components/Template';
import FirstScreen from '../components/Home/FirstScreen';
import store from '../components/stores';

const Home = ({ path }) => {
  const content = store(path);
  return (
    <Template pathname={path} pageTitle="Penny Auction">
      <FirstScreen content={content.first_screen} />
    </Template>
  );
};
Home.getInitialProps = async ({ pathname }) => ({ path: pathname });

Home.propTypes = {
  path: PropTypes.string.isRequired,
};

export default withRouter(Home);
