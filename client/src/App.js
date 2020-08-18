import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './features/Login/index';
import DashBoard from './features/Dashboard';
import NotFound from './components/NotFound';
import { PrivateRoute } from './Authientication';
import { PERMISSION } from './constant';

function App() {
  return (
    <Router>
      <div className="container">
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            React CRUD Example
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br /> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={DashBoard} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
