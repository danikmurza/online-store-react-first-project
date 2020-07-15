import React from 'react';
import {Route, Switch} from 'react-router-dom';
//import ShopHeader from '../shop-header';
import {HomePage, CartPage} from '../pages';
import ProductView from "../news/news-page";
import NavBar from '../NavBar/nav-bar'
import RegistrationPage from "../user/registration-page";
import './app.css';
import {AboutPage} from "../about/about";

const App = () => {
  return (
    <main role="main" className="container">
      
      <NavBar/>
      
      {/*<ShopHeader numItems={5} total={210}/>*/}
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
