import React from "react";
import { image } from "../data/data";

function About() {
  return <div>
    <h2>About Me</h2>
    <p>Hi! I'm Dominique. A Front-End Engineer that loves to read!!! 
      And I made this!</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
