import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Template from '../components/Template';
import store from '../components/stores';
import LotItem from "../components/LotItem";
import css from "../components/LotItem/LotItem.scss";
import fetch from 'isomorphic-unfetch'
import LotList from "../components/LotList";

const Auction = (props) => {
  const test_items= store(props.path);
  return (
    <Template pageTitle="Auction">
        <LotList items={props.items} test_items={test_items}/>
    </Template>
  );
};
// Auction.getInitialProps = async ({ pathname }) => ({ path: pathname });
Auction.getInitialProps = async function({ pathname }) {
    const res = await fetch('http://app.penny-auction.cf/api/lots', {
        headers: {
            "Cookie":"keycloak.penny-auction-ui.session=lmfdcWkropehU6axOw7pVhXOQaR0W2_wLgkw1y9r"
        },
    });
    const data = await res.json();
    return ({
        items: data, path: pathname,
    })
};

export default withRouter(Auction);
