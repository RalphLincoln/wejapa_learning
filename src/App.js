import React from 'react';
import './App.css';

// PAGES
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// COMPONENTS
import Header from './components/header/header.component';

// REACT ROUTER DOM
import { Switch, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
