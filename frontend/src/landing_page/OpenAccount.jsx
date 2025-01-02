import React from "react";

const OpenAccount = () => {
  const buttonRef = React.useRef(null);
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
    }

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">
          Open a <span style={{ color: "#0d6efd" }}>Prospera</span> account
        </h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
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

export default OpenAccount;
