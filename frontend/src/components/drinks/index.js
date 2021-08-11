import React from "react";
import "./index.css"
import nes1 from "./img/nes1.jpeg"
import nes2 from "./img/nes2.jpeg"
import nes3 from "./img/nes3.jpeg"
import nes4 from "./img/nes4.jpeg"
import nes5 from "./img/nes5.jpeg"
import nes6 from "./img/nes6.jpeg"
import nes7 from "./img/nes7.jpeg"
import nes8 from "./img/nes8.jpeg"
import nes9 from "./img/nes9.jpeg"
import nes10 from "./img/nes10.jpeg"
import nes11 from "./img/nes11.jpeg"
import nes12 from "./img/nes12.jpeg"
import nes14 from "./img/nesgold.jpg"
import nes15 from "./img/nes15.jpeg"
import nes16 from "./img/verona.jpg"
import nes17 from "./img/nes17.jpeg"
import nes18 from "./img/nes18.jpeg"
import nes19 from "./img/nes19.jpeg"
import nes20 from "./img/nes20.jpeg"
import nes21 from "./img/nes21.jpeg"
import nes22 from "./img/nes22.jpeg"
import nes23 from "./img/nes23.jpeg"
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import f14 from "./img/f14.jpeg"
import f15 from "./img/f15.jpeg"

const Drinks = () => {





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

<div className="ness" ><img className="nesss" src={nes1} /><h3>Nescafe Chococino 8pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes3} /><h3>Nescafe Espresso Milano 16pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes4} /><h3>Nescafe Latte Vanilla 8pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes5} /><h3>Nescafe Caramel 8pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes6} /><h3>Nescafe Espresso Roma 8pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes7} /><h3>Nescafe Latte Macchiato 8pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes8} /><h3>Nescafe Espresso Cramel 16pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes9} /><h3>Nescafe Espresso Decaffeinato 16pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes10} /><h3>Nescafe Ristretto Ardenza 16pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes11} /><h3>Nescafe Nestle Nesquik 16pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes12} /><h3>Nescafe Espresso Extra Creama 16pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes14} /><h3>Nescafe Espresso 100g</h3></div>
<div className="ness" ><img className="nesss" src={nes17} /><h3>Nescafe Sweet&Creamy 10pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes18} /><h3>Nescafe Brown Sugar 10pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes19} /><h3>Nescafe Coffee&Creamer 10pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes20} /><h3>Nescafe Classic 10pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes21} /><h3>Nescafe Strong 10pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes23} /><h3>StarBucks Espresso 200g</h3></div>
<div className="ness" ><img className="nesss" src={nes15} /><h3>StarBucks House Blend 200g</h3></div>
<div className="ness" ><img className="nesss" src={nes16} /><h3>StarBucks Verona 200g</h3></div>
<div className="ness" ><img className="nesss" src={nes2} /><h3>Nescafe Marrakesh Tea 16pcs</h3></div>
<div className="ness" ><img className="nesss" src={nes22} /><h3>Stevia 250  </h3></div>
<div className="ness" ><img className="nesss" src={f14} /><h3>Stevia 150g</h3></div>
<div className="ness" ><img className="nesss" src={f15} /><h3>Stevia 75ml</h3></div>

</div>
  );
};

export default Drinks;
