import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp';
import { auth, createProfileDocument } from './components/Firebase/Firebase.utils'
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


const App = (props) => {

  useEffect(() => {
    const { setCurrentUser } = props;

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
