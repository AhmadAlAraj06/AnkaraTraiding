import React from "react";
import "./index.css"
import ccorn1 from "./img/ccorn1.jpeg"
import ccorn2 from "./img/ccorn2.jpeg"
import ccorn3 from "./img/ccorn3.jpeg"
import ccorn4 from "./img/ccorn4.jpeg"
import ccorn5 from "./img/ccorn5.jpeg"
import ccorn6 from "./img/ccorn6.jpeg"
import ccorn7 from "./img/ccorn7.jpeg"
import ccorn8 from "./img/ccorn8.jpeg"
import ccorn9 from "./img/ccorn9.jpeg"
import ccorn10 from "./img/ccorn10.jpeg"
import ccorn11 from "./img/ccorn11.jpeg"
import ccorn12 from "./img/ccorn12.jpeg"
import ccorn13 from "./img/ccorn13.jpeg"
import { useHistory } from "react-router-dom";
import logo from "./logo.png";

const Corn = () => {
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

<div className="griddd" ><img className="imgaaa" src={ccorn1} /><h3>Fluti Cerera 500g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn2} /><h3>Daksi Cerera 250g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn3} /><h3>Snappy Cerera 250g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn4} /><h3>Snappy Cerera 500g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn5} /><h3>Choco Crakys Cerera 500g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn6} /><h3>Mix-o Cerera 500g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn7} /><h3>Choco Crakys Cerera 250g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn8} /><h3>Fruity Hoops Cerera 250g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn9} /><h3>Fruity Hoops Cerera 500g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn10} /><h3>Classic Cerera 500g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn11} /><h3>Daksi Cerera 250g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn12} /><h3>Fluti Cerera 250g</h3></div>
<div className="griddd" ><img className="imgaaa" src={ccorn13} /><h3>Cinamoni Cerera 250g</h3></div>

</div>
  );
};

export default Corn;
