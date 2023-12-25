import axios from "axios";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import data from "./../../assets/json/social.json";

const About = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get("/json/social.json")
  //       .then((res) => setData(res.data))
  //       .catch((err) => console.log(err));
  //   };

  //   fetchData();
  // }, []);
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
              <h1>Meet Md Shoeb Abedin, Your Expert Web Developer</h1>
              <div className="description">
                <p>
                  Hello, I am a passionate and experienced Web Developer based
                  in Bangladesh with **3 years of expertise** in web
                  development. I specialize in crafting visually stunning and
                  highly functional websites tailored to your unique needs.
                </p>
                <p>
                  With a keen eye for design and a deep understanding of the
                  latest web technologies, I can bring your ideas to life. My
                  focus is on delivering{" "}
                  <span className="highlight">
                    top-notch, user-friendly, and responsive websites
                  </span>{" "}
                  that not only meet but exceed your expectations.
                </p>
                <p>
                  Whether you need a{" "}
                  <span className="highlight">personal portfolio</span>, an{" "}
                  <span className="highlight">e-commerce platform</span>, or a{" "}
                  <span className="highlight">business website</span>, I am here
                  to transform your vision into reality. Let's collaborate and
                  create something extraordinary for your online presence!
                </p>
              </div>

              <ul className="fh5co-social-icons">
                {data.map((item) => (
                  <li key={item.id} className="item.id">
                    <SocialIcon url={item.slug} />
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

export default About;
