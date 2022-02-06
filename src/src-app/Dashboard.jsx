import React from "react";
import { NavBar } from "./Components";
import { EresumeHome, EresumeFormOne } from "./EresumeForm";

const Dashboard = (props) => {
  return (
    <>
      <section id="eresumeSection">
        <NavBar emailloged={props.email} />
        <EresumeHome />
        {/* <EresumeFormOne /> */}
      </section>
    </>
  );
};

export default Dashboard;
