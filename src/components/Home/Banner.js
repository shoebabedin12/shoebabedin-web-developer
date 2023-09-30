import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <header
        id="fh5co-header"
        className="hero fh5co-cover js-fullheight"
        role="banner"
        style={{backgroundImage:"url(./../../../assets/images/cover_bg_3.jpg)"}}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center position-relative">
              <div className="display-t js-fullheight">
                <div
                  className="display-tc js-fullheight animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div
                    className="profile-thumb"
                  >
                    <img src={require("./../../assets/images/user-3.jpeg")} className="img-fluid" alt="" />
                  </div>
                  <h1>
                    <span>MD Shoeb Abedin</span>
                  </h1>
                  <h3>
                    <span>Web Developer</span>
                  </h3>
                  <p></p>
                  <p>

                    <ul className="fh5co-social-icons">
                      <li>
                        <Link
                          to="https://twitter.com/shoebabedin12"
                          target="_blank"
                          
                        >
                          <AiOutlineTwitter/>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.facebook.com/shoeb.abidin"
                          target="_blank"
                        >
                          <FaFacebookSquare/>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.linkedin.com/in/shoeb-abedin-bab27515a"
                          target="_blank"
                        >
                          <FaLinkedinIn/>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://dribbble.com/shoebabeidn12"
                          target="_blank"
                        >
                          <BsDribbble/>
                        </Link>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
