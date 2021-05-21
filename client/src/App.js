import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/Shop/Shop'
import './App.css'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </Fragment>
  );
}

export default App;
