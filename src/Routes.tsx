import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/feed" exact component={Feed} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={() => (<div>Page not found</div>)} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
