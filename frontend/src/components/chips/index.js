import React from "react";
import "./index.css"
import ch1 from "./img/stx1.jpeg"
import ch2 from "./img/ch2.jpeg"
import ch3 from "./img/stx2.jpg"
import ch4 from "./img/ch4.jpeg"
import ch5 from "./img/ch5.jpeg"
import ch6 from "./img/ch6.jpeg"
import ch7 from "./img/ch7.jpeg"
import ch8 from "./img/ch8.jpeg"
import ch9 from "./img/ch9.jpeg"
import ch10 from "./img/ch10.jpeg"
import ch11 from "./img/ch11.jpeg"
import ch12 from "./img/qo.jpg"
import ch13 from "./img/xp.jpeg"
import ch14 from "./img/ch14.jpeg"
import ch15 from "./img/px.jpeg"
import ch16 from "./img/ch16.jpeg"
import ch17 from "./img/ch17.jpeg"
import ch18 from "./img/ch18.jpeg"
import ch19 from "./img/ch19.jpeg"
import ch20 from "./img/po.jpg"
import ch21 from "./img/ch21.jpeg"
import ch22 from "./img/ch22.jpeg"
import ch23 from "./img/ch23.jpeg"
import ch24 from "./img/ch24.jpeg"
import ch25 from "./img/ch25.jpeg"
import ch26 from "./img/prr.jpg"


import { useHistory } from "react-router-dom";
import logo from "./logo.png";
const Chips = () => {





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

<div className="chh" ><img className="ch" src={ch1} /><h3>Lays Stax Barbecue 160g</h3></div>
<div className="chh" ><img className="ch" src={ch2} /><h3>Lays Stax Cream&Onion 160g</h3></div>
<div className="chh" ><img className="ch" src={ch3} /><h3>Lays Stax Salt&Vinegar 160g</h3></div>
<div className="chh" ><img className="ch" src={ch4} /><h3>Lays Stax Original 160g</h3></div>
<div className="chh" ><img className="ch" src={ch5} /><h3>Lays Stax Rico 160g</h3></div>
<div className="chh" ><img className="ch" src={ch6} /><h3>Lays Stax 160g</h3></div>
<div className="chh" ><img className="ch" src={ch7} /><h3>Lays Wavy BBQ 137g</h3></div>
<div className="chh" ><img className="ch" src={ch8} /><h3>Lays Wavy Jalapeno 137g</h3></div>
<div className="chh" ><img className="ch" src={ch9} /><h3>Pringles BBQ 158g</h3></div>
<div className="chh" ><img className="ch" src={ch10} /><h3>Lays Wavy Classic Salt 137g</h3></div>
<div className="chh" ><img className="ch" src={ch11} /><h3>Lays Wavy Cheddar 137g</h3></div>
<div className="chh" ><img className="ch" src={ch12} /><h3>Pringles Creame&Onion 37g</h3></div>
<div className="chh" ><img className="ch" src={ch13} /><h3>Pringles Salt&Vinegan 37g</h3></div>
<div className="chh" ><img className="ch" src={ch14} /><h3>Pringles </h3></div>
<div className="chh" ><img className="ch" src={ch15} /><h3>Pringles Original 158g</h3></div>
<div className="chh" ><img className="ch" src={ch16} /><h3>Pringles Creame&Onion 158g</h3></div>
<div className="chh" ><img className="ch" src={ch17} /><h3>Pringles Original 37g</h3></div>
<div className="chh" ><img className="ch" src={ch18} /><h3>Pringles Honey Mustard 158g</h3></div>
<div className="chh" ><img className="ch" src={ch19} /><h3>Pringles Salt&Vinegan 158g</h3></div>
<div className="chh" ><img className="ch" src={ch20} /><h3>Pringles Pizza  37g</h3></div>
<div className="chh" ><img className="ch" src={ch21} /><h3>Pringles Ranch 158g</h3></div>
<div className="chh" ><img className="ch" src={ch22} /><h3>Pringles Cheddar Cheese 158g</h3></div>
<div className="chh" ><img className="ch" src={ch23} /><h3>Pringles Cheddar&Creame 158g</h3></div>
<div className="chh" ><img className="ch" src={ch24} /><h3>Pringles Jalapeno 158g</h3></div>
<div className="chh" ><img className="ch" src={ch25} /><h3>Pringles Buffalo Ranch 158g</h3></div>
<div className="chh" ><img className="ch" src={ch26} /><h3>Pringles Mwmphis BBQ 158g</h3></div>

</div>
  );
};

export default Chips;
