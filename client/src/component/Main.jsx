import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import Home from "./home/Home";
import About from "./about/About";
import "./Main.css";

import "./home/carousel.css";
import Collection from "./collections/Collections";
import Services from "./customerServices/Services";
import Header from "./core/Header";
import Footer from "./core/Footer";
import LoginForm from "./login/login";

import AuthService from "../services/auth";
import Order from "./order/Order";
import SignUp from "./signup/signup";

const SecretRoute = (component, ...rest) => {
  return (
    <Route
    {...rest}
      render={props =>
        AuthService.isAuthenticated() === true ? (
          <Order {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
class Main extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        main: Home
      },
      {
        path: "/home",
        main: Home
      },
      {
        path: "/collection",
        main: Collection
      },
      {
        path: "/services",
        main: Services
      },
      {
        path: "/about",
        main: About
      },
      {
        path: "/login",
        main: LoginForm
      },
      {
        path: "/signup",
        main: SignUp
      }
    ];
    return (
      <React.Fragment>
        <Header />
        <main role="main" id="mainDiv">
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            {/* <Route
              path="/order"
              render={props =>
                AuthService.isAuthenticated !== true ? <LoginForm /> : <Home />
              }
            />  */}
            <SecretRoute path='/order' component={Order} />

            <Route render={() => <div> Oops!! Invalid path!!!</div>} />
          </Switch>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default Main;
