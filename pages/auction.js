import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Template from '../components/Template';
import store from '../components/stores';
import LotItem from "../components/LotItem";
import css from "../components/LotItem/LotItem.scss";
import fetch from 'isomorphic-unfetch'
import LotList from "../components/LotList";
// import Keycloak from 'keycloak-js';
let Keycloak
class Auction extends Component {
    constructor(props) {
        super(props);
        const test_items = store(props.path);
        this.state = {
            keycloak: null,
            authenticated: false,
            loading: false
        };
    }

    async componentDidMount() {
        let Keycloak = await import('keycloak-js');
        const keycloak = Keycloak({
            url: 'http://identity.penny-auction.cf/auth',
            realm: 'master',
            clientId: 'penny-auction-ui-public',
            "ssl-required": "external",
            "public-client": true,
            "confidential-port": 0,
            "enable-cors": true,
        });
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
            this.setState({keycloak: keycloak, authenticated: authenticated})
        })
    }

    async getInitialProps({pathname}) {
        const res = await fetch('http://app.penny-auction.cf/api/lots', {
            headers: {
                "Cookie":"keycloak.penny-auction-ui.session=lmfdcWkropehU6axOw7pVhXOQaR0W2_wLgkw1y9r"
            },
        });
        const data = await res.json();
        return ({
            items: data, path: pathname,
        })
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) return (
                <Template pageTitle="Auction">
                    <LotList items={this.props.items} test_items={this.props.test_items}/>
                </Template>
            ); else return (<div>Unable to authenticate!</div>)
        }
        return (
            <div>Initializing Keycloak...</div>
        );
    }
}
// const Auction = (props) => {
//   const test_items= store(props.path);
//   return (
//     <Template pageTitle="Auction">
//         <LotList items={props.items} test_items={test_items}/>
//     </Template>
//   );
// };
//
// Auction.getInitialProps = async function({ pathname }) {
//     const res = await fetch('http://app.penny-auction.cf/api/lots', {
//         headers: {
//             "Cookie":"keycloak.penny-auction-ui.session=lmfdcWkropehU6axOw7pVhXOQaR0W2_wLgkw1y9r"
//         },
//     });
//     const data = await res.json();
//     return ({
//         items: data, path: pathname,
//     })
// };

export default withRouter(Auction);
