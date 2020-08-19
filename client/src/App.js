import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './features/Login/index';
import DashBoard from './features/Dashboard';
import NotFound from './components/NotFound';
import { PrivateRoute } from './Authientication';

function App() {
  return (
    <Router>
      <div className="container">
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
