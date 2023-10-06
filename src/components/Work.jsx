import React from "react";
import "./work.css";

function Work() {
  return (
    <>
      <div className="work-inside-new">
        <div className="d-flex flex-column px-2">
          <div className="d-flex justify-content-between  py-3">
            <span className="company-name">
              Infeanet Web media solutions, Pune
            </span>
            <span className="year-passedout">june to sept 21</span>
          </div>
        </div>
        <div className="d-flex flex-column px-2">
          <span className="position">Python Developer</span>
          <span className="description-position">
            <ul>
              <li> learned new libraries related to python</li>
              <li> libraries like Matplotlib, numpy</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

export default Work;
