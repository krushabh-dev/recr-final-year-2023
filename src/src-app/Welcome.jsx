import React, { useState, useEffect } from "react";
import {
  NavBar,
  ResumeHeader,
  EresumeTemplateSection,
  ProcessSection,
  PricingSection,
  ExploreMoreServiceSection,
  FaqrSection,
  SubscriberSection,
  FooterSection,
} from "./Components";

const Welcome = (props) => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      var el = document.getElementById("navMainStyle");
      el.classList.add("scrolled");
      if (window.scrollY > 1500) {
        document.getElementById("navMainStyle").classList.add("lastcolor");
      }
    } else {
      var el = document.getElementById("navMainStyle");
      el.classList.remove("scrolled");
      el.classList.remove("lastcolor");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    // <div ref={this.myRef} onScroll={this.onScroll}>
    // <div onScroll={console.log(window.scrollY)}>
    <div>
      <NavBar emailloged={props.email} />
      <ResumeHeader />
      <EresumeTemplateSection />
      <ProcessSection />
      <PricingSection />
      <ExploreMoreServiceSection />
      {/* <SubscriberSection /> */}
      <FaqrSection />
      <FooterSection />
      <div class="py-5 text-center">
        <p class="mb-0 text-secondary fs--1 fw-medium">
          All Rights Reserved With Bagcampus Private Limited
        </p>
      </div>
    </div>
  );
};

class Welcomse extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { scrollTop: 0 };
  }

  onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop;
    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
    );
    this.setState({
      scrollTop: scrollTop,
    });
  };
  render() {
    // const { scrollTop } = this.state;
    return (
      // <div ref={this.myRef} onScroll={this.onScroll}>
      <div ref={this.myRef} onScroll={console.log(window.scrollY)}>
        <NavBar />
        <ResumeHeader />
        <EresumeTemplateSection />
        <ProcessSection />
        <ExploreMoreServiceSection />
        <SubscriberSection />
        {/* <FaqrSection /> */}
        <FooterSection />
        <div class="py-5 text-center">
          <p class="mb-0 text-secondary fs--1 fw-medium">
            All Rights Reserved With Bagcampus Private Limited
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
