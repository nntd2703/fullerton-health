import React, { Component } from 'react';
import LoginFormComponent from '../../components/LoginForm';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from '../../Authientication';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      transactionToRoute: {
        from: '',
      },
    };
  }
  render() {
    const { redirectToReferrer, transactionToRoute } = this.state;

    const { from, mustBeLogin } = this.props.location.state || {
      ...transactionToRoute,
    };

    return (
      <div className="login-form">
        {redirectToReferrer ? (
          <Redirect to={from} />
        ) : (
          <div className="login-form">
            {mustBeLogin ? <p>You must log in to view the page</p> : null}
            <LoginFormComponent handleLogin={this.handleLogin} />
          </div>
        )}
      </div>
    );
  }

  handleLogin = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        transactionToRoute: {
          from: '/',
        },
        redirectToReferrer: true,
      }));
    });
  };
}
