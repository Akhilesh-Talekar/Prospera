import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/Images/largestBroker.svg"
            alt="India's largest broker"
          />
        </div>

        <div className="col-6 d-flex flex-column justify-content-center p-5">
          <h1>India's <span style={{color:"#0d6efd"}}>largest</span> broker</h1>
          <p>
            <span style={{ color: "#0d6efd", fontWeight: "750" }}>
              2+ million
            </span>{" "}
            Prospera clients contribute to over 15% of all retail order volumes
            in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Equity</li>
                <li>Derivatives</li>
                <li>Currency</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Commodities</li>
                <li>Mutual Funds</li>
                <li>Stocks and IPOs</li>
                <li>Cryptocurrency</li>
              </ul>
            </div>
          </div>
          <img src="media/Images/pressLogos.png" alt="Presses" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
