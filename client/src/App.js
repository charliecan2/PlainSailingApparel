import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import './App.css'

function Hats() {
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop/hats' component={Hats}/>
      </Switch>
    </Fragment>
  );
}

export default App;
