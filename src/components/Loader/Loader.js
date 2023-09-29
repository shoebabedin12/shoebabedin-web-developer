import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 300);
  }, []);
  return <>{loader && <div className="fh5co-loader"></div>}</>;
};

export default Loader;
