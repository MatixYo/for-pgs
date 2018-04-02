import React, { Component } from "react";
import Camera from "./Camera";
 
class Skicams extends Component {
  render() {
    return (
      <div id="inner-content">
        <Camera city="1" camera1="1" camera2="3"/>
        <Camera city="159" camera1="479" camera2="480"/>
      </div>
    );
  }
}
 
export default Skicams;