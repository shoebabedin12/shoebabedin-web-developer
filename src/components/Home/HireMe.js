import React from "react";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <>
      <div id="fh5co-started" className="fh5co-bg-dark">
        <div className="overlay"></div>
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-12 text-center fh5co-heading">
              <h2>Hire Me!</h2>
              <div className="d-flex">
                <p>
                  <Link
                    to="linkedin.com/in/shoeb-abedin-bab27515a"
                    className="btn btn-default btn-lg"
                  >
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireMe;
