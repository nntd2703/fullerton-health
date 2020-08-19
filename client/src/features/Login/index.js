import React, {Component} from 'react';
import LoginFormComponent from '../../components/LoginForm';
import {Redirect} from 'react-router-dom';
import {fakeAuth} from '../../Authientication';
import {PERMISSION} from '../../constant';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            transactionToRoute: {
                from: '',
                permission: PERMISSION.user,
            },
        };
    }

    render() {
        const {redirectToReferrer, transactionToRoute, permission} = this.state;

        const {from, mustBeLogin} = this.props.location.state || {
            ...transactionToRoute,
        };

        return (
            <div className="login-form">
                {redirectToReferrer ? (
                    <Redirect
                        to={{pathname: from.pathname, state: {permission: permission}}}
                    />
                ) : (
                    <div className="login-form">
                        {mustBeLogin ? <p>You must log in to view the page</p> : null}
                        <LoginFormComponent handleLogin={this.handleLogin}/>
                    </div>
                )}
            </div>
        );
    }

    handleLogin = (permission) => {
        fakeAuth.authenticate(() => {
            this.setState({
                transactionToRoute: {from: '/'},
                permission,
                redirectToReferrer: true,
            });
        });
    };
}
