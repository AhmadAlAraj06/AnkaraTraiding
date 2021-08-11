import React from "react";
import "./index.css"
import aqua from "./aqua3.jpg"
// import aquawa from "./aqua1.jpg"
import aquawa from "./wat.jpg"
// import os from "./os.jpg"
import os from "./rice.jpeg"
import ch from "./ch.jpeg"
import crn from "./crn.jpg"
import nuts from "./nuts.jpeg"
import candy from "./candy.jpg"
import bb from "./b.jpeg"
import dd from "./dd.webp"
import chi from "./chi.jpeg"
import fod from "./fod.jpg"
import gum from "./gum.jpeg"
import sweet from "./sweetss.jpg"

import { useHistory } from "react-router-dom";

const Product = () => {
  const history=useHistory()
  const Chocolate =()=>{
    history.push("./product/Chocolate")
  }
  const Biscuit =()=>{
    history.push("./product/Biscuit")
  }
  const Corn =()=>{
    history.push("./product/Corn")
  }
  const candies =()=>{
    history.push("./product/Candies")
  }
  const Nuts =()=>{
    history.push("./product/Nuts")
  }
  const Drinks =()=>{
    history.push("./product/Drinks")
  }
  const Chips =()=>{
    history.push("./product/Chips")
  }
  const FoodStuff =()=>{
    history.push("./product/FoodStuff")
  }
  const Rice =()=>{
    history.push("./product/Rice")
  }
  const Water =()=>{
    history.push("./product/Water")
  }
  const Gum =()=>{
    history.push("./product/Gum")
  }
  const sweets =()=>{
    history.push("./product/sweets")
  }
  return (
<div className="main">
    

<div className="gridd" onClick={Chocolate}><div className="g"></div><img className="imgaa" src={ch} /><h3 className="title">Chocolates</h3><button className="butt">View</button></div>
<div className="gridd" onClick={Biscuit}><div className="g"></div><img className="imgaa" src={bb} /><h1 className="title">Biscuits</h1><button className="butt">View</button></div>
<div className="gridd" onClick={Corn}><div className="g"></div><img className="imgaa" src={crn} /><h1 className="title">Corn <br/>Flex</h1><button className="butt">View</button></div>
<div className="gridd" onClick={candies}><div className="g"></div><img className="imgaa" src={candy} /><h1 className="title">candies</h1><button className="butt">View</button></div>
<div className="gridd" onClick={Nuts}><div className="g"></div><img className="imgaa" src={nuts} /><h1 className="title">Nuts</h1><button className="butt">View</button></div>
<div className="gridd" onClick={Drinks}><div className="g"></div><img className="imgaa" src={dd} /><h3 className="title">Coffee and <br/>Tea</h3><button className="butt">View</button></div>
<div className="gridd" onClick={Chips}><div className="g"></div><img className="imgaa" src={chi} /><h1 className="title">Chips</h1><button className="butt">View</button></div>
<div className="gridd" onClick={FoodStuff}><div className="g"></div><img className="imgaa" src={fod} /><h3 className="title">FoodStuff</h3><button className="butt">View</button></div>
<div className="gridd" onClick={Gum}><div className="g"></div><img className="imgaa" src={gum} /><h1 className="title">Gums</h1><button className="butt">View</button></div>
<div className="gridd" onClick={sweets}><div className="g"></div><img className="imgaa" src={sweet} /><h1 className="title">Ready <br/>Cake</h1><button className="butt">View</button></div>
<div className="gridd" onClick={Rice}><div className="g"></div><img className="imgaa" src={os} /><h1 className="title">Rice</h1><button className="butt">View</button></div>
<div className="gridd" onClick={Water}><div className="g"></div><img className="imgaa" src={aquawa} /><h1 className="title">Water</h1><button className="butt">View</button></div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
  );
};

export default Product;
