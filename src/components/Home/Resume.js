import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";

const Resume = () => {
  const [data, setData] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const workExperience = async () => {
      await axios
        .get("/json/work-experience.json")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };



    const educationData = async () => {
      await axios
        .get("/json/education.json")
        .then((res) => setEducation(res.data))
        .catch((err) => console.log(err));
    };

    workExperience();
    educationData();
  }, []);
  return (
    <>
      <div id="fh5co-resume" className="fh5co-bg-color">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-12 text-center fh5co-heading">
              <h2>My Resume</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline">
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Work Experience</h3>
                  </div>
                </li>
                {data.map((item) => (
                  <li key={item.id} className={` animate-box ${item.id % 2 === 1 ? "timeline-unverted" : "timeline-inverted"} `}>
                    <div className="timeline-badge">
                      <FaSuitcase />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">{item.designation}</h3>
                        <span className="company">
                          {item.companyName} - {item.startDate} -{" "}
                          {item.endDate === "current"
                            ? "Current"
                            : item.endDate}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="timeline">
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Education</h3>
                  </div>
                </li>
                {education.map((item) => (
                  <li key={item.id} className={` animate-box ${item.id % 2 === 1 ? "timeline-unverted" : "timeline-inverted"} `}>
                    <div className="timeline-badge">
                      <FaGraduationCap />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">{item.degree}</h3>
                        <span className="company">
                          {item.instituteName} - {item.startDate} -{" "}
                          {item.endDate === "current"
                            ? "Current"
                            : item.endDate}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
           
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
