import React, { Component } from 'react';
import './App.css';

// PAGES
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// COMPONENTS
import Header from './components/header/header.component';

// REACT ROUTER DOM
import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";




class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // GETTING INFO FROM DATABASE AND STORING IT IN OUR APP STATE
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div >
    );
  }

}

export default App;
