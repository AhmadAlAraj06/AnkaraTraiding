import React from "react";
import header from "./components/header/index";
import headerm from "./components/header main/index";
import bottomc from "./components/bottomc/boc";
import bottoma from "./components/bottoma/index";
import bottom from "./components/bottom/index";

import bottomads from "./components/bottomads/index";
import main from "./components/main/index";
import About from "./components/about/index";
import ads from "./components/ads/index";
import product from "./components/product/index";
import corn from "./components/corn/index";
import drinks from "./components/drinks/index";
import chips from "./components/chips/index";
import chocolate from "./components/chocolate/index";
import candy from "./components/candy/index";
import gu from "./components/gum/index"
import Biscuit from "./components/biscuit/index"
import waterr from "./components/water/index"
import ricee from "./components/rice/index"
import sweets from "./components/sweets/index"
import FoodStuff from "./components/food/index"
import nuts from "./components/nuts/index"
import appp from "./components/appp"


import contact from "./components/contact/index";
import { Route } from "react-router-dom";


const App = () => {
  return (
    <>
	<Route exact path="/" component={headerm} />
	<Route exact path="/about" component={header} />
	<Route exact path="/contact" component={header} />
	<Route exact path="/brands" component={header} />
	<Route exact path="/ads" component={header} />
	<Route exact path="/show" component={header} />
	<Route exact path="/product/Corn" component={header} />
	<Route exact path="/product/Drinks" component={header} />
	<Route exact path="/product/Chips" component={header} />
	<Route exact path="/product/Chocolate" component={header} />
	<Route exact path="/product/Candies" component={header} />
	<Route exact path="/product/Gum" component={header} />
	<Route exact path="/product/Water" component={header} />
	<Route exact path="/products" component={header} />
	<Route exact path="/product/Rice" component={header} />
	<Route exact path="/product/sweets" component={header} />
	<Route exact path="/product/FoodStuff" component={header} />
	<Route exact path="/product/Nuts" component={header} />
	<Route exact path="/product/Biscuit" component={header} />

	{/* <Route exact path="/products" component={shop} /> */}
	<Route exact path="/products" component={product} />
	<Route exact path="/product/Corn" component={corn} />
	<Route exact path="/product/Drinks" component={drinks} />
	<Route exact path="/product/Chips" component={chips} />
	<Route exact path="/product/Chocolate" component={chocolate} />
	<Route exact path="/product/Candies" component={candy} />
	<Route exact path="/product/Gum" component={gu} />
	<Route exact path="/product/Water" component={waterr} />
	<Route exact path="/product/Rice" component={ricee} />
	<Route exact path="/product/sweets" component={sweets} />
	<Route exact path="/product/FoodStuff" component={FoodStuff} />
	<Route exact path="/product/Nuts" component={nuts} />
	<Route exact path="/product/Biscuit" component={Biscuit} />
	<Route exact path="/ap" component={appp} />
	
	
	<Route exact path="/ads" component={ads} />
	<Route exact path="/" component={main} />
	<Route  path="/contact" component={contact} />
	<Route   path="/contact" component={bottomc} />
	<Route   path="/about" component={About} />
	<Route   path="/about" component={bottoma} />
	<Route  exact path="/" component={bottom} />
	<Route   path="/ads" component={bottomads} />

  
      {/* <Route exact path="/main" component={Main} />
      <Switch>
        <Route exact path="/" component={Together} />
        <Route exact path="/sign" component={Login} />
        <Route component={Erorr} />
      </Switch> */}     
    </>
  );
};

export default App;
 