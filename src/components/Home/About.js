import React from "react";
import { SocialIcon } from "react-social-icons";

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
              <h1>Meet Md Shoeb Abedin, Your Expert Web Developer</h1>
              <div class="description">
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
                  <span class="highlight">
                    top-notch, user-friendly, and responsive websites
                  </span>{" "}
                  that not only meet but exceed your expectations.
                </p>
                <p>
                  Whether you need a{" "}
                  <span class="highlight">personal portfolio</span>, an{" "}
                  <span class="highlight">e-commerce platform</span>, or a{" "}
                  <span class="highlight">business website</span>, I am here to
                  transform your vision into reality. Let's collaborate and
                  create something extraordinary for your online presence!
                </p>
              </div>

              <p>
                <ul className="fh5co-social-icons">
                  <li>
                    <SocialIcon url="https://twitter.com/shoebabedin12" />
                  </li>
                  <li>
                    <SocialIcon url="https://www.facebook.com/shoeb.abidin" />
                  </li>
                  <li>
                    <SocialIcon url="https://www.linkedin.com/in/shoeb-abedin-bab27515a" />
                  </li>
                  <li>
                    <SocialIcon url="https://dribbble.com/shoebabeidn12" />
                  </li>
                  <li>
                    <SocialIcon url="https://github.com/shoebabedin12" />
                  </li>
                  <li>
                      <SocialIcon url="https://www.fiverr.com/shoebabedin12?up_rollout=true" />
                    </li>
                    <li>
                      <SocialIcon url="https://www.upwork.com/freelancers/~018286ce4ce4d7084b" />
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
