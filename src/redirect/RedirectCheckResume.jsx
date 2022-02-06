import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../src-app/Components";
import { getDatabase, ref, child, get } from "firebase/database";
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
import "./RedirectCheckResume.css";

const auth = getAuth();
class RedirectCheckResume extends Component {
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
  const { mailusername } = useParams();
  return (
    <>
      <section id="eresumeformarea">
        <NavBar emailloged={props.email} />
        <div className="container">
          <ReadEresume email={mailusername} />
          <div id="basicDetailContentSection"></div>
        </div>

        {/* //mailusername */}
      </section>
    </>
  );
};

const userdetail = [];

const ReadEresume = (props) => {
  const emailUsername = props.email;

  const getBasicDetail = () => {
    console.log(emailUsername);
    var gbdb = document.getElementById("gettingbasicdetailbtn");
    //var basicdetailsection = document.getElementById("basicdetailsection");
    gbdb.style.display = "none";
    const dbRef = ref(getDatabase());
    get(child(dbRef, "users/" + emailUsername + "/basicdetail/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const myJSON = snapshot.val();
          const basicDetArray = JSON.parse(JSON.stringify(myJSON));
          var content = '<table class="table table-bordered"><tbody>';
          content += "";
          content +=
            "<tr><td>First Name: </td><td>" +
            basicDetArray.fname +
            "</td></tr>";
          content +=
            "<tr><td>Last Name</td><td>" + basicDetArray.lname + "</td></tr>";
          content +=
            "<tr><td>Branch</td><td>" + basicDetArray.branch + "</td></tr>";
          content +=
            "<tr><td> Current Degree</td><td>" +
            basicDetArray.c_degree +
            "</td></tr>";
          content +=
            "<tr><td>College Name</td><td>" +
            basicDetArray.collegename +
            "</td></tr>";
          content +=
            "<tr><td>Current Year of Study</td><td>" +
            basicDetArray.currentyearofstudy +
            "</td></tr>";
          content +=
            "<tr><td>Description</td><td>" + basicDetArray.dspel + "</td></tr>";
          content +=
            "<tr><td>Linkedin: </td><td>" +
            basicDetArray.linkedin +
            "</td></tr>";
          content +=
            "<tr><td>Year of Birth: </td><td>" +
            basicDetArray.yearofbirth +
            "</td></tr>";
          content +=
            "<tr><td>Year of Graduation; </td><td>" +
            basicDetArray.ygraduation +
            "</td></tr>";
          //content += "</tr>";
          content += "</tbody></table>";
          document.getElementById("basicDetailContentSection").innerHTML =
            content;
          //userdetail.push(basicDetArray);
        } else {
          console.log("No data available");
          var content = "Candidate Have Not Completed This Step.";
          document.getElementById("basicDetailContentSection").innerHTML =
            content;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    //console.log("userdetail: ", userdetail[0]);
    document.getElementById("basicdetailsection").innerHTML = userdetail;
  };

  const getEducDetail = () => {
    //console.log(emailUsername);
    var gbdb = document.getElementById("getEducDetailbtn");
    //var basicdetailsection = document.getElementById("basicdetailsection");
    gbdb.style.display = "none";
    const dbRef = ref(getDatabase());
    get(child(dbRef, "users/" + emailUsername + "/educdetail/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const myJSON = snapshot.val();
          const edDeailArry = JSON.parse(JSON.stringify(myJSON));
          // //console.log(edDeailArry.highestLevelofDegree);
          var content = '<table class="table table-bordered"><tbody>';
          content += "";
          content +=
            "<tr><td>Highest Level of Degree: </td><td>" +
            edDeailArry.highestLevelofDegree +
            "</td></tr>";
          content +=
            "<tr><td>College Name: </td><td>" +
            edDeailArry.collegeName +
            "</td></tr>";
          content +=
            "<tr><td>College Location: </td><td>" +
            edDeailArry.collegeLocation +
            "</td></tr>";
          content +=
            "<tr><td> University Name: </td><td>" +
            edDeailArry.universityName +
            "</td></tr>";
          content +=
            "<tr><td>Current Pursuing: </td><td>" +
            edDeailArry.cpursuing +
            "</td></tr>";
          content +=
            "<tr><td>Field or Branch: </td><td>" +
            edDeailArry.fieldorbranch +
            "</td></tr>";
          content +=
            "<tr><td>Educational Description: </td><td>" +
            edDeailArry.desceducation +
            "</td></tr>";
          content +=
            "<tr><td> College Start Date: </td><td>" +
            edDeailArry.collegesdate +
            "</td></tr>";
          content +=
            "<tr><td>College End Date: </td><td>" +
            edDeailArry.collegeedate +
            "</td></tr>";

          //content += "</tr>";
          content += "</tbody></table>";
          document.getElementById("getEducDetailsection").innerHTML = content;
          //userdetail.push(basicDetArray);
        } else {
          console.log("No data available");
          var content = "Candidate Have Not Completed This Step.";
          document.getElementById("getEducDetailsection").innerHTML = content;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    //console.log("userdetail: ", userdetail[0]);
    document.getElementById("getEducDetailsection").innerHTML = userdetail;
  };

  function OneExperiment() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "users/" + emailUsername + "/setedudetail/")).then(
      (snapshot) => {
        if (snapshot.exists()) {
          const myJSON = snapshot.val();
          var gedb = document.getElementById("getEducDetailbtn");
          //var basicdetailsection = document.getElementById("basicdetailsection");
          gedb.style.display = "block";
        }
      }
    );

    get(child(dbRef, "users/" + emailUsername + "/setbasicdetail/")).then(
      (snapshot) => {
        if (snapshot.exists()) {
          const myJSON = snapshot.val();
          var gbdb = document.getElementById("gettingbasicdetailbtn");
          //var basicdetailsection = document.getElementById("basicdetailsection");
          gbdb.style.display = "block";
        }
      }
    );
  }

  return (
    <>
      <div className="redirectCheckResume" onLoad={OneExperiment()}>
        Username: {props.email}
        <button onClick={getBasicDetail} id="gettingbasicdetailbtn">
          Get Basic Details
        </button>
        <button onClick={getEducDetail} id="getEducDetailbtn">
          Get Education Details
        </button>
        <div id="basicdetailsection"></div>
        <div id="getEducDetailsection"></div>
      </div>
    </>
  );
};

export default RedirectCheckResume;
