import React from "react";
import product from "./product.jpg";
import logo from "./logo.png";
import cc from "./cc.jpg";
import tt from "./truck.jpg";


import "./main.css";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  const read = () => {
    history.push("/About");
  };
  const pr = () => {
    history.push("/products");
  };
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />

      <img className="product" src={product} />

      <br />
      <div className="welcomed">
      <div className="welcome">
          <div className="welcomeds">
          <h1 className="txt">Welcome</h1>
          <h4 className="txt">
            In our company we realize that quality of our products <br />
            is the key to our success.
            <br />
            And our success lies in the satisfaction of our <br />
            customers and clients; therefore we are committed to provide the
            products of high standard
          </h4>
          <br />
          <button onClick={read} className="read">
            Read More
          </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="cc">
            <img className="ccc" src={cc}/>
          
          </div>
        </div>
        
      </div>
      
 {/* <div className="ww"> */}
 {/* <h1 className="what">what are you doing here?</h1> */}
 {/* </div> */}
    </div>
  );
};

export default Main;
