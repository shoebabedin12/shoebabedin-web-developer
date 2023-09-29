import React from "react";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";

const Resume = () => {
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
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge">
                    <FaSuitcase />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Web Developer</h3>
                      <span className="company">
                        BYSL Global Technology Group - May- 2021 - Current
                      </span>
                    </div>
                  </div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge">
                    <FaSuitcase />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Web Developer</h3>
                      <span className="company">
                        Doodle Inc. - Jan- 2021 - May 2022
                      </span>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge">
                    <FaSuitcase />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Web Designer</h3>
                      <span className="company">
                        HM Expo Private Ltd. - 2020 - 2021
                      </span>
                    </div>
                  </div>
                </li>

                <br />
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Education</h3>
                  </div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge">
                    <FaGraduationCap />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">Bachelors Degree</h3>
                      <span className="company">
                        Central University of Science & Technology - 2019 - 2022
                      </span>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge">
                    <FaGraduationCap />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">HSC</h3>
                      <span className="company">
                        Technical School And College- 2010 - 2012
                      </span>
                    </div>
                  </div>
                </li>
                <li className="animate-box timeline-unverted">
                  <div className="timeline-badge">
                    <FaGraduationCap />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">SSC</h3>
                      <span className="company">
                        Technical School And College- 2008 - 2010
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
