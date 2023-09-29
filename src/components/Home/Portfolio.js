import React from "react";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="button-group filters-button-group">
                <button className="button is-checked" data-filter="*">
                  show all
                </button>
                <button className="button" data-filter=".bootstrap">
                  Bootstrap
                </button>
                <button className="button" data-filter=".tailwind">
                  TailwindCss
                </button>
                <button className="button" data-filter=".react">
                  React JS
                </button>
                <button className="button" data-filter=".next">
                  Next JS
                </button>
              </div>

              <div className="grid">
                <div
                  className="element-item bootstrap"
                  data-category="bootstrap"
                >
                  <Link to="https://www.m.tribel.com/" className="name">
                    Bootstrap
                  </Link>
                </div>
                <div className="element-item tailwind" data-category="tailwind">
                  <Link to="https://www.m.tribel.com/" className="name">
                    TailwindCss
                  </Link>
                </div>
                <div className="element-item react" data-category="react">
                  <Link to="https://www.m.tribel.com/" className="name">
                    React JS
                  </Link>
                </div>
                <div className="element-item next" data-category="next">
                  <Link to="https://www.m.tribel.com/" className="name">
                    Next JS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
