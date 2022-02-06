import React from "react";
import "./EresumeSection.css";
import {
  getFirestore,
  collection,
  addDoc,
  documentId,
} from "firebase/firestore";
import "./EresumeForm.css";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { fire } from "../config/fire";
const auth = getAuth();
const db = getFirestore();
const dbreal = getDatabase();

const ZfCardTemp = (props) => {
  return (
    <>
      <div className="col-md-6 mb-4" id={props.keyid}>
        <a href={props.zflink} target="_blank" rel="noopener noreferrer">
          <div
            className="card position-relative shadow border-0"
            id="startImgonesection"
          >
            <div className="card-body p-4">
              <div className="pt-3">
                <h5 className="fw-medium">{props.zftitle}</h5>
                <p className="fs--1 mb-3 fw-medium">{props.zfpara}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center mt-n1">
                    <a
                      href={props.zflink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="mr-3"
                        src="/static/media/navigation.9dcc70fe.svg"
                        width="18"
                        alt="navigationSvg"
                      />
                      <span className="fs--1 fw-medium">Submit Detail</span>
                    </a>
                  </div>
                  <div className="show-onhover position-relative">
                    <button className="btn">
                      <img
                        src="/static/media/heart.9ded6ba4.svg"
                        width="20"
                        alt="step"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="col-md-6 mb-4" id={"co_" + props.keyid}>
        <a href="/#/dash/" target="_blank" rel="noopener noreferrer">
          <div
            className="card position-relative shadow border-0"
            id="startImgonesection"
          >
            <div className="card-body p-4">
              <div className="pt-3">
                <h5 className="fw-medium">{props.zftitle}</h5>
                <p className="fs--1 mb-3 fw-medium">{props.zfpara}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center mt-n1">
                    <a
                      href="/#/dash/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ✔
                      <span className="fs--1 fw-medium">
                        Already Completed.
                      </span>
                    </a>
                  </div>
                  <div className="show-onhover position-relative">
                    <button className="btn">
                      <img
                        src="/static/media/heart.9ded6ba4.svg"
                        width="20"
                        alt="step"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const EresumeHome = () => {
  const userdet = auth.currentUser;
  var res = userdet.email.split("@");
  var emailUsername = res[0];
  const eresumelink = "http://eresume.bagcampus.in/#/p/" + emailUsername;
  // const firstconst = [];
  // const secondconst = [];
  // const thirdconst = [];
  // const fourthconst = [];

  const copyeresumelinkbutton = () => {
    navigator.clipboard.writeText(eresumelink);
    alert("Copied! ");
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-11">
            <div
              class="position-absolute z-index--1 mr-10 mr-xxl-0"
              id="startImgone"
            >
              <img
                src="/static/media/bg.9f2ed1a6.png"
                id="startImgshape"
                alt="shape"
              />
            </div>
            <div className="resumeeditoptions">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div
                    className="card position-relative shadow border-0"
                    id="startImgonesection"
                  >
                    <div className="card-body p-2 d-flex">
                      <p className="pt-2 mr-4">
                        Your E-resume Link: {eresumelink}
                      </p>
                      <button
                        class="btn btn-info"
                        id="copyeresumelinkbutton"
                        onClick={copyeresumelinkbutton}
                      >
                        📋 Copy
                      </button>
                    </div>
                  </div>
                </div>

                {(() => {
                  const dbRef = ref(getDatabase());
                  // var gexdb = document.getElementById("secondid");
                  // gexdb.style.display = "block";
                  // var gpdb = document.getElementById("fourthid");
                  // gpdb.style.display = "block";

                  // Third Id setedudetail
                  get(
                    child(dbRef, "users/" + emailUsername + "/setbasicdetail/")
                  ).then((snapshot) => {
                    if (snapshot.exists()) {
                      const myJSON = snapshot.val();
                      var gbdb = document.getElementById("co_firstid");
                      gbdb.style.display = "block";
                    } else {
                      var gbdb = document.getElementById("firstid");
                      gbdb.style.display = "block";
                    }
                  });

                  // Third Id setedudetail
                  get(
                    child(dbRef, "users/" + emailUsername + "/setedudetail/")
                  ).then((snapshot) => {
                    if (snapshot.exists()) {
                      const myJSON = snapshot.val();
                      var gedb = document.getElementById("co_thirdid");
                      gedb.style.display = "block";
                    } else {
                      var gedb = document.getElementById("thirdid");
                      gedb.style.display = "block";
                    }
                  });

                  // Second Id setedudetail
                  get(
                    child(
                      dbRef,
                      "users/" + emailUsername + "/setexperiancedetail/"
                    )
                  ).then((snapshot) => {
                    if (snapshot.exists()) {
                      const myJSON = snapshot.val();
                      var gedb = document.getElementById("co_secondid");
                      gedb.style.display = "block";
                    } else {
                      var gedb = document.getElementById("secondid");
                      gedb.style.display = "block";
                    }
                  });

                  //  Fourth Id setedudetail
                  get(
                    child(
                      dbRef,
                      "users/" + emailUsername + "/setprojectdetail/"
                    )
                  ).then((snapshot) => {
                    if (snapshot.exists()) {
                      const myJSON = snapshot.val();
                      var gedb = document.getElementById("co_fourthid");
                      gedb.style.display = "block";
                    } else {
                      var gedb = document.getElementById("fourthid");
                      gedb.style.display = "block";
                    }
                  });
                })()}

                <ZfCardTemp
                  zflink="/#/dash/1"
                  zfpara="Basic Details Incude Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit."
                  zftitle="Basic Details "
                  keyid="firstid"
                />
                <ZfCardTemp
                  zflink="/#/dash/3"
                  zfpara="Educational Details Incude Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit."
                  zftitle="Educational Details "
                  keyid="thirdid"
                />
                <ZfCardTemp
                  zflink="/#/dash/4"
                  zfpara="Project Details Incude Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit."
                  zftitle="Project Details "
                  keyid="fourthid"
                />
                <ZfCardTemp
                  zflink="/#/dash/2"
                  zfpara="Experiance Details Incude Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit."
                  zftitle="Experiance Details "
                  keyid="secondid"
                />
                {/* <ZfCardTemp
                  zflink="/#/"
                  zfpara="Volunteering Experiance Incude Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit."
                  zftitle="Volunteering Experiance"
                />
                <ZfCardTemp
                  zflink="/#/"
                  zfpara="External Links Incude Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit."
                  zftitle="External Links"
                /> */}
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

class EresumeFormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: "",
      c_degree: "",
      cname: "",
      dspel: "",
      email: "",
      fname: "",
      lname: "",
      phone: "",
      uemail: "",
      yearofbirth: "",
      yearofstudy: "",
      yog: "",
      linkedin: "",
      error: {},
    };

    this.FormInput = this.FormInput.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  FormInput(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    //Adding Email
    const userdet = auth.currentUser;
    this.state.email = userdet.email;

    //Initiating An Empty Array of Error
    const firstError = [];

    //on form submit

    const StepOneSubmitEresume = (e) => {
      //function StepOneSubmitEresume(e) {
      e.preventDefault();

      //alert("Submit Btn Clicked" + this.state.email);
      var res = userdet.email.split("@");
      var emailUsername = res[0];

      set(ref(dbreal, "users/" + emailUsername + "/basicdetail/"), {
        fname: this.state.fname,
        lname: this.state.lname,
        collegename: this.state.cname,
        email: this.state.email,
        phone: this.state.phone,
        c_degree: this.state.c_degree,
        branch: this.state.branch,
        dspel: this.state.dspel,
        currentyearofstudy: this.state.yearofstudy,
        ygraduation: this.state.yog,
        yearofbirth: this.state.yearofbirth,
        linkedin: this.state.linkedin,
      }).catch((error) => {
        console.error(error);
        alert("An Temporary Error Occured");
        window.location.href = "/#/dash/";
        firstError.push(error);
      });

      setTimeout(function () {
        if (firstError.length === 0) {
          alert(
            "Congratulations! \n You Have Succesfully Completed This Portion"
          );
          set(ref(dbreal, "users/" + emailUsername + "/setbasicdetail/"), {
            basicdetail: "true",
          });
          window.location.href = "/#/dash/";
        }
      }, 4000);
    };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading"></h2>
            </div>
            <div className="col-md-12">
              <div className="div">
                <div className="row">
                  <div className="col-md-8">
                    <div className="zf-templateWidth">
                      <div className="form-heading">
                        <h2>Basic Details</h2>
                      </div>
                      <form onSubmit={StepOneSubmitEresume} id="form">
                        <div className="zf-templateWrapper">
                          <div className="form-area">
                            <div className="form-row">
                              <div className="form-group col-6">
                                <input
                                  className="form-control form-control-name"
                                  placeholder="First Name"
                                  id="f-name"
                                  type="text"
                                  maxLength="255"
                                  name="fname"
                                  fieldtype="7"
                                  value={this.state.fname}
                                  onChange={this.FormInput}
                                  required
                                />
                              </div>
                              <div className="form-group col-6">
                                <input
                                  className="form-control form-control-name"
                                  placeholder="Last Name"
                                  id="l-name"
                                  type="text"
                                  maxLength="255"
                                  name="lname"
                                  fieldtype="7"
                                  value={this.state.lname}
                                  onChange={this.FormInput}
                                  required
                                />
                              </div>

                              <div className="form-group col-12">
                                <input
                                  type="text"
                                  className="form-control form-control-name"
                                  placeholder="College Name"
                                  name="cname"
                                  checktype="c1"
                                  value=""
                                  maxLength="255"
                                  fieldtype="1"
                                  value={this.state.cname}
                                  onChange={this.FormInput}
                                  required
                                />
                              </div>
                            </div>
                            <input
                              fieldtype="9"
                              className="form-control form-control-name"
                              type="text"
                              maxLength="255"
                              placeholder="Email"
                              name="email"
                              checktype="c5"
                              value={this.state.email}
                              onChange={this.FormInput}
                              required
                            />
                            <div className="form-row">
                              <div className="form-group col-3">
                                <select
                                  type="text"
                                  compname="PhoneNumber_countrycodeval"
                                  className="form-control form-control-phone"
                                  name="PhoneNumber_countrycodeval"
                                  checktype="c7"
                                  maxLength="10"
                                  phoneformat="1"
                                  iscountrycodeenabled="true"
                                  id="international_PhoneNumber_countrycodeval"
                                  valtype="code"
                                  value={this.state.PhoneNumber_countrycodeval}
                                  onChange={this.FormInput}
                                  required
                                >
                                  <option value="+91">+91</option>
                                </select>
                              </div>
                              <div className="form-group col-9">
                                <input
                                  type="text"
                                  compname="PhoneNumber"
                                  placeholder="Contact Number"
                                  name="phone"
                                  maxLength="20"
                                  checktype="c7"
                                  value=""
                                  phoneformat="1"
                                  iscountrycodeenabled="true"
                                  fieldtype="11"
                                  id="international_PhoneNumber_countrycode"
                                  valtype="number"
                                  phoneformattype="2"
                                  className="form-control form-control-phone"
                                  value={this.state.phone}
                                  onChange={this.FormInput}
                                  required
                                />
                              </div>
                            </div>

                            <div className="select-area">
                              <select
                                name="c_degree"
                                checktype="c1"
                                className="custom-select"
                                id="CurrentlyPursuing"
                                value={this.state.c_degree}
                                onChange={this.FormInput}
                                required
                              >
                                <option disabled="">Currently Pursuing</option>
                                <option value="BA or MA">B.A/M.A.</option>
                                <option value="BCom or MCom">
                                  B.Com/M.Com
                                </option>
                                <option value="BSc or MSc">B.Sc/M.Sc</option>
                                <option value="BTech or BE">B.Tech/BE</option>
                                <option value="BBA or MBA">BBA/MBA</option>
                                <option value="Law">Law</option>
                                <option value="MTech or ME">M. Tech/ME</option>
                                <option value="Other">Other</option>
                              </select>
                              <div className="invalid-feedback">
                                Please select a valid Rule.
                              </div>
                            </div>

                            <div className="select-area">
                              <select
                                className="custom-select"
                                id="CurrentlyPursuing"
                                name="branch"
                                checktype="c1"
                                value={this.state.branch}
                                onChange={this.FormInput}
                                required
                              >
                                <option disabled="">Branch</option>
                                <option value="Computer Science">
                                  Computer Science
                                </option>
                                <option value="Information Technology">
                                  Information Technology
                                </option>
                                <option value="Management">Management</option>
                                <option value="Electronics And TeleComunication">
                                  Electronics And TeleComunication
                                </option>
                                <option value="Mechanical (E)">
                                  Mechanical (E)
                                </option>
                                <option value="Medical">Medical</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>
                                <option value="Other">Other</option>
                              </select>
                              <div className="invalid-feedback">
                                Please select a valid Rule.
                              </div>
                            </div>

                            <textarea
                              type="text"
                              placeholder="Describe Your Course, Degree, Specialisation in 250 Words"
                              name="dspel"
                              value=""
                              className="form-control form-control-phone"
                              value={this.state.dspel}
                              onChange={this.FormInput}
                              required
                            ></textarea>
                            <div className="form-row">
                              <div className="col-6">
                                <div className="select-area">
                                  <select
                                    className="custom-select"
                                    id="CurrentlyPursuing"
                                    name="yearofstudy"
                                    checktype="c1"
                                    value={this.state.yearofstudy}
                                    onChange={this.FormInput}
                                    required
                                  >
                                    <option defaultValue disabled="">
                                      Current Year of Study
                                    </option>
                                    <option value="First Year">
                                      First Year
                                    </option>
                                    <option value="Second Year">
                                      Second Year
                                    </option>
                                    <option value="Third Year">
                                      Third Year
                                    </option>
                                    <option value="Fourth Year">
                                      Fourth Year
                                    </option>
                                    <option value="Fifth Year">
                                      Fifth Year
                                    </option>
                                  </select>
                                  <div className="invalid-feedback">
                                    Please select a valid Rule.
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="select-area">
                                  <select
                                    className="custom-select"
                                    id="yog"
                                    name="yog"
                                    checktype="c1"
                                    value={this.state.yog}
                                    onChange={this.FormInput}
                                    required
                                  >
                                    <option defaultValue disabled="">
                                      Year of Graduation
                                    </option>
                                    <option value="before2013">
                                      Before 2013
                                    </option>
                                    <option value="2013">2013</option>
                                    <option value="2014">2014</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="after2026">
                                      After 2026
                                    </option>
                                  </select>
                                  <div className="invalid-feedback">
                                    Please select a valid Rule.
                                  </div>
                                </div>
                              </div>
                            </div>

                            <input
                              type="text"
                              placeholder="Year of Birth"
                              name="yearofbirth"
                              checktype="c2"
                              value=""
                              maxLength="18"
                              className="form-control form-control-phone"
                              value={this.state.yearofbirth}
                              onChange={this.FormInput}
                              required
                            />
                            <input
                              type="text"
                              placeholder="Linkedin Profile Link"
                              name="linkedin"
                              checktype="c2"
                              value=""
                              maxLength="255"
                              className="form-control form-control-phone"
                              value={this.state.linkedin}
                              onChange={this.FormInput}
                              required
                            />
                          </div>
                          <ul>
                            <li className="zf-fmFooter">
                              <button
                                className="zf-submitColor"
                                // onClick={StepOneSubmitEresume}
                              >
                                Submit
                              </button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class EresumeFormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ptitle: "",
      pcompany: "",
      error: {},
    };

    this.FormInput = this.FormInput.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  FormInput(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
    //console.log(this.state.);
  }

  render() {
    const userdet = auth.currentUser;
    var res = userdet.email.split("@");
    var emailUsername = res[0];
    const wsubmitbtn = async () => {
      try {
        const docRef = await addDoc(collection(db, emailUsername + "/"), {
          positionTitle: this.state.ptitle,
          positionCompany: this.state.pcompany,
          positionStartDate: this.state.psdate,
          positionEndDate: this.state.pedate,
          positionDescription: this.state.descposition,
          positionLocation: this.state.ploc,
          positionType: this.state.ptype,
        });
        //console.log("Document written with ID: ", docRef.id);
        set(ref(dbreal, "users/" + emailUsername + "/setexperiancedetail/"), {
          edudetail: "true",
        });
        alert("Your Experiance Details are Updated!");
        window.location.href = "/#/dash/";
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("An Error Encountered");
      }
    };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading"></h2>
            </div>
            <div className="col-md-12">
              <div className="div">
                <div className="row">
                  <div className="col-md-8">
                    <div className="zf-templateWidth">
                      <div className="form-heading">
                        <h2>Experiance Details</h2>
                      </div>
                      <div id="form">
                        <div className="zf-templateWrapper">
                          <div className="form-area">
                            <div className="form-row">
                              <div className="form-group col-12">
                                <input
                                  type="text"
                                  className="form-control form-control-name"
                                  placeholder="Position"
                                  name="ptitle"
                                  value={this.state.ptitle}
                                  onChange={this.FormInput}
                                  required
                                />
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control form-control-name"
                              placeholder="Company Name"
                              name="pcompany"
                              value={this.state.pcompany}
                              onChange={this.FormInput}
                              required
                            />
                            <div className="form-row">
                              <div className="form-group col-6">
                                <input
                                  type="date"
                                  className="form-control form-control-name"
                                  placeholder="Start Date"
                                  name="psdate"
                                  value={this.state.psdate}
                                  onChange={this.FormInput}
                                  required
                                />
                                <label htmlFor="start_date">
                                  Position Start Date
                                </label>
                              </div>
                              <div className="form-group col-6">
                                <input
                                  type="date"
                                  className="form-control form-control-name"
                                  placeholder="End Date"
                                  name="pedate"
                                  value={this.state.pedate}
                                  onChange={this.FormInput}
                                  required
                                />
                                <label htmlFor="end_date">
                                  Position End Date
                                </label>
                              </div>
                            </div>
                            <textarea
                              type="text"
                              className="form-control form-control-name"
                              placeholder="Describe About Position"
                              name="descposition"
                              value={this.state.descposition}
                              onChange={this.FormInput}
                              required
                            ></textarea>
                            <div className="form-row">
                              <div className="col-6">
                                <input
                                  type="text"
                                  className="form-control form-control-name"
                                  placeholder="Location"
                                  name="ploc"
                                  value={this.state.ploc}
                                  onChange={this.FormInput}
                                  required
                                />
                              </div>
                              <div className="col-6">
                                <div className="select-area">
                                  <select
                                    className="custom-select"
                                    id="ptype"
                                    name="ptype"
                                    value={this.state.ptype}
                                    onChange={this.FormInput}
                                    required
                                  >
                                    <option defaultValue disabled="">
                                      Position Type
                                    </option>
                                    <option value="Intern">Intern</option>
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Other">Other</option>
                                  </select>
                                  <div className="invalid-feedback">
                                    Please select a valid Rule.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li className="zf-fmFooter">
                              <button
                                className="zf-submitColor"
                                onClick={wsubmitbtn}
                              >
                                Submit
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class EresumeFormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ptitle: "",
      pcompany: "",
      error: {},
    };

    this.FormInput = this.FormInput.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  FormInput(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
    //console.log(this.state.);
  }

  render() {
    const userdet = auth.currentUser;
    console.log(userdet);
    var res = userdet.email.split("@");
    var emailUsername = res[0];

    const StepThreeSubmitEresume = (e) => {
      const thirdError = [];
      //function StepOneSubmitEresume(e) {
      e.preventDefault();
      //alert("Submit Btn Clicked" + this.state.email);
      var res = userdet.email.split("@");
      var emailUsername = res[0];
      console.log(this.state);
      set(ref(dbreal, "users/" + emailUsername + "/educdetail/"), {
        highestLevelofDegree: this.state.highestLevelofDegree,
        collegeName: this.state.collegeName,
        collegeLocation: this.state.collegeLocation,
        universityName: this.state.universityName,
        cpursuing: this.state.cpursuing,
        fieldorbranch: this.state.fieldorbranch,
        desceducation: this.state.desceducation,
        collegesdate: this.state.collegesdate,
        collegeedate: this.state.collegeedate,
      }).catch((error) => {
        console.error(error);
        alert("An Temporary Error Occured");
        window.location.href = "/#/dash/";
        thirdError.push(error);
      });

      setTimeout(function () {
        if (thirdError.length === 0) {
          alert(
            "Congratulations! \n You Have Succesfully Completed This Portion"
          );
          set(ref(dbreal, "users/" + emailUsername + "/setedudetail/"), {
            educationDetail: "true",
          });
          window.location.href = "/#/dash/";
        }
      }, 4000);
    };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading"></h2>
            </div>
            <div className="col-md-12">
              <div className="div">
                <div className="row">
                  <div className="col-md-8">
                    <div className="zf-templateWidth">
                      <div className="form-heading">
                        <h2>Educational Details</h2>
                      </div>
                      <form id="form" onSubmit={StepThreeSubmitEresume}>
                        <div className="zf-templateWrapper">
                          <div className="form-area">
                            <div className="form-row">
                              <div className="form-group col-12">
                                <div className="select-area">
                                  <select
                                    className="custom-select"
                                    id="highestLevelofDegree"
                                    name="highestLevelofDegree"
                                    value={this.state.highestLevelofDegree}
                                    onChange={this.FormInput}
                                    required
                                  >
                                    <option defaultValue disabled="">
                                      Highest Level of Education
                                    </option>
                                    <option value="High School">
                                      High School
                                    </option>
                                    <option value="Pursuing Graduation Equivantent College">
                                      Pursuing Graduation Equivantent College
                                    </option>
                                    <option value="Completed Graduation Equivantent College">
                                      Completed Graduation Equivantent College
                                    </option>
                                    <option value="Pursuing Post-Graduation Equivantent College">
                                      Pursuing Post-Graduation Equivantent
                                      College
                                    </option>
                                    <option value="Completed Post-Graduation Equivantent College">
                                      Completed Post-Graduation Equivantent
                                      College
                                    </option>
                                    <option value="Pursuing PHD">
                                      Pursuing PHD
                                    </option>
                                    <option value="Completed PHD">
                                      Completed PHD
                                    </option>
                                    <option value="College Dropout">
                                      College Dropout
                                    </option>
                                    <option value="Other">Other</option>
                                  </select>
                                  <div className="invalid-feedback">
                                    Please select a valid Rule.
                                  </div>
                                </div>
                              </div>
                              <div className="form-group col-8">
                                <input
                                  type="text"
                                  className="form-control form-control-name"
                                  placeholder="College Name"
                                  name="collegeName"
                                  value={this.state.collegeName}
                                  onChange={this.FormInput}
                                  required
                                />
                              </div>
                              <div className="form-group col-4">
                                <input
                                  type="text"
                                  className="form-control form-control-name"
                                  placeholder="Location"
                                  name="collegeLocation"
                                  value={this.state.collegeLocation}
                                  onChange={this.FormInput}
                                  required
                                />
                              </div>
                            </div>

                            <input
                              type="text"
                              className="form-control form-control-name"
                              placeholder="University Name"
                              name="universityName"
                              value={this.state.universityName}
                              onChange={this.FormInput}
                              required
                            />

                            <div className="form-row">
                              <div className="col-6">
                                <div className="select-area">
                                  <select
                                    className="custom-select"
                                    id="cpursuing"
                                    name="cpursuing"
                                    value={this.state.cpursuing}
                                    onChange={this.FormInput}
                                    required
                                  >
                                    <option selected="true" disabled="">
                                      Currently Pursuing
                                    </option>
                                    <option value="B.A/M.A.">B.A/M.A.</option>
                                    <option value="B.Com/M.Com">
                                      B.Com/M.Com
                                    </option>
                                    <option value="B.Sc/M.Sc">B.Sc/M.Sc</option>
                                    <option value="B.Tech/BE">B.Tech/BE</option>
                                    <option value="BBA/MBA">BBA/MBA</option>
                                    <option value="Law">Law</option>
                                    <option value="M. Tech/ME">
                                      M. Tech/ME
                                    </option>
                                    <option value="Other">Other</option>
                                  </select>
                                  <div className="invalid-feedback">
                                    Please select a valid Rule.
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="select-area">
                                  <select
                                    className="custom-select"
                                    id="fieldorbranch"
                                    name="fieldorbranch"
                                    value={this.state.fieldorbranch}
                                    onChange={this.FormInput}
                                    required
                                  >
                                    <option defaultValue disabled="">
                                      Field or Branch
                                    </option>
                                    <option value="Computer Science">
                                      Computer Science
                                    </option>
                                    <option value="Information Technology">
                                      Information Technology
                                    </option>
                                    <option value="Management">
                                      Management
                                    </option>
                                    <option value="Electronics And TeleComunication">
                                      Electronics And TeleComunication
                                    </option>
                                    <option value="Mechanical (E)">
                                      Mechanical (E)
                                    </option>
                                    <option value="Medical">Medical</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Arts">Arts</option>
                                    <option value="Other">Other</option>
                                  </select>
                                  <div className="invalid-feedback">
                                    Please select a valid Rule.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <textarea
                              type="text"
                              className="form-control form-control-name"
                              placeholder="Describe About Current Education Degree"
                              name="desceducation"
                              value={this.state.desceducation}
                              onChange={this.FormInput}
                              required
                            ></textarea>

                            <div className="form-row">
                              <div className="form-group col-6">
                                <input
                                  type="date"
                                  className="form-control form-control-name"
                                  placeholder="Start Date"
                                  name="collegesdate"
                                  value={this.state.collegesdate}
                                  onChange={this.FormInput}
                                  required
                                />
                                <label htmlFor="start_date">
                                  College Start Date
                                </label>
                              </div>
                              <div className="form-group col-6">
                                <input
                                  type="date"
                                  className="form-control form-control-name"
                                  placeholder="Expected End Date"
                                  name="collegeedate"
                                  value={this.state.collegeedate}
                                  onChange={this.FormInput}
                                  required
                                />
                                <label htmlFor="end_date">
                                  College End Date (Expected)
                                </label>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li className="zf-fmFooter">
                              <button className="zf-submitColor">Submit</button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
class EresumeFormFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ptitle: "",
      pcompany: "",
      error: {},
    };

    this.FormInput = this.FormInput.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  FormInput(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
    //console.log(this.state.);
  }

  render() {
    const userdet = auth.currentUser;
    var res = userdet.email.split("@");
    var emailUsername = res[0];
    const wysubmitbtn = async () => {
      try {
        const docRef = await addDoc(collection(db, emailUsername + "/"), {
          projectTitle: this.state.projectTitle,
          desceducation: this.state.desceducation,
          projectLink: this.state.projectLink,
          projsdate: this.state.projsdate,
          projedate: this.state.projedate,
        });
        //console.log("Document written with ID: ", docRef.id);
        set(ref(dbreal, "users/" + emailUsername + "/setprojectdetail/"), {
          edudetail: "true",
        });
        alert("Your Project Details are Updated!");
        window.location.href = "/#/dash/";
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("An Error Encountered");
      }
    };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading"></h2>
            </div>
            <div className="col-md-12">
              <div className="div">
                <div className="row">
                  <div className="col-md-8">
                    <div className="zf-templateWidth">
                      <div className="form-heading">
                        <h2>Project Details</h2>
                        <p>You Can Add Only One Project Detail</p>
                      </div>
                      <div id="form">
                        <div className="zf-templateWrapper">
                          <div className="form-area">
                            <input
                              type="text"
                              className="form-control form-control-name"
                              placeholder="Project Title"
                              name="projectTitle"
                              value={this.state.projectTitle}
                              onChange={this.FormInput}
                              required
                            />
                            <textarea
                              type="text"
                              className="form-control form-control-name"
                              placeholder="Describe About Current Education Degree"
                              name="desceducation"
                              value={this.state.desceducation}
                              onChange={this.FormInput}
                              required
                            ></textarea>
                            <input
                              type="text"
                              className="form-control form-control-name"
                              placeholder="Link to Project"
                              name="projectLink"
                              value={this.state.projectLink}
                              onChange={this.FormInput}
                              required
                            />

                            <div className="form-row">
                              <div className="form-group col-6">
                                <input
                                  type="date"
                                  className="form-control form-control-name"
                                  placeholder="Start Date"
                                  name="projsdate"
                                  value={this.state.projsdate}
                                  onChange={this.FormInput}
                                  required
                                />
                                <label htmlFor="start_date">
                                  Project Start Date
                                </label>
                              </div>
                              <div className="form-group col-6">
                                <input
                                  type="date"
                                  className="form-control form-control-name"
                                  placeholder="Expected End Date"
                                  name="projedate"
                                  value={this.state.projedate}
                                  onChange={this.FormInput}
                                  required
                                />
                                <label htmlFor="end_date">
                                  Project End Date (Expected)
                                </label>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li className="zf-fmFooter">
                              <button
                                className="zf-submitColor"
                                onClick={wysubmitbtn}
                              >
                                Submit
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export {
  EresumeHome,
  EresumeFormOne,
  EresumeFormTwo,
  EresumeFormThree,
  EresumeFormFour,
};
