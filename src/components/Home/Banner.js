import axios from "axios";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/json/social.json")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);
  return (
    <>
      <header
        id="fh5co-header"
        className="hero fh5co-cover js-fullheight"
        role="banner"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay">
          
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center position-relative">
              <div className="display-t js-fullheight">
                <div
                  className="display-tc js-fullheight animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="profile-thumb">
                    <img
                      src={require("./../../assets/images/user-3.jpeg")}
                      className="img-fluid"
                      alt="user"
                    />
                  </div>
                  <h1>
                    <span>MD Shoeb Abedin</span>
                  </h1>
                  <h3>
                    <span>Web Developer</span>
                  </h3>
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
        </div>
      </header>
    </>
  );
};

export default Banner;
