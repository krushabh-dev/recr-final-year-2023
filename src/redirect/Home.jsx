import React, { Component } from "react";
import fire from "../config/fire";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Welcome from "../src-app/Welcome";

const auth = getAuth();
class Home extends Component {
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
        <section id="Home_Page">
          {/* {(() => {
            if (this.state.user) {
              if (this.state.user.emailVerified == false) {
                return window.location.replace(
                  "https://app.bagcampus.in/#/evs"
                );
              }
            }
          })()} 
          */}
          {this.state.user ? (
            <Welcome email={this.state.user.email} />
          ) : (
            <Welcome />
          )}
        </section>
      </>
    );
  }
}

export default Home;
