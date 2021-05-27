import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp';
import { auth, createProfileDocument } from './components/Firebase/Firebase.utils'
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      createProfileDocument(userAuth);
      if(userAuth){
        const userRef = await createProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }
      else{
        setCurrentUser(userAuth)
      }
    });

    return() => {
      setCurrentUser(null);
    }
  }, [])

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser])

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
