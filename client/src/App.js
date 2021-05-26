import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp';
import { auth } from './components/Firebase/Firebase.utils'
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return() => {
      setCurrentUser(null);
    }
  }, [])

  return (
    <Fragment>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </Fragment>
  );
}

export default App;
