import React, { useEffect, useState } from "react";
import "../styles/ContactMe.css";

const ContactMe = () => {

  return (
    <div className="contactme-container grid place-items-center">
      <h1 className="absolute text-3xl">Contact Me with</h1>
      <div id="container">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>

      </div>
    </div>
  );
};

export default ContactMe;
