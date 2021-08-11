import React from "react";
import "./index.css"
import ca1 from "./img/ca1.jpeg"
import ca2 from "./img/ca2.jpeg"
import ca3 from "./img/ca3.jpeg"
import ca4 from "./img/ca4.jpeg"
import ca5 from "./img/ca5.jpeg"
import ca6 from "./img/ca6.jpeg"
import ca7 from "./img/ca7.jpeg"
import ca8 from "./img/ca8.jpeg"
import ca9 from "./img/ca9.jpeg"
import ca10 from "./img/ca10.jpeg"
import ca12 from "./img/ca12.jpeg"
import ca13 from "./img/ca13.jpeg"
import ca14 from "./img/ca14.jpeg"
import ca15 from "./img/ca15.jpeg"
import ca16 from "./img/ca16.jpeg"
import ca17 from "./img/ca17.jpeg"
import ca18 from "./img/ca18.jpeg"
import ca19 from "./img/ca19.jpeg"
import ca20 from "./img/ca20.jpeg"
import ca21 from "./img/ca21.jpeg"
import ca22 from "./img/ca22.jpeg"
import ca23 from "./img/ca23.jpeg"
import ca24 from "./img/ca24.jpeg"
import ca25 from "./img/ca25.jpeg"
import ca26 from "./img/ca26.jpeg"
import ca27 from "./img/ca27.jpeg"
import ca28 from "./img/ca28.jpeg"
import { useHistory } from "react-router-dom";
import logo from "./logo.png";


const Candy = () => {


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

<div className="ca" ><img className="cca" src={ca1} /><h3>Smarties 90g</h3></div>
<div className="ca" ><img className="cca" src={ca2} /><h3>Skittles Fruits 36g</h3></div>
<div className="ca" ><img className="cca" src={ca3} /><h3>Skittles Tropical 36g</h3></div>
<div className="ca" ><img className="cca" src={ca4} /><h3>Skittles Chewies 196g</h3></div>
<div className="ca" ><img className="cca" src={ca5} /><h3>Happy Pop XXL 50pcs</h3></div>
<div className="ca" ><img className="cca" src={ca6} /><h3>Happy Pop 50pcs</h3></div>
<div className="ca" ><img className="cca" src={ca8} /><h3>Happy Pop 50pcs</h3></div>
<div className="ca" ><img className="cca" src={ca28} /><h3>Happy Pop 35pcs</h3></div>
<div className="ca" ><img className="cca" src={ca7} /><h3>Choco Mint 325g</h3></div>
<div className="ca" ><img className="cca" src={ca9} /><h3>Mini Candy 325g</h3></div>
<div className="ca" ><img className="cca" src={ca10} /><h3>Chocomint Toffee 325g</h3></div>
<div className="ca" ><img className="cca" src={ca16} /><h3>Fruita Sidawi 325g</h3></div>
<div className="ca" ><img className="cca" src={ca17} /><h3>Choco Toffee 325g</h3></div>
<div className="ca" ><img className="cca" src={ca19} /><h3>Citrino Sidawi 325g</h3></div>
<div className="ca" ><img className="cca" src={ca21} /><h3>Toffee kg</h3></div>
<div className="ca" ><img className="cca" src={ca22} /><h3>Toffee kg</h3></div>
<div className="ca" ><img className="cca" src={ca23} /><h3>Toffee kg</h3></div>
<div className="ca" ><img className="cca" src={ca24} /><h3>Toffee kg</h3></div>
<div className="ca" ><img className="cca" src={ca25} /><h3>Toffee kg</h3></div>
<div className="ca" ><img className="cca" src={ca26} /><h3>Toffee kg</h3></div>
<div className="ca" ><img className="cca" src={ca27} /><h3>Candy kg</h3></div>

</div>
  );
};

export default Candy;
