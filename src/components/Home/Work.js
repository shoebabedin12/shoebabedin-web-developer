import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const fetchWebsiteInfo = async () => {
    try {
      const response = await axios.get(url);
      const html = response.data;

      // Parse the HTML content to find the OGP metadata
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const ogpTitle = doc.querySelector('meta[property="og:title"]');
      const ogpImage = doc.querySelector('meta[property="og:image"]');

      if (ogpTitle) {
        setTitle(ogpTitle.getAttribute("content"));
      }

      if (ogpImage) {
        setThumbnail(ogpImage.getAttribute("content"));
      }
    } catch (error) {
      console.error("Error fetching website info:", error);
    }
  };
  return (
    <>
      <div id="fh5co-work" className="fh5co-bg-dark">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-12 text-center fh5co-heading">
              <h2>Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.tribel.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/tribel-public-trending.png")}
                  className="img-fluid"
                  alt="tribel"
                />
                <div className="desc">
                  <h3>Tribel</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.m.tribel.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/m-tribel-public-trending.png")}
                  className="img-fluid"
                  alt="m-tribel"
                />
                <div className="desc">
                  <h3>Tribel Mobile</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.thedoodleinc.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/thedoodleinc.png")}
                  className="img-fluid"
                  alt="the doodle inc"
                />
                <div className="desc">
                  <h3>The Doodle Inc.</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.ctoforumbd.org/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/ctoforumbd-org.png")}
                  className="img-fluid"
                  alt="cto forum bd"
                />
                <div className="desc">
                  <h3>CTO Forum</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                // to="https://www.famglam.co/"
                to="https://shoebabedin12.github.io/demo/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/famglam.png")}
                  className="img-fluid"
                  alt="famglam"
                />
                <div className="desc">
                  <h3>FamGlam</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link to="https://shangon.shop/" target="_blank" className="work">
                <img
                  src={require("./../../assets/images/portfolio/shangon-shop.png")}
                  className="img-fluid"
                  alt="shangon-shop"
                />
                <div className="desc">
                  <h3>Shangon-Shop</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="http://www.thedorothydraper.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/thedorothydraper.png")}
                  className="img-fluid"
                  alt="the dorothy draper"
                />
                <div className="desc">
                  <h3>The Dorothy Draper</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="http://www.apppeople.net/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/apppeople-net.png")}
                  className="img-fluid"
                  alt="app people-net"
                />
                <div className="desc">
                  <h3>App People</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.hmweddings.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/hmweddings.png")}
                  className="img-fluid"
                  alt="hm weddings"
                />
                <div className="desc">
                  <h3>HM Weddings</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.hmexpoprivateltd.com"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/hmexpoprivateltd.png")}
                  className="img-fluid"
                  alt="hm expo private ltd"
                />
                <div className="desc">
                  <h3>HM Expo Private Ltd</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.inspaceatelier.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/inspaceatelier.png")}
                  className="img-fluid"
                  alt="inspace atelier"
                />
                <div className="desc">
                  <h3>Inspace-Atelier</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://watchfaceswizard.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/watchfaceswizard.png")}
                  className="img-fluid"
                  alt="watch faceswizard"
                />
                <div className="desc">
                  <h3>Watch-Faces-Wizard</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="http://smartoffice.io/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/smartoffice.png")}
                  className="img-fluid"
                  alt="smart office"
                />
                <div className="desc">
                  <h3>Smart-Office</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.byslglobal.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/byslglobal.png")}
                  className="img-fluid"
                  alt="bysl global"
                />
                <div className="desc">
                  <h3>BYSL-Global-Technologies</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <Link
                to="https://www.intellidigital.com/"
                target="_blank"
                className="work"
              >
                <img
                  src={require("./../../assets/images/portfolio/intellidigital.png")}
                  className="img-fluid"
                  alt="intelli digital"
                />
                <div className="desc">
                  <h3>Intelli-Digital</h3>
                </div>
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
