import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid py-5" id="hero">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h3 className="text-white" style={{ margin: "0px" }}>
          Support Portal
        </h3>
        <a className="text-white fs-5" href="">
          Track Tickets
        </a>
      </div>
      <div className="row py-5">
        <div className="col-12 col-lg-6" style={{ paddingRight: "50px" }}>
          <h3 className="text-white">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <div className="mb-3" style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <i
              className="fa-solid fa-magnifying-glass fs-3 text-muted"
              style={{ position: "absolute", right: "10px", top: "18px" }}
            ></i>
          </div>
          <a href="" className="text-white me-3 fs-5">
            Track account{" "}
          </a>
          <a href="" className="text-white me-3 fs-5">
            opening{" "}
          </a>
          <a href="" className="text-white me-3 fs-5">
            Track segment activation{" "}
          </a>
          <a href="" className="text-white me-3 fs-5">
            Intraday margins
          </a>
          <a
            href=""
            className="text-white me-3 fs-5"
            style={{ display: "inline-block" }}
          >
            Kite user manual
          </a>
        </div>
        <div className="col-12 col-lg-6 mt-5 mt-lg-0" style={{ paddingLeft: "50px" }}>
          <h3 className="text-white">Featured</h3>
          <a
            href=""
            className="text-white"
            style={{
              paddingLeft: "8%",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            1. Surveillance measure on scrips - January 2025
          </a>
          <br />
          <a
            href=""
            className="text-white"
            style={{
              paddingLeft: "8%",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            2. Offer for sale (OFS) - January 2025
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
