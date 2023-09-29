import React from "react";
import { ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <div id="fh5co-skills" className="animate-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center fh5co-heading">
              <h2>Skills</h2>
            </div>
          </div>
          {/* <div className="row row-pb-md">
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="100">
                <span>
                  <strong>HTML5</strong>100%
                </span>
                <canvas height="160" width="160"></canvas>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="100">
                <span>
                  <strong>CSS3</strong>100%
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="100">
                <span>
                  <strong>Sass</strong>100%
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="100">
                <span>
                  <strong>jQuery</strong>100%
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="100">
                <span>
                  <strong>Bootstrap</strong>100%
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="100">
                <span>
                  <strong>TailwindCss</strong>100%
                </span>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="90">
                <span>
                  <strong>React JS</strong>90%
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
              <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="90">
                <span>
                  <strong>Next JS</strong>90%
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
              <button class="spin circle">Spin Circle</button>
              <div className="chart" data-percent="100">
                <span>
                  <strong>PSD/Figma to HTML</strong>100%
                </span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
              <button class="spin circle">
              <span>
                  <strong>JavaScript</strong>90%
                </span>
              </button>
              <div className="chart" data-percent="90">
                <span>
                  <strong>JavaScript</strong>90%
                </span>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-6">
              <div className="progress-wrap">
                <h3>
                  <span className="name-left">HTML5/CSS3</span>
                  <span className="value-right">100%</span>
                </h3>
                <div className="progress">
                  <ProgressBar animated now={100}/>
                </div>
              </div>
              <div className="progress-wrap">
                <h3>
                  <span className="name-left">Bootstrap</span>
                  <span className="value-right">100%</span>
                </h3>
                <div className="progress">
                  <ProgressBar animated now={100} />
                </div>
              </div>
              <div className="progress-wrap">
                <h3>
                  <span className="name-left">Tailwind Css</span>
                  <span className="value-right">100%</span>
                </h3>
                <div className="progress">
                  <ProgressBar animated now={100} />
                </div>
              </div>
              <div className="progress-wrap">
                <h3>
                  <span className="name-left">React Js</span>
                  <span className="value-right">90%</span>
                </h3>
                <div className="progress">
                  <ProgressBar animated now={90} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="progress-wrap">
                <h3>
                  <span className="name-left">PSD/Figma to HTML</span>
                  <span className="value-right">100%</span>
                </h3>
                <div className="progress">
                  <ProgressBar animated now={100} />
                </div>
              </div>
              <div className="progress-wrap">
                <h3>
                  <span className="name-left">JavaScript</span>
                  <span className="value-right">90%</span>
                </h3>
                <div className="progress">
                  <ProgressBar animated now={90} />
                </div>
              </div>
              <div className="progress-wrap">
                <h3>
                  <span className="name-left">jQuery</span>
                  <span className="value-right">75%</span>
                </h3>
                <div className="progress">
                  <ProgressBar animated now={75} />
                </div>
              </div>
              <div className="progress-wrap">
                <h3>
                  <span className="name-left">Next Js</span>
                  <span className="value-right">75%</span>
                </h3>
                <div className="progress">
                  <ProgressBar animated now={75} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
