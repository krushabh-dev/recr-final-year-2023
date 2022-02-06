import React from "react";

  signUp() {
    const email = document.querySelector("#email-input").value;
    const password = document.querySelector("#Password-input").value;
    const unmae = document.querySelector("#uname-input").value;
    const ConfirmPassword = document.querySelector("#ConfirmPassword-input").value;

    if(password === ConfirmPassword){
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: unmae,
        }).catch((error) => {
          alert("Error Occured: " + error);
        });
        // console.log("Sign In:" + user);
        //redirect to email verification /evs
        window.location.replace("https://app.bagcampus.in/#/evs");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(
          "Error. ErrorCode" + errorCode + "errorMessage" + errorMessage
        );
      });
    }else{
        document.getElementById("ConfirmPassword-input").style.borderColor = "#f3061d";
        var error = "Please Confirm Password";
        document.getElementById("ConfirmPassword-input").appendChild(error);
    }

  }


const form = () => {
  return (
    <>
      <div class="container" id="register-form">
        <div
          class="row justify-content-center"
          style="
    justify-content: center;
"
        >
          <div class="col-md-5">
            <div class="login-wrap p-4 p-md-5">
              <h3 class="mb-4">Register Now</h3>
              <form action="#" class="signup-form">
                <div class="form-group">
                  <label class="label" for="name">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="User Name"
                    id="uname-input"
                    name="uname"
                    onChange={this.myuname}
                  />
                </div>
                <div class="form-group">
                  <label class="label" for="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="example@domain.extension"
                    id="email-input"
                    name="email"
                    onChange={this.myemail}
                  />
                </div>
                <div class="form-group">
                  <label class="label" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    id="Password-input"
                    name="Password"
                  />
                </div>
                <div class="form-group">
                  <label class="label" for="password">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    id="ConfirmPassword-input"
                    name="ConfirmPassword"
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary submit form-control btn-primary"
                    onClick={this.signUp}
                  >
                    <span class="fa fa-paper-plane"></span>
                    Submit
                  </button>
                </div>
                <div class="form-group">
                  <label htmlFor="">
                    By Regsitering You Agree Privacy Policies
                  </label>
                  <input type="checkbox" name="" id="" checked disabled />
                </div>
              </form>
              <p class="text-center">
                Already have an account? <a href="/#/">Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default form;
