import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </Fragment>
  );
}

export default App;
