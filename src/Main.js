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
        <div className="page">
          <header className="header">
            <div className="header-content">
              <img className="logo" src={Logo} alt="PGS Software"/>
              <nav>
                <NavLink exact to="/">About us</NavLink>
                <NavLink to="/skicams">Skicams</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </nav>
            </div>
          </header>
          <Route exact path="/" component={AboutUs}/>
          <Route path="/skicams" component={Skicams}/>
          <Route path="/contact" component={Contact}/>
          <footer className="footer">
            <p>Powered by PGS</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;