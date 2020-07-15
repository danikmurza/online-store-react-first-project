import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';
import ProductView from "../news/news-page";
import NavBar from '../NavBar/nav-bar'
import RegistrationPage from "../user/registration-page";
import './app.css';
import {AboutPage} from "../about/about";
import LoginPage from "../user/login-page";

const App = () => {
  return (
    <main role="main" className="container">
      
      <NavBar/>
      <Switch>
        <Route
          path="/"
          component={ProductView}
          exact/>
        <Route
          path="/cart"
          component={CartPage}
        />
        <Route
          path="/registrationPage"
          component={RegistrationPage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/ProductView"
          component={HomePage}
        />
        <Route
          path="/about"
          component={AboutPage}
        />
      </Switch>
      
    
    </main>
  );
};

export default App;
