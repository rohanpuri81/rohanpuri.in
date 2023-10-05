import "./App.css";
import React, { useState } from "react";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Programming from "./components/Prgramming";
import Work from "./components/Work";

const App = () => {
  const [education, setEducation] = useState(false);
  const [workHistory, setWorkHistory] = useState(false);
  const [programming, setProgramming] = useState(true);
  const [projects, setProjects] = useState(false);

  function SetAllFalse() {
    setEducation(false);
    setProgramming(false);
    setWorkHistory(false);
    setProjects(false);
  }
  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="herosection py-5 px-10">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">ROHAN PURI</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About me</span>
            <span className="mx-4 nav-items">Resume</span>
            <span className="mx-4 nav-items">Testimonials</span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Rohan Puri</span>
              </span>
              <span className="Im-text-enthisiastic py-2">
                Enthusiastic Dev 😎
              </span>
              <span className="Im-text-subheading">
                Knack of Building applications with Front End Operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img Anim">
              <img
                className="img-fluid custom-img"
                src="./rohan.jpg"
                alt="hero-img"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="about-me-section about-me-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why to Choose me ?</span>
          <div className="row justify-content-center shadow-lg my-5 py-4">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <dotlottie-player
                src="https://lottie.host/1596e469-ec36-4df0-9c6b-26a08c492c2f/YdaBeBh0zN.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
              <span className="some-text-about-me">
                Front end developer with knowledge in React, redux , Tailwind
                and Bootstrap , along with a knack of building applications with
                utmost efficiency , Strong Professional with a Diploma in
                Computer Science willing to be an asset for an Organization
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few Highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Front end web development</li>
                    <li>Interactive Front end as per the design</li>
                    <li>Front end web development</li>
                    <li>React , Redux</li>
                    <li>CSS libraries like Material-Ui,Bootstrap</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>
        <div
          className="resume-new-section d-flex"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-dark">
              <span className="icons-span">
                <i class="fa-solid fa-graduation-cap"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-code"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-list-check"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className="resume-options-items"
                onClick={() => {
                  ChangeState(setEducation, true);
                }}
              >
                Education
              </span>
              <span
                className="resume-options-items"
                onClick={() => {
                  ChangeState(setWorkHistory, true);
                }}
              >
                Work
              </span>
              <span
                className="resume-options-items"
                onClick={() => {
                  ChangeState(setProgramming, true);
                }}
              >
                Programming
              </span>
              <span
                className="resume-options-items"
                onClick={() => {
                  ChangeState(setProjects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workHistory === true && <Work />}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
