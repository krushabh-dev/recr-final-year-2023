import React from "react";
import "./Nav.css";
import "./ResumeHeader.css";
import "./EresumeTemplateSection.css";
import "./ProcessSection.css";
import "./ExploreMoreServiceSection.css";
import "./SubscriberSection.css";
import "./FooterSection.css";
import "./Enquiry_Form.css";
import "./hirewithsol.css";
import "./faqrsection.css";
import "./pricingsection.css";
import playbtn from "../asset/img/play.svg";
import resumenavbrn from "../asset/img/resumetempl/navigation.svg";
import oneimg from "../asset/img/resumetempl/79.webp";
import twoimg from "../asset/img/resumetempl/80.webp";
import threeimg from "../asset/img/resumetempl/81.webp";
import destimg from "../asset/img/resumetempl/shape.svg";
import selection from "../asset/img/steps/selection.svg";
import taxi from "../asset/img/steps/taxi.svg";
import waterSport from "../asset/img/steps/water-sport.svg";
import fastandeasy from "../asset/img/steps/fastandeasy.svg";
import Stepsbgimg from "../asset/img/steps/bg.png";
import sendSvg from "../asset/img/steps/send.svg";
import buildingSvg from "../asset/img/steps/building.svg";
import heartSvg from "../asset/img/steps/heart.svg";
import rocketSvg from "../asset/img/steps/rocket.svg";
import document from "../asset/img/steps/document.svg";
import rupees from "../asset/img/steps/rupee.svg";
import rankup from "../asset/img/steps/rankup.svg";
import idashboard from "../asset/img/steps/dashboard.svg";
import map from "../asset/img/steps/map.svg";
import EmShapeSvg from "../asset/img/category/shape.svg";
import EmEventSvg from "../asset/img/category/event.svg";
import EmAlertSvg from "../asset/img/category/alert.svg";
import EmCompetitionSvg from "../asset/img/category/competition.svg";
import EmIconSvg from "../asset/img/category/icon4.png";
import NSmail from "../asset/img/cta/mail.svg";
import NSsendBtn from "../asset/img/cta/send.png";
import NSshapeOne from "../asset/img/cta/shape-bg1.png";
import NSshapeBg from "../asset/img/cta/shape-bg2.png";
import PriceTag from "../asset/img/price-tag.svg";
const logedinemail = "@";

const NavBar = (props) => {
  const logedinemail = props.emailloged;
  return (
    <>
      {/* <nav
        className="navbar navbar-expand-lg navbar-light fixed-top d-block"
        data-navbar-on-scroll="data-navbar-on-scroll"
        id="navMainStyle"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <span id="navbarlogo">Bagcampus</span>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="navbar-collapse border-top border-lg-0 mt-4 mt-lg-0 collapse"
            id="navbarSupportedContent"
          >
            <ul
              className="
                navbar-nav
                ml-auto
                pt-2 pt-lg-0
                font-base
                align-items-lg-center align-items-start
              "
            >
              {(() => {
                if (logedinemail !== undefined) {
                  //if (this.state.user.emailVerified == false) {
                  return (
                    <>
                      <li className="nav-item px-3 px-xl-4">
                        <a
                          className="nav-link fw-medium"
                          aria-current="page"
                          href="/#/dash"
                        >
                          {logedinemail}
                        </a>
                      </li>
                      <li className="nav-item px-3 px-xl-4">
                        <a
                          className="nav-link fw-medium"
                          aria-current="page"
                          href="/#/logout"
                        >
                          Logout
                        </a>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <>
                      <li className="nav-item px-3 px-xl-4">
                        <a
                          className="nav-link fw-medium"
                          aria-current="page"
                          href="/#/dash"
                        >
                          Login
                        </a>
                      </li>
                      <li className="nav-item px-3 px-xl-4">
                        <a
                          className="btn btn-outline-dark order-1 order-lg-0 fw-medium"
                          href="/#/signup"
                        >
                          Sign Up
                        </a>
                      </li>
                    </>
                  );
                }
              })()}

              <li className="nav-item dropdown px-3 px-lg-0">
                <a
                  className="
                    d-inline-block
                    ps-0
                    py-2
                    pe-3
                    text-decoration-none
                    dropdown-toggle
                    fw-medium
                  "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end border-0 shadow-lg"
                  id="EnNavbarDropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      EN
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <header class="header">
        <div class="window-notification primary-shadow">
          <span>
            <h2>
              <a
                href="https://alerts.bagcampus.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                To Explore Great Internship and Jobs Openings Visit Bagcampus
                Alerts Website
              </a>
              .
            </h2>
          </span>
        </div>
        <div class="navbar-area pt-3" id="navMainStyle">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="index.html">
                    <h4>Bagcampus</h4>
                  </a>
                  <button
                    class="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>
                  <div
                    class="navbar-collapse sub-menu-bar collapse"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <a class="page-scroll" href="#home">
                          Home
                        </a>
                      </li>

                      <li class="nav-item nav-item-has-children has-megamenu">
                        <a
                          href="#"
                          class="nav-link-item drop-trigger page-scroll"
                        >
                          For Candidates
                        </a>
                        <div
                          class="
                          sub-menu
                          megamenu
                          megadropdown-center
                          d-lg-flex
                          align-items-center
                        "
                          id="submenu-0"
                        >
                          <ul class="col-lg-8 col-12 row-lg list-unstyled py-lg-7">
                            <div class="left-submenu">
                              <li class="col-lg-3">
                                <a href="http://app.bagcampus.in/">
                                  <div class="single-dropdown-block">
                                    <h1>Bagcampus Learnings</h1>
                                    <p>
                                      Bagcampus is Soon Launcing Learnings Which
                                      Helps You To Grab New Skills
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li class="col-lg-3">
                                <a href="http://prepare.bagcampus.in">
                                  <div class="single-dropdown-block">
                                    <h1>Interview Prepration</h1>
                                    <p>
                                      Bagcampus is Soon Launcing Interview
                                      Prepration Method To Start Your Career
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li class="col-lg-3">
                                <a href="http://alerts.bagcampus.in">
                                  <div class="single-dropdown-block">
                                    <h1>Bagcampus Alerts</h1>
                                    <p>
                                      Get Notified With Top Internships, Jobs,
                                      Government Opportunity and More
                                      Opportunities
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </div>
                            <div class="right-submenu">
                              <li class="col-lg-3">
                                <a href="http://eresume.bagcampus.in/">
                                  <div class="single-dropdown-block">
                                    <h1>Bagcampus Eresume</h1>
                                    <p>
                                      Bagcampus Eresume is Online Digital Resume
                                      System. Apply Opportunities Just with Your
                                      E-resume Link
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li class="col-lg-3">
                                <a href="http://events.bagcampus.in/">
                                  <div class="single-dropdown-block">
                                    <h1>Bagcampus Events</h1>
                                    <p>
                                      Bagcampus Conduct Diffrent Events for
                                      Students. Career Counselling Or Career
                                      Alerts We Are Always For Your Help
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li class="col-lg-3">
                                <a href="https://compete.bagcampus.in/">
                                  <div class="single-dropdown-block">
                                    <h1>Bagcampus Competitions</h1>
                                    <p>
                                      Learnings Made Easy With Bagcampus
                                      Competitions. Compete With Thousands of
                                      Competitors and Showcase Your Knowledge
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </li>
                      <li class="nav-item nav-item-has-children">
                        <a class="page-scroll" href="#about">
                          For Employers
                        </a>
                        <div
                          class="
                          sub-menu
                          megamenu
                          megadropdown-center
                          d-lg-flex
                          align-items-center
                        "
                          id="submenu-1"
                        >
                          <ul class="col-lg-8 col-12 row-lg list-unstyled py-lg-7">
                            <div class="left-submenu">
                              <li class="col-lg-3">
                                <a href="http://dashboard.bagcampus.in/">
                                  <div class="single-dropdown-block">
                                    <h1>Post Free Job/Internship</h1>
                                    <p>
                                      Post Your Jobs Free On Bagcampus And Many
                                      Other Career Websites Simply. We Make it
                                      Easy To Post and Regulate Job
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li class="col-lg-3">
                                <a href="http://bagcampus.in/pricing">
                                  <div class="single-dropdown-block">
                                    <h1>Hire Candidate</h1>
                                    <p>
                                      Hiring Candidate is Easy With Bagcampus.
                                      You Can Manage To Find Top Performer in
                                      Your Desired Domain
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li class="col-lg-3">
                                <a href="http://bagcampus.in/pricing">
                                  <div class="single-dropdown-block">
                                    <h1>Conduct Competition</h1>
                                    <p>
                                      Conduct a Project Competition in Your
                                      Preffered Domain and Hire Best Candidate
                                    </p>
                                  </div>
                                </a>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#english">
                          EN
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const ResumeHeader = () => {
  return (
    <>
      <section id="ResumeHeader">
        <div className="bg-holder"></div>

        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-9 col-lg-6 text-left py-5">
              <h4 className="fw-bold text-danger mb-3">
                You are Invited to Hire with Bagcampus
              </h4>
              <h1 className="hero-title">Making Your Hiring Smooth</h1>
              <p className="mb-4 fw-medium">
                From interns to experienced hires, evaluate skills for any tech
                or
                <br className="d-none d-xl-block" /> non-tech role including:
                software development, webtech,
                <br className="d-none d-xl-block" /> digital marketing and more
              </p>
              <div className="text-left text-md-left">
                <a
                  className="
                    btn btn-primary btn-lg
                    mr-md-4
                    mb-3 mb-md-0
                    border-0
                    primary-btn-shadow
                  "
                  href="/#/dash"
                  role="button"
                >
                  Find out more
                </a>
                <div className="w-100 d-block d-md-none"></div>
                <a
                  href="#"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#popupVideo"
                >
                  <span
                    className="
                      btn btn-danger
                      round-btn-lg
                      rounded-circle
                      mr-3
                      danger-btn-shadow
                    "
                  >
                    <img src={playbtn} width="15" alt="play" />
                  </span>
                </a>
                {/* <span className="fw-medium">Play Demo</span> */}
                <div
                  className="modal fade"
                  id="popupVideo"
                  tabIndex="-1"
                  aria-labelledby="popupVideo"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                      <iframe
                        className="rounded"
                        height="500px"
                        src="https://www.youtube.com/embed/_lhdhL4UDIo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowfullscreen"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9 col-lg-5 offset-lg-1">
              <div class="hero-form-content">
                <h2>Make Enquiry </h2>
                {/* <p>Unlocking New Insider!</p> */}
                <form
                  action="https://forms.zohopublic.in/bagcampus/form/BagcampusPricingEnquiry/formperma/lj_UpJV1nh7Bw7djJ0I3R51ahtGWL6vfPKf-Lfl4KP8/htmlRecords/submit"
                  name="form"
                  method="POST"
                  onsubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'
                  accept-charset="UTF-8"
                  enctype="multipart/form-data"
                  id="form"
                  class="hero-form"
                >
                  <input type="hidden" name="zf_referrer_name" value="" />
                  <input type="hidden" name="zf_redirect_url" value="" />
                  <input type="hidden" name="zc_gad" value="" />
                  <div class="form-row">
                    <div class="form-group col-6">
                      <input
                        class="form-control form-control-name"
                        placeholder="First Name"
                        id="f-name"
                        type="text"
                        maxlength="255"
                        name="Name_First"
                        fieldtype="7"
                        required=""
                      />
                    </div>
                    <div class="form-group col-6">
                      <input
                        class="form-control form-control-name"
                        placeholder="Last Name"
                        id="l-name"
                        type="text"
                        maxlength="255"
                        name="Name_Last"
                        fieldtype="7"
                        required=""
                      />
                    </div>
                  </div>
                  <input
                    class="form-control form-control-name"
                    placeholder="Company Name"
                    type="text"
                    name="SingleLine"
                    id="company"
                    checktype="c1"
                    maxlength="255"
                    fieldtype="1"
                  />
                  <input
                    class="form-control form-control-email"
                    placeholder="Email"
                    id="f-email"
                    fieldtype="9"
                    type="text"
                    maxlength="255"
                    name="Email"
                    checktype="c5"
                    required=""
                  />
                  <div class="form-row">
                    <div class="form-group col-3">
                      <select
                        class="form-control form-control-phone mb-0"
                        placeholder="+91"
                        type="text"
                        compname="PhoneNumber_countrycodeval"
                        name="PhoneNumber_countrycodeval"
                        checktype="c7"
                        maxlength="10"
                        phoneformat="1"
                        iscountrycodeenabled="true"
                        id="international_PhoneNumber_countrycodeval"
                        valtype="code"
                      >
                        <option value="+91">+91</option>
                      </select>
                    </div>
                    <div class="form-group col-9">
                      <input
                        class="form-control form-control-phone mb-0"
                        placeholder="Phone"
                        id="phone"
                        type="text"
                        compname="PhoneNumber"
                        name="PhoneNumber_countrycode"
                        maxlength="10"
                        checktype="c7"
                        phoneformat="1"
                        iscountrycodeenabled="true"
                        fieldtype="11"
                        valtype="number"
                        phoneformattype="1"
                      />
                    </div>
                    <div class="form-group col-9" id="looking_for_input">
                      <span>
                        <p className="mb-0 text-left" for="Checkbox1">
                          Looking For
                        </p>
                      </span>
                      <input
                        class="form-control-phone Checkbox1"
                        id="Checkbox1_1"
                        type="checkbox"
                        compname="PhoneNumber"
                        name="Checkbox1"
                        value="Interns"
                      />
                      <label for="Checkbox1_1">Interns</label>
                      <input
                        class="form-control-phone Checkbox1"
                        id="Checkbox1_2"
                        type="checkbox"
                        compname="PhoneNumber"
                        name="Checkbox1"
                        value="Employees"
                      />
                      <label for="Checkbox1_2">Employees</label>
                      <input
                        class="form-control-phone Checkbox1"
                        id="Checkbox1_3"
                        type="checkbox"
                        compname="PhoneNumber"
                        name="Checkbox1"
                        value="Trainees"
                      />
                      <label for="Checkbox1_3">Trainees</label>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-12">
                      <select
                        class="form-control form-control-phone mb-0"
                        placeholder="Select Plan"
                        type="text"
                        name="Dropdown2"
                      >
                        <option selected="true" value="">
                          Select Plan
                        </option>
                        <option value="Free Plan">Free Plan</option>
                        <option value="Standard Plan">Standard Plan</option>
                        <option value="Enterprise Plan">Enterprise Plan</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-2">
                      <input
                        type="checkbox"
                        checktype="c1"
                        checked="true"
                        id="DecisionBox"
                        name="DecisionBox"
                      />
                    </div>
                    <div class="form-group col-10">
                      <label for="DecisionBox" class="zf-labelName">
                        I Agree Terms And Conditions
                        <em class="zf-important">*</em>
                      </label>
                    </div>
                  </div>
                  <button class="btn" type="submit">
                    Submit Enquiry
                  </button>
                  <p className="text-center form-submit-zoho">
                    Enquiry Submitted with Zoho Forms
                  </p>
                </form>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const DevsecRound = (props) => {
  return (
    <a id="devsec_round" href={props.link} event-registered="true">
      <div>{props.domain + " "}</div>

      <svg
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        loading="lazy"
        alt=""
        className="right-pointer-arrow-bubble"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 7.5C1 7.08579 1.3888 6.75 1.86842 6.75H11.1316C11.6112 6.75 12 7.08579 12 7.5C12 7.91421 11.6112 8.25 11.1316 8.25H1.86842C1.3888 8.25 1 7.91421 1 7.5Z"
          fill="#001E00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.21967 2.96967C8.51256 2.67678 8.98744 2.67678 9.28033 2.96967L13.2803 6.96968C13.421 7.11033 13.5 7.3011 13.5 7.50001C13.5 7.69892 13.421 7.88969 13.2803 8.03034L9.28033 12.0303C8.98744 12.3232 8.51256 12.3232 8.21967 12.0303C7.92678 11.7375 7.92678 11.2626 8.21967 10.9697L11.6893 7.50001L8.21967 4.03033C7.92678 3.73744 7.92678 3.26256 8.21967 2.96967Z"
          fill="#001E00"
        />
      </svg>
    </a>
  );
};

const EresumeTemplateSection = () => {
  return (
    <>
      <section className="pt-5 my-4" id="destination">
        <div className="container">
          <div
            className="
              position-absolute
              bottom-0
              translate-middle-x
              d-none d-xl-block
              ml-xl-n4
            "
          >
            <img src={destimg} alt="destination" />
          </div>
          <div className="mb-7 text-center">
            {/* <h5 className="text-secondary">Ready to Hire With Bagcampus?</h5>
            <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize pb-5">
              Bagcampus is Project Based Learning and Hiring Solution Which aims
              to helps you in finding talent in Diffrent Technical and
              Non-technical Domain
            </h3> */}
          </div>
          <div className="row justify-content-around text-center text-md-left">
            <div className="col-md-5 hirewithsol">
              <h5 className="text-secondary">Hire With Bagcampus</h5>
              <h3 className="text-capitalize pb-3">
                Bagcampus is Project Based Learning and Hiring Solution Which
                aims to helps you in finding talent in Diffrent Technical and
                Non-technical Domain
              </h3>
              <div className="pricediv">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={PriceTag}
                      alt="free"
                      srcset=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8 pt-3">
                    <h5>Post Unlimited Jobs For Free</h5>
                    <p>
                      Get Access to Unlimited Free Job Posting and Amazing
                      Offers for Free <br />
                      <a className="link_freeplan" href="">
                        Check Our Free Plan
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="job-category-heading pt-3">
                <h2>Which Role are You Looking?</h2>
              </div>
              <div className="category-part-section justify-content-center justify-content-md-start">
                <DevsecRound link="Web" domain="Web Development" />
                <DevsecRound link="Python" domain="Python" />
                <DevsecRound link="Java" domain="Java" />
                <DevsecRound
                  link="Android Development"
                  domain="Android Development"
                />
                <DevsecRound link="Graphics" domain="Graphics" />
                <DevsecRound link="Dart" domain="Dart" />
                <DevsecRound
                  link="Digital Marketing"
                  domain="Digital Marketing"
                />
                <DevsecRound link="Blockchain" domain="Blockchain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const EresumeCard = (props) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card overflow-hidden shadow">
          <img
            className="card-img-top"
            src={props.imgSrc}
            alt={props.imgHeading}
          />
          <div className="card-body py-4 px-3">
            <div
              className="
                      d-flex
                      flex-column flex-lg-row
                      justify-content-between
                      mb-3
                    "
            >
              <h4 className="text-secondary fw-medium">
                <a
                  className="link-900 text-decoration-none stretched-link"
                  href={props.imgLinkref}
                >
                  {props.imgHeading}
                </a>
              </h4>
              <span className="fs-1 fw-medium">{props.imgCharge}</span>
            </div>
            <div className="d-flex align-items-center">
              <img
                src={resumenavbrn}
                id="navigationSvg"
                width="20"
                alt="navigation"
              />
              <span className="fs-0 fw-medium">Create Free E-Resume</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FeaturesCard = (props) => {
  return (
    <>
      <div className="d-flex align-items-start mb-5">
        <div
          className={props.cardclassname + " mr-sm-4 mr-3 p-3"}
          id="stepImgbg"
        >
          <img src={props.imgsrc} width="22" alt="steps" />
        </div>
        <div className="flex-1">
          <h5 className="text-secondary fw-bold fs-0">{props.heading}</h5>
          <p>
            {props.lineone}
            <br className="d-none d-sm-block" />
            {props.linetwo}
          </p>
        </div>
      </div>
    </>
  );
};
const ProcessSection = () => {
  return (
    <>
      <section id="ProcessSection">
        <div className="container">
          <h5 className="text-secondary">Features and Services</h5>
          <h3
            className="
          fs-xl-10 fs-lg-8 fs-7
          fw-bold
          font-cursive
          text-capitalize
          "
          >
            Here's why You Should Select Bagcampus
          </h3>
          <div className="row align-items-center">
            <div className="col-lg-4 mt-5">
              <div className="mb-4 text-start"></div>
              <FeaturesCard
                heading="Bagcampus Eresume"
                lineone="Digital Resume System can help"
                linetwo="Candidate Filtering Easy"
                cardclassname="bg-primary"
                imgsrc={selection}
              />
              <FeaturesCard
                heading="Candidate Management"
                lineone="Bagcampus Dashboard Make"
                linetwo="Easy to Manage Candidate"
                cardclassname="bg-secondary"
                imgsrc={map}
              />
              <FeaturesCard
                heading="Free Job Posting"
                lineone="Bagcampus allows you Unlimited"
                linetwo="free Job Posting"
                cardclassname="bg-success"
                imgsrc={rupees}
              />
              <FeaturesCard
                heading="Cost Effecient"
                lineone="Post Job, Internship or Conduct"
                linetwo="Competitions at Effecient Pricing"
                cardclassname="bg-primary"
                imgsrc={waterSport}
              />
            </div>
            <div className="col-lg-4 mt-5">
              <div className="mb-4 text-start"></div>
              <FeaturesCard
                heading="Project Based Hiring"
                lineone="Easily Sort Candidate with"
                linetwo="Skillset of Projects Working"
                cardclassname="bg-danger"
                imgsrc={document}
              />
              <FeaturesCard
                heading="Conduct Competition"
                lineone="Evaluate by Conducting Projects,"
                linetwo="Coding or Objectives Rounds"
                cardclassname="bg-info"
                imgsrc={idashboard}
              />
              <FeaturesCard
                heading="Google Job Listing"
                lineone="Your Free Job Posting will"
                linetwo="Rank on Google Job Listing"
                cardclassname="bg-warning"
                imgsrc={rankup}
              />
              <FeaturesCard
                heading="Fast and Easy"
                lineone="We Make it Fast and Easy to "
                linetwo="Post Job and Manage Applicants"
                cardclassname="bg-info"
                imgsrc={fastandeasy}
              />
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-start">
              <div
                className="card position-relative shadow recdash"
                id="startImgonesection"
              >
                <div
                  className="position-absolute z-index--1 mr-10 mr-xxl-0"
                  id="startImgone"
                >
                  <img src={Stepsbgimg} id="startImgshape" alt="shape" />
                </div>
                <div className="card-body p-3">
                  <img
                    className="mb-4 mt-2 rounded-2 w-100"
                    src="https://images.unsplash.com/photo-1503423571797-2d2bb372094a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
                    alt="booking"
                  />
                  <div>
                    <h5 className="fw-medium">Python Developer</h5>
                    <p className="fs--1 mb-3 fw-medium">
                      Pune, Maharashtra | by Company Inc.
                    </p>
                    <div className="icon-group mb-4">
                      <div className="card applybtn d-flex flex-row">
                        {/* <span className="btn icon-item">
                          <img src={sendSvg} alt="" />
                        </span> */}
                        <p className="texttime">Apply With E-Resume</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center mt-n1">
                        <img
                          className="mr-3"
                          src={buildingSvg}
                          width="18"
                          alt="building"
                        />
                        <span className="fs--1 fw-medium">25 Applicants</span>
                      </div>
                      <div className="show-onhover position-relative">
                        <div
                          className="
                            card
                            hideEl
                            shadow
                            position-absolute
                            start-xl-50
                            bottom-100
                            translate-xl-middle-x
                            ms-3
                          "
                          id="PsectionCard"
                        >
                          <div className="card-body py-3">
                            <div className="d-flex">
                              <div id="rowdivimgcard">
                                <img
                                  className="rounded-circle"
                                  src={rocketSvg}
                                  width="50"
                                  alt="favorite"
                                />
                              </div>
                              <div>
                                <p className="fs--1 fw-medium mb-0 text-small">
                                  Your Profile
                                </p>
                                <h5 className="fw-medium mb-3">Python</h5>
                                <h6 className="fs--1 fw-medium mb-2">
                                  <span>40%</span> completed
                                </h6>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn">
                          <img src={heartSvg} width="20" alt="step" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const PricingSection = () => {
  return (
    <>
      <section id="bagcampus_pricing_table">
        <div class="container">
          <div className="mb-7 mt-5 text-center">
            <h5 className="text-secondary">PRICING</h5>
            <h3 className="fs-xl-10 fs-lg-8 pb-5 fw-bold font-cursive text-capitalize">
              Start With Us
            </h3>
          </div>
          {/* <!--BLOCK ROW START--> */}
          <div class="row">
            <div class="col-md-4">
              {/* <!--PRICE CONTENT START--> */}
              <div class="generic_content clearfix">
                {/* <!--HEAD PRICE DETAIL START--> */}
                <div class="generic_head_price clearfix">
                  {/* <!--HEAD CONTENT START--> */}
                  <div class="generic_head_content clearfix">
                    {/* <!--HEAD START--> */}
                    <div class="head_bg"></div>
                    <div class="head">
                      <span>Trials</span>
                    </div>
                    {/* <!--//HEAD END--> */}
                  </div>
                  {/* <!--//HEAD CONTENT END--> */}

                  {/* <!--PRICE START--> */}
                  <div class="generic_price_tag clearfix">
                    <span class="price">
                      <span class="sign"></span>
                      <span class="currency">Free</span>
                      <span class="cent">₹0</span>
                      <span class="month"></span>
                    </span>
                  </div>
                  {/* <!--//PRICE END--> */}
                </div>
                {/* <!--//HEAD PRICE DETAIL END--> */}

                {/* <!--FEATURE LIST START--> */}
                <div class="generic_feature_list">
                  <ul>
                    <li>
                      <span>Unlimited</span> Job Posting
                    </li>
                    <li>
                      <span>Job Listing</span> on Google
                    </li>
                    <li>
                      <span>1</span> CV Access/Month
                    </li>
                    <li>
                      <span>Worktime</span> Support
                    </li>
                  </ul>
                </div>
                {/* <!--//FEATURE LIST END--> */}

                {/* <!--BUTTON START--> */}
                <div class="generic_price_btn clearfix">
                  <a
                    class=""
                    href="https://forms.zohopublic.in/bagcampus/form/BagcampusPricingEnquiry/formperma/R46bZC3hHgPGloIxnSvKVF_-NekBNm6sEu9kS3y2ZIk"
                  >
                    Make Enquiry
                  </a>
                </div>
                {/* <!--//BUTTON END--> */}
              </div>
              {/* <!--//PRICE CONTENT END--> */}
            </div>

            <div class="col-md-4">
              {/* <!--PRICE CONTENT START--> */}
              <div class="generic_content active clearfix">
                {/* <!--HEAD PRICE DETAIL START--> */}
                <div class="generic_head_price clearfix">
                  {/* <!--HEAD CONTENT START--> */}
                  <div class="generic_head_content clearfix">
                    {/* <!--HEAD START--> */}
                    <div class="head_bg"></div>
                    <div class="head">
                      <span>Standard</span>
                    </div>
                    {/* <!--//HEAD END--> */}
                  </div>
                  {/* <!--//HEAD CONTENT END--> */}

                  {/* <!--PRICE START--> */}
                  <div class="generic_price_tag clearfix">
                    <span class="price">
                      <span class="sign">₹</span>
                      <span class="currency">999</span>
                      <span class="cent cut">₹4499</span>
                      {/* <!-- <span class="month">/MON</span> --> */}
                    </span>
                  </div>
                  {/* <!--//PRICE END--> */}
                </div>
                {/* <!--//HEAD PRICE DETAIL END--> */}

                {/* <!--FEATURE LIST START--> */}
                <div class="generic_feature_list">
                  <ul>
                    <li>
                      <span>All</span> Free Tools
                    </li>
                    <li>
                      <span>99</span> CV Access Credit
                    </li>
                    <li>
                      <span>Candidate</span> Management
                    </li>
                    <li>
                      <span>Personal</span> Dashboard
                    </li>
                    {/* <!-- <li><span>24/7</span> Support</li> --> */}
                  </ul>
                </div>
                {/* <!--//FEATURE LIST END--> */}

                {/* <!--BUTTON START--> */}
                <div class="generic_price_btn clearfix">
                  <a
                    class=""
                    href="https://forms.zohopublic.in/bagcampus/form/BagcampusPricingEnquiry/formperma/R46bZC3hHgPGloIxnSvKVF_-NekBNm6sEu9kS3y2ZIk"
                  >
                    Make Enquiry
                  </a>
                </div>
                {/* <!--//BUTTON END--> */}
              </div>
              {/* <!--//PRICE CONTENT END--> */}
            </div>
            <div class="col-md-4">
              {/* <!--PRICE CONTENT START--> */}
              <div class="generic_content clearfix">
                {/* <!--HEAD PRICE DETAIL START--> */}
                <div class="generic_head_price clearfix">
                  {/* <!--HEAD CONTENT START--> */}
                  <div class="generic_head_content clearfix">
                    {/* <!--HEAD START--> */}
                    <div class="head_bg"></div>
                    <div class="head">
                      <span>Entreprise</span>
                    </div>
                    {/* <!--//HEAD END--> */}
                  </div>
                  {/* <!--//HEAD CONTENT END-->  */}

                  {/* <!--PRICE START--> */}
                  <div class="generic_price_tag clearfix">
                    <span class="price">
                      {/* <!-- <span class="sign">₹</span> --> */}
                      <span class="currency">6%</span>
                      <span class="cent">CTC</span>
                      <span class="month">/lead</span>
                    </span>
                  </div>
                  {/* <!--//PRICE END--> */}
                </div>
                <div class="generic_feature_list">
                  <ul>
                    <li>
                      <span>All</span> Free Tools
                    </li>
                    <li>
                      <span>Unlimited</span> Interviews{" "}
                    </li>
                    <li>
                      <span>Unlimited</span> Competitions
                    </li>
                    <li>
                      <span>Unlimited</span> Projects
                    </li>
                  </ul>
                </div>
                <div class="generic_price_btn clearfix">
                  <a
                    class=""
                    href="https://forms.zohopublic.in/bagcampus/form/BagcampusPricingEnquiry/formperma/R46bZC3hHgPGloIxnSvKVF_-NekBNm6sEu9kS3y2ZIk"
                  >
                    Make Enquiry
                  </a>
                </div>
              </div>
            </div>
            <span>
              <p class="text-muted text-center pt-3">
                Working Time Mon-Fri, 11.00 am - 5.00 pm (IST), Sat 11.00 am -
                2.00 pm (IST)
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

const FaqrSectionCard = (props) => {
  return (
    <>
      <div class="card-s">
        <div class="faqcard card-header" id={props.label}>
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target={"#" + props.colcount}
              aria-expanded="false"
              aria-controls={props.colcount}
            >
              {props.question}
            </button>
          </h2>
        </div>
        <div
          id={props.colcount}
          class="collapse"
          aria-labelledby={props.label}
          data-parent="#accordionExample"
        >
          <div class="card-body">{props.answer}</div>
        </div>
      </div>
    </>
  );
};

const FaqrSection = () => {
  return (
    <>
      <section id="faqsection">
        <div className="container">
          <div className="row px-lg-5 mx-lg-5">
            <div className="col-md-12">
              <div className="mb-7 text-center">
                <h5 className="text-secondary">FAQ</h5>
                <h3 className="fs-xl-10 fs-lg-8 pb-5 fw-bold font-cursive text-capitalize">
                  Frequenty Asked Questions
                </h3>
              </div>
            </div>
            <div className="col-md-12">
              <div id="accordionExample">
                <FaqrSectionCard
                  question="How Many Active Jobs Can be There?"
                  answer="You Can Have 5 Active Jobs at Same Time."
                  label="queone"
                  colcount="countone"
                />
                <FaqrSectionCard
                  question="How Many Job Can be Posted for Free?"
                  answer="You Can Post Unlimited Jobs for Free."
                  label="quetwo"
                  colcount="counttwo"
                />
                <FaqrSectionCard
                  question="How Listing on Google Jobs works?"
                  answer="Google Job Listing work on Advance Search Results. In Case Google Change its Conditions, this listing will be Removed"
                  label="quethree"
                  colcount="countthree"
                />
                <FaqrSectionCard
                  question="How Much Time Free Job Listing will be Active?"
                  answer="Free Job Listing will be Active for 72 Hours and Will be Deactivate Automatically, If it is not Closed."
                  label="quefour"
                  colcount="countfour"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div class="ques">
                <div class="ques-head">
                  <p class="ques-heading">Still have a questions ?</p>
                </div>
                <div class="ques-text">
                  <p>
                    If you cannot find answer to your questions in our FAQ,
                    <br /> you can always ask doubt with
                    <a href="#ResumeHeader" rel="noopener noreferrer">
                      contacting us
                    </a>
                    . <br /> We will answer to you shortly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const ExploreMoreServiceSection = () => {
  return (
    <>
      <section className="pt-5 pt-md-9 pb-5" id="service">
        <div className="container">
          <div className="position-absolute z-index--1 end-3 d-none d-lg-block">
            <img src={EmShapeSvg} id="ExploreSectionImg" alt="service" />
          </div>
          <div className="mb-7 text-center">
            <h5 className="text-secondary">EXPLORE MORE</h5>
            <h3 className="fs-xl-10 fs-lg-8 pb-5 fw-bold font-cursive text-capitalize">
              Try Our More Services
            </h3>
          </div>
          <div className="row">
            {
              <ServicesCardBox
                ImgSrc={EmAlertSvg}
                ImgWidth="45"
                ImgHeading="Bagcampus Alerts"
                ImgPara="Bagcampus Alerts help you to Get Notified with Opportunities"
              />
            }
            {
              <ServicesCardBox
                ImgSrc={EmEventSvg}
                ImgWidth="55"
                ImgHeading="Bagcampus Events"
                ImgPara="Enhance Your Skills With Bagcampus Events"
              />
            }
            {
              <ServicesCardBox
                ImgSrc={EmCompetitionSvg}
                ImgWidth="55"
                ImgHeading="Bagcampus Competitions"
                ImgPara="Participate and get Rewarded with Competitions"
              />
            }
            {
              <ServicesCardBox
                ImgSrc={EmIconSvg}
                ImgWidth="55"
                ImgHeading="Interview Prepration"
                ImgPara="We're Soon Lanuching Interview Prepration"
              />
            }
          </div>
        </div>
      </section>
    </>
  );
};

const ServicesCardBox = (props) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6 mb-6">
        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
          <div className="card-body p-xl-5 p-4">
            <img
              src={props.ImgSrc}
              width={props.ImgWidth}
              alt="Service"
              className="img-fluid pb-2"
            />
            <h4 className="mb-3">{props.ImgHeading}</h4>
            <p className="mb-0 fw-medium">{props.ImgPara}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const SubscriberSection = () => {
  return (
    <>
      <section className="pt-5 mb-5">
        <div className="container">
          <div
            className="py-8 px-5 position-relative text-center"
            id="subHeadSection"
          >
            <div
              className="
                position-absolute
                start-100
                top-0
                translate-middle
                notifiSendtopBtn
              "
            >
              <img src={NSsendBtn} id="SubscibendBtn" alt="send icon" />
            </div>
            <div className="position-absolute end-0 top-0 z-index--1">
              <img src={NSshapeBg} width="264" alt="cta shape" />
            </div>
            <div
              className="
                position-absolute
                start-0
                bottom-0
                ms-3
                z-index--1
                d-none d-sm-block
              "
            >
              <img src={NSshapeOne} id="subtBtnTwo" alt="cta shape" />
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h2 className="text-secondary lh-1-7 mb-7 notiheading">
                  Subscribe to get information, recent alerts and Amazing
                  Opportunities from Bagcampus
                </h2>
                <div className="row g-3 align-items-center w-lg-75 mx-auto">
                  <div className="col-sm">
                    <div className="input-group-icon">
                      <input
                        className="form-control form-little-squirrel-control"
                        type="email"
                        placeholder="Enter email "
                        aria-label="email"
                      />
                      <img
                        className="input-box-icon"
                        src={NSmail}
                        width="17"
                        alt="mail"
                      />
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <button className="btn btn-danger orange-gradient-btn fs--1">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FooterSection = () => {
  return (
    <>
      <section className="pt-5 pb-lg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-7 col-12 mb-4 mb-md-6 mb-lg-0 order-0">
              <h3 className="logofooterna">Bagcampus</h3>
              <p className="fs--1 text-secondary mb-0 fw-medium">
                Your Career Partner
              </p>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-1 order-md-2">
              <h4
                className="
                  footer-heading-color
                  fw-bold
                  font-sans-serif
                  mb-3 mb-lg-4
                "
              >
                Company
              </h4>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="http://bagcampus.in/"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="http://bagcampus.in/community"
                  >
                    Community
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="https://bagcampus.in/pricing"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-2 order-md-3">
              <h4
                className="
                  footer-heading-color
                  fw-bold
                  font-sans-serif
                  mb-3 mb-lg-4
                "
              >
                Contact
              </h4>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="https://bagcampus.in/support"
                  >
                    Help & Support
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="https://events.bagcampus.in/terms"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="https://events.bagcampus.in/terms"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-3 order-md-4">
              <h4
                className="
                  footer-heading-color
                  fw-bold
                  font-sans-serif
                  mb-3 mb-lg-4
                "
              >
                Products
              </h4>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="https://alerts.bagcampus.in/"
                  >
                    Alerts
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="https://events.bagcampus.in/"
                  >
                    Events
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="https://compete.bagcampus.in/"
                  >
                    Competition
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="
                col-lg-3 col-md-5 col-12
                mb-4 mb-md-6 mb-lg-0
                order-lg-4 order-md-1
              "
            >
              <div className="icon-group mb-4 d-flex">
                <a
                  className="text-decoration-none icon-item shadow-social"
                  id="linkedin"
                  href="https://www.linkedin.com/company/bagcampus"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-inline--fa fa-instagram fa-w-14"
                    version="1.1"
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                  >
                    <g transform="translate(128 128) scale(0.72 0.72)">
                      <g transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
                        <path
                          d="M 23.575 89.924 H 1.407 V 28.439 h 22.167 V 89.924 z M 5.835 85.496 h 13.311 v -52.63 H 5.835 V 85.496 z M 12.491 25.072 C 5.603 25.072 0 19.467 0 12.576 c 0 -6.893 5.603 -12.5 12.491 -12.5 c 6.887 0 12.491 5.608 12.491 12.5 C 24.982 19.467 19.379 25.072 12.491 25.072 z M 12.491 4.504 c -4.446 0 -8.063 3.621 -8.063 8.072 c 0 4.448 3.617 8.068 8.063 8.068 c 4.446 0 8.063 -3.619 8.063 -8.068 C 20.554 8.125 16.937 4.504 12.491 4.504 z"
                          transform=" matrix(1 0 0 1 0 0) "
                          stroke-linecap="round"
                        />
                        <path
                          d="M 90 89.924 H 67.846 V 59.962 c 0 -8.75 -1.048 -12.915 -7.001 -12.915 c -6.14 0 -8.422 3.371 -8.422 12.439 v 30.438 H 30.269 V 28.439 h 21.439 v 4.046 c 3.376 -3.03 8.363 -5.459 14.806 -5.459 C 87.21 27.025 90 41.883 90 56.417 V 89.924 z M 72.274 85.496 h 13.298 v -29.08 c 0 -15.411 -3.189 -24.963 -19.059 -24.963 c -7.81 0 -12.864 4.328 -14.819 8.035 l -0.623 1.181 h -3.792 v -7.803 H 34.697 v 52.63 h 13.298 v -26.01 c 0 -4.614 0 -16.867 12.85 -16.867 c 11.429 0 11.429 11.282 11.429 17.343 V 85.496 z"
                          transform=" matrix(1 0 0 1 0 0) "
                          stroke-linecap="round"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  className="text-decoration-none icon-item shadow-social"
                  id="instagram"
                  href="https://www.instagram.com/bagcampus/"
                >
                  <svg
                    className="svg-inline--fa fa-instagram fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="text-decoration-none icon-item shadow-social"
                  id="twitter"
                  href="https://twitter.com/bagcampus1"
                >
                  <svg
                    className="svg-inline--fa fa-twitter fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
              </div>
              <h4 className="fw-medium font-sans-serif text-secondary mb-3">
                Ask Questions
              </h4>
              <div className="align-items-center">
                <li className="mb-2">
                  <a
                    className="link-900 fs-1 fw-medium text-decoration-none"
                    href="#"
                  >
                    admin@bagcampus.in
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export {
  NavBar,
  ResumeHeader,
  EresumeTemplateSection,
  ProcessSection,
  ExploreMoreServiceSection,
  PricingSection,
  FaqrSection,
  SubscriberSection,
  FooterSection,
};
