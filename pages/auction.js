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
  return (
    <Template pageTitle="Auction">
        <LotList items={props.items}/>
    </Template>
  );
};
// Auction.getInitialProps = async ({ pathname }) => ({ path: pathname });
Auction.getInitialProps = async function() {
    const res = await fetch('http://localhost:8080/lots', {
        headers: {
            "Access-Token":"eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.MejLezWY6hjGgbIXkq6Qbvx_-q5vWaTR6qPiNHphvla-XaZD3up1DN6Ib5AEOVtuB3fC9l-0L36noK4qQA79lhpSK3gozXO6XPIcCp4C8MU_ACzGtYe7IwGnnK3Emr6IHQE0bpGinHX1Ak1pAuwJNawaQ6Nvmz2ozZPsyxmiwoo"
        },
    });
    const data = await res.json();
    return {
        items: data
    }
};

export default withRouter(Auction);
