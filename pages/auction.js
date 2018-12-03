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
      console.log(this.props.path)
        let token = localStorage.getItem('penny-auction-token');
        if (token) {
            this.setState({token: token});
        } else {
            Router.push('/');
        }
    }

    static async getInitialProps({pathname}) {
        console.log('hello'); //не виводиться НІКАДА (((((
        const res = await fetch('http://app.penny-auction.cf/api/lots', {
            headers: {
                Cookie:"keycloak.penny-auction-ui.session=7Cea-q8K03lP0xRtBrbUBtGAItKxCcM_KqcoH4aO",
                //Authorization:  localStorage.getItem('penny-auction-token')
            },
        });
        const data = await res.json();
        console.log(data);
        return ({
            items: data, path: pathname,
        })
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


export default withRouter(Auction);
