import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Template from '../components/Template';
import store from '../components/stores';
import LotItem from "../components/LotItem";
import css from "../components/LotItem/LotItem.scss";
import fetch from 'isomorphic-unfetch'
import LotList from "../components/LotList";

const Auction = ({ path, data }) => {
  const items= store(path);
  return (
    <Template pathname={path} pageTitle="Auction">
        <LotList data={data}/>
    </Template>
  );
};
Auction.getInitialProps = async ({ pathname }) => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  return ({ path: pathname, data })
};

Auction.propTypes = {
  path: PropTypes.string.isRequired,
};

export default withRouter(Auction);
