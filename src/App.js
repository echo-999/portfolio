import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';

function App() {
  const baseURL = '/portfolio';
  return (
    <Switch>
      <Route exact path={baseURL} >
        <Landing />
      </Route>
      <Route path={`${baseURL}/about`} >
        <h1>About</h1>
      </Route>
    </Switch>
  );
}

export default App;
