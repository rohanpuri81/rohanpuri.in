import React from "react";
import "./Programming.css";

function Programming() {
  const value = [
    {
      txt: "HTML",
      percentage: 86,
    },
    {
      txt: "CSS",
      percentage: 81,
    },
    {
      txt: "javascript",
      percentage: 84,
    },
    {
      txt: "React",
      percentage: 90,
    },
    {
      txt: "Redux",
      percentage: 80,
    },
  ];
  return (
    <>
      <div>
        <div className="d-flex flex-row flex-wrap ">
          {value.map((val, ind) => {
            return (
              <>
                <div key={ind} className="col-lg-6 col-md-6 col-sm-12">
                  <span className="language">{val.txt}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${val.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Programming;
