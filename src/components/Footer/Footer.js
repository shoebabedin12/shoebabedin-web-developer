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
                &copy; 2022 All Rights Reserved. 
                Designed by{" "}
                <Link className=""
                  to="linkedin.com/in/shoeb-abedin-bab27515a"
                  target="_blank"
                >
                  Shoeb Abedin
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
