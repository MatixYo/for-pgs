import React, { Component } from "react";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
 
class Home extends Component {
  render() {
    return (
      <div>
      <div id="inner-content">
        <article className="section section-about-us">
          <img className="about-us-image" src={i1} alt="1"/>
          <h2 className="about-us-title">Lorem ipsum</h2>
          <p className="about-us-text">Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.</p>
        </article>
        <article className="section section-about-us">
          <img className="about-us-image" src={i2} alt="2"/>
          <h2 className="about-us-title">Lorem ipsum</h2>
          <p className="about-us-text">Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.</p>
        </article>
        <article className="section section-about-us">
          <img className="about-us-image" src={i3} alt="3"/>
          <h2 className="about-us-title">Lorem ipsum</h2>
          <p className="about-us-text">Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.</p>
        </article>
        </div>
      </div>
    );
  }
}
 
export default Home;