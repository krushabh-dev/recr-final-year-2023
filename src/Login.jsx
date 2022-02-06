import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import fire from "./config/fire";
import "./Login.css";
import { NavBar } from "./src-app/Components";
import googlelogo from "./asset/img/googlelogo.svg";
import githublogo from "./asset/img/githublogo.svg";
import ForgrtPassword from "./ForgrtPassword";
const auth = getAuth();
const googleprovider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();

if (document.querySelector("#email-input")) {
  const email = document.querySelector("#email-input").value;
}

class Login extends React.Component {
  dologin() {
    const email = document.querySelector("#email-input").value;
    const password = document.querySelector("#Password-input").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Sign In:" + user);
        const uverif = userCredential.emailVerified;
        if (uverif == false) {
          alert("Do Verify Your Email First");
        } else {
          console.log("Email is Verified");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(
          "Error. ErrorCode" + errorCode + "errorMessage" + errorMessage
        );
        alert("Error : " + errorCode);
      });
  }

  FormInput(event) {
    const target = event.target;
  }

  signUp() {
    const email = document.querySelector("#email-input").value;
    const password = document.querySelector("#Password-input").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Sign In:" + user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Occured : " + errorCode);
        console.log(
          "Error. ErrorCode" + errorCode + "errorMessage" + errorMessage
        );
      });
  }

  render() {
    var myVar;
    function myFunction() {
      myVar = setTimeout(showPage, 5000);
    }

    function showPage() {
      if (document.getElementById("loader")) {
        document.getElementById("loader").style.display = "none";
      }
    }

    const signInWithGitAuth = () => {
      signInWithPopup(auth, gitprovider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          // The signed-in user info.
          const user = result.user;
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
        });
    };

    const signInWithGoogleAuth = () => {
      signInWithPopup(auth, googleprovider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          alert("Sign In Successfully");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          alert("Error Occured!");
        });
    };

    return (
      <>
        {/* <div id="loader">
          <img src={loaderimg} alt="loader" />
        </div> */}
        <div id="mainForms" onLoad={myFunction()}>
          <div id="loginForm">
            <div className="header bg-gradient-info py-5 py-lg-5">
              <div className="container pt-5 pb-2">
                <div className="header-body text-center mb-7">
                  <div className="justify-content-center row">
                    <div className="col-md-6 col-lg-5">
                      <h1 className="text-white">Welcome!</h1>
                      <p className="text-lead text-light">
                        Login To Create a New E-Resume or Update Your Existing
                        E-Resume
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator separator-bottom separator-skew zindex-100"></div>
            </div>
            <NavBar />
            <div className="container" id="register-form">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="login-wrap pt-5 p-1 pb-5 p-md-0 pb-md-5">
                    {/* <h4 className="card-title text-center h1">Bagcampus</h4>
                    <p className="card-description text-center">
                      <a
                        href="/#/signin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-5 p"
                      >
                        Don't Have an Account? Create One
                      </a>
                    </p> */}
                    <div className="forms-sample pt-0">
                      <div className="bg-transparent pb-5 card-header">
                        <div className="text-muted text-center mt-2 mb-3">
                          <small>Sign in with</small>
                        </div>
                        <div className="btn-wrapper text-center">
                          <a
                            //href="#"
                            className="btn-neutral btn-icon btn btn-default"
                            onClick={signInWithGitAuth}
                          >
                            <span className="btn-inner--icon">
                              <img alt="github" src={githublogo} />
                            </span>
                            <span className="btn-inner--text">Github</span>
                          </a>
                          <a
                            //href="#"
                            className="btn-neutral btn-icon btn btn-default"
                            onClick={signInWithGoogleAuth}
                          >
                            <span className="btn-inner--icon">
                              <img alt="google" src={googlelogo} />
                            </span>
                            <span className="btn-inner--text">Google</span>
                          </a>
                        </div>
                      </div>
                      <div className="px-3">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email-input"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="Password-input"
                            placeholder="Password"
                          />
                        </div>

                        <div className="form-check form-check-flat form-check-primary">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onChange={this.FormInput}
                              checked
                            />
                            Remember me
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary mr-2 w-100"
                          onClick={this.dologin}
                        >
                          Submit
                        </button>
                      </div>
                      <div className="d-flex justify-content-space-between px-4">
                        <div className="form-group my-2">
                          <label htmlFor="forgotPassword"></label>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#staticBackdrop"
                            className="form-check-input pl-4"
                            style={{ fontSize: "10px" }}
                          >
                            Forgot Password
                          </a>
                        </div>
                        <div className="form-group my-2">
                          <label htmlFor="forgotPassword"></label>
                          <a
                            href="/#/signup"
                            className="form-check-input pl-4"
                            style={{ fontSize: "10px" }}
                          >
                            Create New Account
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ForgrtPassword />
      </>
    );
  }
}

export default Login;
