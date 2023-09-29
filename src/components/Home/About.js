import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div id="fh5co-about" className="animate-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center fh5co-heading">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ul className="info">
                <li>
                  <span className="first-block">Full Name:</span>
                  <span className="second-block">MD Shoeb Abedin</span>
                </li>
                <li>
                  <span className="first-block">Phone:</span>
                  <span className="second-block">+8801686586914</span>
                </li>
                <li>
                  <span className="first-block">Email:</span>
                  <span className="second-block">shoebabedin12@gmail.com</span>
                </li>
                <li>
                  <span className="first-block">Address:</span>
                  <span className="second-block">
                    Sagupta, Mirpur-12, Dhaka, Bangladesh
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <h2>Hello There!</h2>
              <p>
                I am Web Developer From Bangladesh.I have 3 years Experience on
                frontend development.
              </p>
              <p>
                <ul className="fh5co-social-icons">
                  <li>
                    <Link
                      to="https://twitter.com/shoebabedin12"
                      target="_blank" className="twitter"
                    >
                      <AiOutlineTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.facebook.com/shoeb.abidin"
                      target="_blank" className="facebook"
                    >
                      <FaFacebookSquare/>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="linkedin.com/in/shoeb-abedin-bab27515a"
                      target="_blank" className="linkedin"
                    >
                      <FaLinkedinIn/>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://dribbble.com/shoebabeidn12"
                      target="_blank" className="dribble"
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
    </>
  );
};

export default About;
