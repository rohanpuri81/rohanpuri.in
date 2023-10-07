import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Programming from "./components/Prgramming";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact/Contact";
import Typed from "typed.js";
export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkshitory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Enthusiastic Dev 😎 ",
        "Front End Developer 💻 ",
        "React Developer 🚧",
      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  function SetAllFalse() {
    seteducation(false);
    setworkshitory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new ">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex aling-items-center justify-content-center">
            <img src="./logo22.png" style={{ height: "40px" }} alt="" />
            Puri{" "}
          </span>
          <div
            className={
              !opennav
                ? "bars mx-2 transition-all "
                : " transition-all open bars mx-2 "
            }
            style={{ background: opennav && "#02203c" }}
            onClick={() => setopennav(!opennav)}
          >
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? " d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all "
            : " d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all "
        }
      >
        <span className="brand-name">ROHAN PURI</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home{" "}
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            href="#testimonials"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Testimonial
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2 " id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Rohan Puri</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              ></span>
              <span className="Im-text-subheading">
                Knack of building applications with front end operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Hire me
                </a>
                <a
                  href="./resume.pdf"
                  download="rohanPuri resume.pdf"
                  className="btn-resume-me"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="./rohan.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            {" "}
            About me
          </span>
          <span className="why-text-sub">Why Should you Choose me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <dotlottie-player
                src="https://lottie.host/1596e469-ec36-4df0-9c6b-26a08c492c2f/YdaBeBh0zN.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Front end developer with knowledge in React, redux , Tailwind
                and Bootstrap , along with a knack of building applications with
                utmost efficiency , Strong Professional with a Diploma in
                Computer Science willing to be an asset for an Organization
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
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

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex  px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i className="fas fa-user-graduate"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-briefcase"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-code"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-tasks"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education{" "}
              </span>
              <span
                className={
                  workhistory === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkshitory, true);
                }}
              >
                Work{" "}
              </span>
              <span
                className={
                  programmings === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogrammings, true);
                }}
              >
                Programming{" "}
              </span>
              <span
                className={
                  projects === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      <div className="testmonails-part my-5" id="testimonials">
        <div className="testimonials-inner-part d-flex flex-column">
          <span className="about-me-text">Testimonials</span>
          <span className="why-text-sub mb-5">
            What Some Experienced Devlopers say about me{" "}
          </span>
          <Testimonials />
        </div>
      </div>

      <div className="contact-me-part " id="contactme">
        <div className="relative-bg"> </div>

        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Lets Keep in Touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
