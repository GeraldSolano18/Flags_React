import React from 'react';
import AppPage from '../App';
import {CountryDetail} from '../views/CountryDetail'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={AppPage} />
        <Route exact path='/detail/:id' component={CountryDetail} />
      </Switch>

  </BrowserRouter>
);

export default App;
