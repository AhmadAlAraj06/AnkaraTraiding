import React from "react";
import "./index.css"
import gum1 from "./img/gum1.jpeg"
import gum2 from "./img/gum2.jpeg"
import gum3 from "./img/gum3.jpeg"
import gum4 from "./img/gum4.jpeg"
import gum5 from "./img/gum5.jpeg"
import gum6 from "./img/gum6.jpeg"
import gum7 from "./img/gum7.jpeg"
import gum8 from "./img/gum8.jpeg"
import { useHistory } from "react-router-dom";
import logo from "./logo.png";

const Gum = () => {





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

<div className="gum" ><img className="gumm" src={gum1} /><h3>Mentos White 60g</h3></div>
<div className="gum" ><img className="gumm" src={gum2} /><h3>Mentos White 60g</h3></div>
<div className="gum" ><img className="gumm" src={gum3} /><h3>Mentos White 60g</h3></div>
<div className="gum" ><img className="gumm" src={gum4} /><h3>Extra Peppermint 10pcs</h3></div>
<div className="gum" ><img className="gumm" src={gum5} /><h3>Extra Peppermint 5pcs</h3></div>
<div className="gum" ><img className="gumm" src={gum6} /><h3>Extra White 10pcs</h3></div>
<div className="gum" ><img className="gumm" src={gum7} /><h3>Extra Eucalyptus 10pcs</h3></div>

</div>
  );
};

export default Gum;
