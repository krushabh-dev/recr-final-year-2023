import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import fire from "./config/fire";
import "./Login.css";
import { NavBar } from "./src-app/Components";
import googlelogo from "./asset/img/googlelogo.svg";
import githublogo from "./asset/img/githublogo.svg";
const auth = getAuth();

if (document.querySelector("#email-input")) {
  const email = document.querySelector("#email-input").value;
}

class Register extends React.Component {
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
        // console.log("Sign In:" + user);
        //Redirect To Email Verification
        window.location.replace("/#/emailverify");
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
                        Register To Create a New E-Resume.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator separator-bottom separator-skew zindex-100"></div>
            </div>
            <NavBar />
            <div className="container login-form" id="register-form">
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
                            href="#"
                            className="btn-neutral btn-icon btn btn-default"
                          >
                            <span className="btn-inner--icon">
                              <img alt="github" src={githublogo} />
                            </span>
                            <span className="btn-inner--text">Github</span>
                          </a>
                          <a
                            href="#"
                            className="btn-neutral btn-icon btn btn-default"
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
                          <label className="label" htmlFor="name">
                            User Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            id="uname-input"
                            name="uname"
                            onChange={this.myuname}
                          />
                        </div>
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="example@domain.extension"
                            id="email-input"
                            name="email"
                            onChange={this.myemail}
                          />
                        </div>
                        <div className="form-group">
                          <label className="label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="Password-input"
                            name="Password"
                          />
                        </div>
                        <div className="form-group">
                          <label className="label" htmlFor="password">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            id="ConfirmPassword-input"
                            name="ConfirmPassword"
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary submit form-control btn-primary"
                            onClick={this.signUp}
                          >
                            <span className="fa fa-paper-plane"></span>
                            Submit
                          </button>
                        </div>
                        <div className="form-group">
                          <label htmlFor="">
                            By Regsitering You Agree Privacy Policies
                          </label>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked
                            disabled
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-space-between px-4 ">
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
                            href="/#/dash"
                            className="form-check-input pl-4"
                            style={{ fontSize: "10px" }}
                          >
                            Already Have Account
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
      </>
    );
  }
}

export default Register;
