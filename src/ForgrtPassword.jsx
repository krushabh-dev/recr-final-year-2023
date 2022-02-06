import React from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();

class ForgrtPassword extends React.Component {
  sendFP() {
    const email = document.querySelector("#f-email-input").value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Reset Password Email is Sent To " + email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Occured: " + errorCode);
      });
  }

  render() {
    return (
      <>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Forgot Password?
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      @
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Enter Your Email Address"
                    id="f-email-input"
                  />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <button
                    type="button"
                    className="btn btn-info w-100"
                    onClick={this.sendFP}
                  >
                    Send Change Password Link
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ForgrtPassword;
