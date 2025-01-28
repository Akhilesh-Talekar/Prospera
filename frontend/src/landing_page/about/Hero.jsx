import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 p-5">
        <h2 className="text-center">
          We <span style={{ color: "#0d6efd" }}>pioneered</span> the discount
          broking model in India.
          <br />
          Now, we are breaking ground with our{" "}
          <span style={{ color: "#0d6efd" }}>technology</span>.
        </h2>
      </div>

      <div className="row mt-5 p-5 border-top text-muted" style={{lineHeight: "1.8"}}>
        <div
          className="col-12 col-lg-6 paragraph"
        >
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company{" "}
            <span className="underline-animate">Prospera</span>, which is
            derived from the Latin root "prosperus", which means successful.,
            the Latin word for fortune.
            <br />
            <br />
          </p>
          <p>
            Today, our{" "}
            <span className="underline-animate">disruptive pricing models</span>{" "}
            and in-house technology have made us the biggest stock broker in
            India.
            <br />
            <br />
          </p>

          <p>
            <span className="underline-animate">Over 1+ Crore clients</span>{" "}
            place millions of orders every day through our powerful ecosystem of
            investment platforms, contributing over 15% of all Indian retail
            trading volumes
          </p>
        </div>
        <div
          className="col-12 col-lg-6 paragraph"
        >
          <p>
            In addition, we run a number of popular open online{" "}
            <span className="underline-animate">
              educational and community initiatives
            </span>{" "}
            to empower retail traders and investors.
            <br />
            <br />
          </p>
          <p>
            <span className="underline-animate">
              <Link
                to="https://rainmatter.com/"
                style={{ textDecoration: "none" }}
              >
                Rainmatter
              </Link>
            </span>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
            <br />
            <br />
          </p>

          <p>
            And yet,{" "}
            <span className="underline-animate">
              we are always up to something new
            </span>{" "}
            every day. Catch up on the latest updates on our blog or see what
            the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
