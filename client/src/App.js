import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp';
import { auth, createProfileDocument } from './components/Firebase/Firebase.utils'
import './App.css';
import { setCurrentUser } from './redux/user/userSlice';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      createProfileDocument(userAuth);
      if(userAuth){
        const userRef = await createProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }))
        })
      }
      else{
        dispatch(setCurrentUser(userAuth))
      }
    });

    return() => {
      dispatch(setCurrentUser(null));
    }
  }, [])

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
