import React, {Component} from 'react';
import Router, { withRouter } from 'next/router';

let Keycloak
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keycloak: null,
            authenticated: false
        };
    }

    async componentDidMount() {
        if (this.state.authenticated === false ) {
            Keycloak = await import('keycloak-js');
            const keycloak = Keycloak({
                url: 'http://identity.penny-auction.cf/auth',
                realm: 'master',
                clientId: 'penny-auction-ui-public',
            });
            await new Promise(resolve => {
                setTimeout(resolve, 500);
            });
            keycloak.init({
                onLoad: 'login-required', responseMode: 'query',
                flow: 'standard', checkLoginIframe: false
            }).success(authenticated => {
                this.setState({keycloak: keycloak, authenticated: authenticated});
                localStorage.setItem('penny-auction-token', keycloak.token);
                window.location.href=`/auction#${keycloak.token}`;
            })
        }
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) return (
                <div>Good</div>
            ); else return (<div>Unable to authenticate!</div>)
        }
        return (
            <div>Initializing Keycloak...</div>
        );
    }
}

export default Login;
