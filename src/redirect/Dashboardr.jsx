import React, { Component } from "react";
import fire from "../config/fire";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Login from "../Login";
import Dashboard from "../src-app/Dashboard";
const auth = getAuth();

class Dashboardr extends Component {
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
        {(() => {
          if (this.state.user) {
            if (this.state.user.emailVerified == false) {
              return window.location.replace("/#/emailverify");
            }
          }
        })()}
        {/* {this.state.user ? <Dashboard /> : <Login />} */}
        {this.state.user ? (
          <Dashboard email={this.state.user.email} />
        ) : (
          <Login />
        )}
      </>
    );
  }
}

export default Dashboardr;
