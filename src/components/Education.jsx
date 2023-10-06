import React from "react";
import "./education.css";

function Education() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Rajmata Jijamata Jr. Science College, Latur{" "}
            </span>
            <span className="university-degree">
              12<sup>th</sup>{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2019-20</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Sinhagad Institute's, Sou Venutai Chavan <br /> Polytechnic
              College, Pune{" "}
            </span>
            <span className="university-degree">
              Diploma in Computer Technology
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2020-22</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
