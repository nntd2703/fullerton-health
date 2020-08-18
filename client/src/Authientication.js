import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PERMISSION } from './constant';

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false,
//   };
//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true,
//       }));
//     });
//   };
//   render() {
//     const { from } = this.props.location.state || { from: { pathname: "/" } };
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer === true) {
//       <Redirect to={from} />;
//     }

//     return (
//       <div>
//         <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

// const AuthButton = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   ),
// );

// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>
//         <Route path="/public" component={Public} />
//         <Route path="/login" component={Login} />
//         <PrivateRoute path="/protected" component={Protected} />
//       </div>
//     </Router>
//   );
// }

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} permission={PERMISSION.admin} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location, mustBeLdasdogin: true },
          }}
        />
      )
    }
  />
);
