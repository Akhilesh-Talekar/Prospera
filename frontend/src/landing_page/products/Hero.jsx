import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container text-center mt-5 p-5 border-bottom">
      <h1 style={{color:"#0d6efd"}}>Technology</h1>
      <h3 className="text-muted my-3 fs-4">Sleek, modern and intuitive trading platform</h3>
      <p><Link className="text-decoration-none" to="/">Check out our investment offerings <i className="fa-solid fa-arrow-right"></i></Link></p>
    </div>
  );
};

export default Hero;
