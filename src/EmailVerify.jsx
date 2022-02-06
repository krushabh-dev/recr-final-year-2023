import React from "react";
import fire from "./config/fire";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { NavBar } from "./src-app/Components";
import "./asset/css/everify.css";
const auth = getAuth();

const mailtra = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      alert("Verification Email is Sent On Email");
    })
    .catch((err) => {
      alert("An Error Occured : " + err);
    });
};

const EmailVerify = (props) => {
  return (
    <>
      <div id="email-verify">
        <NavBar />
        <div className="container">
          <div className="row mt-5 ml-md-5 pl-md-5 fullscreen d-flex align-items-center justify-content-between header-lg">
            <div className="col-md-12 verify-mail-card">
              <h4>You Must Verify Your Email Address</h4>
              <button
                onClick={mailtra}
                class="ima-bagcampus-btn btn-primary primary-btn-shadow"
              >
                Send Auth Link
              </button>
              <br />
              <span>Email To Be Sent To {props.mail}</span>
              <br />
              <a href="/" target="_blank" rel="noopener noreferrer">
                Already Have Verified?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerify;
