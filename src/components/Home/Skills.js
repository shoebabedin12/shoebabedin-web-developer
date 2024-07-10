import * as DevIcons from 'devicons-react';
import React from "react";
import data from "./../../assets/json/skills.json";

const Skills = () => {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios
  //     .get("/json/skills.json")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(data);
  return (
    <>
      <div id="fh5co-skills" className="animate-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center fh5co-heading">
              <h2>Skills</h2>
              
            </div>
          </div>
          {data?.map((item) => (
            <div key={item.id} className="row justify-content-center">
              <div className="col-12">
                <h1>
                  #{item.title}
                  <span></span>
                </h1>
              </div>
              {item.stackList.map((list) => {
                const IconComponent = DevIcons[list.iconComponent];
                return (
                  <div key={list.id} className="col-md-3 col-6 text-center" >
                    <div className="border mb-3 py-3" style={{background: list.color}}>
                      {IconComponent ? (
                        <IconComponent size="80" />
                      ) : (
                        <div className="chart" data-percent="100">
                          <span>
                            <strong>{list.title}</strong>
                          </span>
                          <canvas height="160" width="160"></canvas>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
