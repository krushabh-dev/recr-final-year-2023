import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../src-app/Components";
import {
  EresumeFormOne,
  EresumeFormThree,
  EresumeFormTwo,
  EresumeFormFour,
} from "../src-app/EresumeForm";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Login from "../Login";

const auth = getAuth();
class RedirectEForm extends Component {
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
        {this.state.user ? (
          <RedirectiEForm email={this.state.user.email} />
        ) : (
          <Login />
        )}
      </>
    );
  }
}

const RedirectiEForm = (props) => {
  const { dcount } = useParams();
  return (
    <>
      <section id="eresumeformarea">
        <NavBar emailloged={props.email} />

        {(() => {
          if (dcount === "1") {
            return (
              <>
                <EresumeFormOne />
              </>
            );
          } else if (dcount === "2") {
            return (
              <>
                <EresumeFormTwo />
              </>
            );
          } else if (dcount === "3") {
            return (
              <>
                <EresumeFormThree />
              </>
            );
          } else if (dcount === "4") {
            return (
              <>
                <EresumeFormFour />
              </>
            );
          }
        })()}
      </section>
    </>
  );
};

export default RedirectEForm;
