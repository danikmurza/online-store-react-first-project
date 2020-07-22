import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {NavBar} from '../NavBar/nav-bar'
import {Redirect} from "react-router-dom"
import NewsPage from "../news/news-page"
import {HomePage, CartPage} from '../pages'
import {AboutPage} from "../about"
import AllUser from "../admin/admin-page"
import {NavBarLogin} from "../NavBar/navbar-login"
import Login from "../user/login"


export const App = () => {
  const data = JSON.parse(localStorage.getItem('user'))
  if (data) {
    return (
      <main role="main" className="container">
        <NavBarLogin/>
        <Switch>
          <Route
            path="/"
            component={NewsPage}
            exact/>
          <Route
            path="/cart"
            component={CartPage}
          />
          <Route
            path="/products"
            component={HomePage}
          />
          <Route
            path="/about"
            component={AboutPage}
          />
          <Route
            path="/users"
            component={AllUser}
          />
          <Redirect to="/"/>
        </Switch>
      </main>
    )
  } else if (!data) {
    return (
      <main role="main" className="container">
        <NavBar/>
        <Switch>
          <Route
            path="/"
            component={NewsPage}
            exact
          />
          <Route
            path="/about"
            component={AboutPage}
          />
          <Route
            path="/login"
            component={Login}
          />
          <Redirect to="/login"/>
        </Switch>
      </main>
    )
  }
}



