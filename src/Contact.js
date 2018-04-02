import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    let preventEvent = event => event.preventDefault();
    return (
      <div id="inner-content">
        <form className="section section-contact" onSubmit={preventEvent}>
          <input className="contact-input" type="name" placeholder="Name" required/>
          <input className="contact-input" type="email" placeholder="Email" required/>
          <textarea className="contact-input" placeholder="Message"></textarea>
          <input className="send" type="submit" value="send"/>
        </form>
      </div>
    );
  }
}
 
export default Contact;