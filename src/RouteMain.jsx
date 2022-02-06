import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./redirect/Home";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Login from "./Login";
import Register from "./Register";
import RedirectEmailVerify from "./redirect/RedirectEmailVerify";
import Dashboardr from "./redirect/Dashboardr";
import RedirectEForm from "./redirect/RedirectEForm";
import LogOut from "./LogOut";
import RedirectCheckResume from "./redirect/RedirectCheckResume";

const auth = getAuth();
class RouteMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dash" component={Dashboardr} />
          <Route exact path="/emailverify" component={RedirectEmailVerify} />
          <Route exact path="/dash/:dcount" component={RedirectEForm} />
          <Route exact path="/signup" component={Register} />
          <Route
            exact
            path="/p/:mailusername"
            component={RedirectCheckResume}
          />
          <Route exact path="/logout" component={LogOut} />
        </Switch>
      </>
    );
  }
}

export default RouteMain;
