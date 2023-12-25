import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./../../assets/json/work.json";

const Work = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get("/json/work.json")
  //       .then((res) => setData(res.data))
  //       .catch((err) => console.log(err));
  //   };
  //   fetchData();
  // }, []);

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
            {}
            {/* BYSL Global Technology Group */}
            {data?.map((item) => (
              <div key={item.id} className="col-12">
                <h1>
                  #{item.title}
                  <span></span>
                </h1>
                <div className="row">
                {item.projetList.map(project=>
                  <div key={project.id} className="col-md-3 text-center col-padding animate-box">
                    <Link
                      to={project.slug}
                      target="_blank"
                      className="work"
                    >
                      <img
                        src={require(`./../../assets/images/portfolio/${project.img}`)}
                        className="img-fluid"
                        alt="smart office"
                      />
                      <div className="desc">
                        <h3>{project.title}</h3>
                      </div>
                    </Link>
                  </div>
                )}
                </div>
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
