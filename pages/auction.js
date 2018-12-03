import React, {Component} from 'react';
import Router, { withRouter } from 'next/router';
import Template from '../components/Template';
import store from '../components/stores';
import fetch from 'isomorphic-unfetch'
import LotList from "../components/LotList";

class Auction extends Component {
    constructor(props) {
        super(props);
        const test_items = store(props.path);
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

    static async getInitialProps({pathname}) {
        console.log('hello'); //не виводиться НІКАДА (((((
        const res = await fetch('http://app.penny-auction.cf/api/lots', {
            headers: {
                Authorization:  localStorage.getItem('penny-auction-token')
            },
        });
        const data = await res.json();
        console.log(data);
        return ({
            items: data, path: pathname,
        })
    }

    render() {
        if (this.state.token) return (
            <Template pageTitle="Auction">
                <LotList items={this.props.items} test_items={this.test_items}/>
            </Template>
        ); else return (<div>Unable to authenticate!</div>)
    }

}


export default withRouter(Auction);
