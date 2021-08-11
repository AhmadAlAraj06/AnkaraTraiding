import React from "react";
import video from "./ankaraTrailer.mp4";
import "./index.css";

const Main = () => {
  return (
    <video className="trailer" src={video} width="100%" height="auto" controls />
  );
};

export default Main;
