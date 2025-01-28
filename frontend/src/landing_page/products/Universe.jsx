import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="row px-5">
        <h1>
          The Prospera <span style={{ color: "#0d6efd" }}>Universe</span>
        </h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-12 col-md-6 col-lg-4 py-5 px-3">
          <a href="" style={{ textDecoration: "none" }}>
            <img src="media/Images/smallcaseLogo.png" alt="smallcaseLogo" />
            <p className="text-small text-muted pt-3">
              Themetic investment platform that helps you in diversified baskets
              of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 py-5 px-3">
          <a href="" style={{ textDecoration: "none" }}>
            <img
              src="media/Images/zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              style={{ height: "34%", width: "50%" }}
            />
            <p className="text-small text-muted pt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 py-5 px-3">
          <a href="" style={{ textDecoration: "none" }}>
            <img
              src="media/Images/sensibullLogo.svg"
              alt="sensibullLogo"
              style={{ height: "34%", width: "50%" }}
            />
            <p className="text-small text-muted pt-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 py-5 px-3">
          <a href="" style={{ textDecoration: "none" }}>
            <img
              src="media\Images\streakLogo.png"
              alt="streakLogo"
              style={{ height: "40%", width: "50%" }}
            />
            <p className="text-small text-muted pt-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 py-5 px-3">
          <a href="" style={{ textDecoration: "none" }}>
            <img
              src="media/Images/dittoLogo.png"
              alt="dittoLogo"
              style={{ height: "40%", width: "50%" }}
            />
            <p className="text-small text-muted pt-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 py-5 px-3">
          <a href="" style={{ textDecoration: "none" }}>
            <img
              src="media/Images/goldenpiLogo.png"
              alt=""
              style={{ height: "40%", width: "50%" }}
            />
            <p className="text-small text-muted pt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>
        <div>
          <button className="btn btn-primary fs-5 resbtn">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
