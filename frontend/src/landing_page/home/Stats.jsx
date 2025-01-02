import React from "react";

const Stats = () => {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="p-5 col-6">
          <h1 className="mb-5">
            <span style={{ color: "#0d6efd" }}>Trust</span> with confidence
          </h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            We prioritize our customers' needs and provide exceptional service,
            ensuring their investments are secure and profitable.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            We believe in transparency and honesty, offering straightforward
            investment options without any hidden fees or misleading promotions.
          </p>

          <h2 className="fs-4">The Prospera universe</h2>
          <p className="text-muted">
            Our comprehensive platform offers a wide range of financial products
            and services, catering to all your investment needs in one place.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            We provide expert advice and tools to help you make informed
            decisions, maximizing your returns and achieving your financial
            goals.
          </p>
        </div>
        <div className="p-5 col-6">
          <img
            src="media/Images/ecosystem.png"
            alt="Prospera Ecosystem"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="text-center">
            <a href="" className="mx-5 text-decoration-none">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="text-decoration-none">Try demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
