import React from "react";
import { use } from "react";
import {useNavigate} from "react-router-dom";

const Hero = () => {
  const buttonRef = React.useRef(null);
  const navigate = useNavigate();
  async function onClick() {
    const confetti = (await import("canvas-confetti")).default;
    const rect = buttonRef.current.getBoundingClientRect();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });

    navigate("/sign-up");
  }

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/Images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5"><span style={{color:"#0d6efd"}}>Invest</span> in the future</h1>
        <p>
          Join the thousands of investors who are already using our platform to
          build their portfolios.
        </p>
        <div className="d-flex justify-content-center">
          <a href=""></a>
          <button
            ref={buttonRef}
            className="btn btn-primary p-2"
            style={{ width: "25%" }}
            onClick={onClick}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
