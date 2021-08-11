import React from "react";
import "./index.css"
import Nu1  from "./img/Nu1.jpeg"
import Nu2  from "./img/Nu2.jpeg"
import Nu3  from "./img/Nu3.jpeg"
import Nu4  from "./img/Nu4.jpeg"
import Nu5  from "./img/Nu5.jpeg"
import Nu6  from "./img/Nu6.jpeg"
import Nu7  from "./img/Nu7.jpeg"
import Nu8  from "./img/Nu8.jpeg"
import Nu9  from "./img/Nu9.jpeg"
import  Nu10 from "./img/Nu10.jpeg"
import  Nu11 from "./img/Nu11.jpeg"
import  Nu12 from "./img/Nu12.jpeg"
import  Nu13 from "./img/Nu13.jpeg"
import  Nu14 from "./img/Nu14.jpeg"
import  Nu15 from "./img/Nu15.jpeg"
import { useHistory } from "react-router-dom";
import logo from "./logo.png";

const Nuts = () => {


  const history = useHistory()

const h =()=>{
history.push("/")
}
const a =()=>{
history.push("/about")
}
  const c =()=>{
history.push("/contact")
  }
  const insta = () => {
    window.open(
      "https://www.instagram.com/ankara.trading/?fbclid=IwAR0UUcuxhW8VldLBol6rKg8uVJgUfoE7pvaZlHMcHjf7rIzy1n-cSgoGp-A"
    );
  };
  const face = () => {
    window.open(
      "https://www.facebook.com/Ankara.Trading.Official/about/?ref=page_internal"
    );
  };
  const linked = () => {
    window.open();
  };
  const twitter = () => {
    window.open();
  };
  return (
<div className="main">

<div className="ness" ><img className="nesss" src={Nu1} /><h3>Raisins kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu2} /><h3>Almond Quarters kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu3} /><h3>Heart Nut kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu4} /><h3>Ansas Almonds kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu5} /><h3>Raisins kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu6} /><h3>Whole Almonds kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu7} /><h3>Pistachio Talpees kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu8} /><h3>Pistachio Halabi kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu9} /><h3>Raisins kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu10} /><h3>Kajo kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu11} /><h3>Coconut kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu12} /><h3>Hazelnut kg</h3></div>
<div className="ness" ><img className="nesss" src={Nu13} /><h3>Sudanese Pistachio kg</h3></div>

</div>
  );
};

export default Nuts;
