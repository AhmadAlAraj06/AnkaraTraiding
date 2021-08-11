import React from "react";
import "./index.css"
import f1  from "./img/f1.jpeg"
import f2  from "./img/f2.jpeg"
import f3  from "./img/f3.jpeg"
import f4  from "./img/f4.jpeg"
import f5  from "./img/f5.jpeg"
import f6  from "./img/f6.jpeg"
import f7  from "./img/f7.jpeg"
import f8  from "./img/f8.jpeg"
import f9 from "./img/f9.jpeg"
import f10 from "./img/f10.jpeg"
import f11 from "./img/f11.jpeg"
import f12 from "./img/f12.jpeg"
import f13 from "./img/f13.jpeg"
import { useHistory } from "react-router-dom";
import logo from "./logo.png";

const Food = () => {





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

<div className="ness" ><img className="nesss" src={f1} /><h3>Macaroni 400g</h3></div>
<div className="ness" ><img className="nesss" src={f2} /><h3>Macaroni 400g</h3></div>
<div className="ness" ><img className="nesss" src={f3} /><h3>Macaroni 400g</h3></div>
<div className="ness" ><img className="nesss" src={f4} /><h3>Macaroni 400g</h3></div>
<div className="ness" ><img className="nesss" src={f5} /><h3>Macaroni 400g</h3></div>
<div className="ness" ><img className="nesss" src={f6} /><h3>Macaroni 400g</h3></div>
<div className="ness" ><img className="nesss" src={f7} /><h3>Macaroni 400g</h3></div>
<div className="ness" ><img className="nesss" src={f8} /><h3>Mushroom 400g</h3></div>
<div className="ness" ><img className="nesss" src={f9} /><h3>Corn pcs 175g</h3></div>
<div className="ness" ><img className="nesss" src={f10} /><h3>Hot Tona 160g</h3></div>
<div className="ness" ><img className="nesss" src={f11} /><h3>Sardines 125g</h3></div>
<div className="ness" ><img className="nesss" src={f12} /><h3>Tona 160g</h3></div>

</div>
  );
};

export default Food;
