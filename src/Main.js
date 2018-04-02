import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import AboutUs from "./AboutUs";
import Skicams from "./Skicams";
import Contact from "./Contact";
import Logo from "./pgs.png";
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/for-pgs">
        <div id="page">
          <header id="header">
            <div id="header-content">
              <img id="logo" src={Logo} alt="PGS Software"/>
              <nav>
                <NavLink exact to="/">About us</NavLink>
                <NavLink to="/skicams">Skicams</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </nav>
            </div>
          </header>
          <div id="content">
            <Route exact path="/" component={AboutUs}/>
            <Route path="/skicams" component={Skicams}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <footer id="footer">
            <p>Powered by PGS</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;