import React from "react";
import "./index.css"
import sw1 from "./img/sw1.jpeg"
import sw2 from "./img/sw2.jpeg"
import sw3 from "./img/sw3.jpeg"
import sw4 from "./img/sw4.jpeg"

  import { useHistory } from "react-router-dom";
import logo from "./logo.png";


const Sweets = () => {




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

<div className="griiddd" ><img className="imggaaa" src={sw1} /><h3>Orange Cake Mix 500g</h3></div>
<div className="griiddd" ><img className="imggaaa" src={sw2} /><h3>Vanilla Cake Mix 500g</h3></div>
<div className="griiddd" ><img className="imggaaa" src={sw3} /><h3>Strawberry Cake Mix 500g</h3></div>
<div className="griiddd" ><img className="imggaaa" src={sw4} /><h3>Chocolate Cake Mix 500g</h3></div>

</div>
  );
};

export default Sweets;
