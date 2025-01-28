import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div
        className="row text-center"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <h1 style={{ color: "#0d6efd", fontSize:"3rem"}}>Charges</h1>
        <p className="text-muted fs-4">List of all charges and taxes</p>
      </div>

      <div className="row" style={{ paddingTop: "50px" }}>
        <div className="col-12 col-lg-4 text-center px-5">
          <img src="media/Images/pricingEquity.svg" alt="pricingEquity" />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-lg-4 text-center px-5">
          <img src="media/Images/intradayTrades.svg" alt="intradayTrades" />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-lg-4 text-center px-5">
          <img src="media/Images/pricingMF.svg" alt="pricingMF" />
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
