import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Template from '../components/Template';
import store from '../components/stores';
import LotItem from "../components/LotItem";
import css from "../components/LotItem/LotItem.scss";
import LotList from "../components/LotList";

const Auction = ({ path }) => {
  const items= store(path);
  return (
    <Template pathname={path} pageTitle="Auction">
        <LotList items={items}/>
    </Template>
  );
};
Auction.getInitialProps = async ({ pathname }) => ({ path: pathname });

Auction.propTypes = {
  path: PropTypes.string.isRequired,
};

export default withRouter(Auction);
