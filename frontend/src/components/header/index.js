import React from "react";
import "./header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const logo = () => {
    history.push("/");
  };
  const contact = () => {
    history.push("/contact");
  };
  const About = () => {
    history.push("/About");
  };

const Ads =()=>{
  history.push("/Ads")
}
  const products =()=>{
    history.push("/products")
  }
  const myFunctions=() => {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }

  }

  const logos = () => {
    window.location.reload();
  };
  return (
    <div className="App">
	 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <div class="w3-top">
  
  <div class="w3-bar w3-black w3-card">
  <a onClick={logo} class="w3-bar-item w3-button w3-padding-large">Ankara Traiding</a>
  
    <div className="mar" >
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onClick={myFunctions} title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
  <a onClick={logo} class="w3-bar-item w3-button w3-padding-large w3-hide-small">Home</a>
    <a onClick={products} class="w3-bar-item w3-button w3-padding-large w3-hide-small">Product</a>
    <a onClick={Ads} class="w3-bar-item w3-button w3-padding-large w3-hide-small">Advertisement</a>
    <a onClick={About} class="w3-bar-item w3-button w3-padding-large w3-hide-small">About Us</a>
    <a onClick={contact} class="w3-bar-item w3-button w3-padding-large w3-hide-small">Contact</a>
    </div>
  </div>
  
</div>
	<div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" >
  <a  class="w3-bar-item w3-button w3-padding-large"  onClick={logo}>Home</a>
  <a  class="w3-bar-item w3-button w3-padding-large" onClick={products}>Product</a>
  <a class="w3-bar-item w3-button w3-padding-large" onClick={Ads}>Advertisement</a>
  <a  class="w3-bar-item w3-button w3-padding-large" onClick={About}>About Us</a>
  <a  class="w3-bar-item w3-button w3-padding-large" onClick={contact}>Contact</a>
  <a  class="w3-bar-item w3-button w3-padding-large" onClick={logos}>Close</a>
</div>
      {/* <div id="home" >
        <div className="header">
          <div className="name">
            <h2 onClick={logo}>Ankara Traiding</h2>
          </div>
          <div className="contact">
            <h3 onClick={contact}>Contact us</h3>
          </div>
       
          <div className="Ads">
            <h3 onClick={Ads}>advertisement</h3>
          </div>
          <div className="products">
            <h3 onClick={products}>Product</h3>
          </div>
          <div className="About">
            <h3  onClick={About}>About us</h3>
          </div>
          <div className="home">
            <h3  onClick={logo}>Home</h3>
          </div>
        </div>

       
      </div> */}
    </div>
  );
};

export default Header;
