import React, {Component} from 'react';
import Router, { withRouter } from 'next/router';
import Template from '../components/Template';
import store from '../components/stores';
import fetch from 'isomorphic-unfetch'
import LotList from "../components/LotList";

class Auction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        };
    }

    async componentDidMount() {
        let token = localStorage.getItem('penny-auction-token');
        if (token) {
            this.setState({token: token});
        } else {
            Router.push('/');
        }
    }

    render() {
        const test_items = store(this.props.path);
        if (this.state.token) return (
            <Template pageTitle="Auction">
                <LotList items={this.props.items} test_items={test_items}/>
            </Template>
        ); else return (<div>Unable to authenticate!</div>)
    }

}
Auction.getInitialProps = async function(context) {
    console.log(context.req.rawHeaders[19].split('=')[1]);
    const res = await fetch('http://app.penny-auction.cf/api/lots', {
        headers: {
            Authorization: context.req.rawHeaders[19].split('=')[1],
            "Cookie":"keycloak.penny-auction-ui.session=7Cea-q8K03lP0xRtBrbUBtGAItKxCcM_KqcoH4aO"
        },
    });
    const data = await res.json();
    console.log(data);
    return ({
        items: data, path: context.pathname,
    })
}


export default withRouter(Auction);
