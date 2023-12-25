import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div id="fh5co-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                &copy; {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
