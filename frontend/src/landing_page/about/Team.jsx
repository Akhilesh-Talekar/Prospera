import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>People</h1>
      </div>
 
      <div className="row p-5 text-muted">
        <div className="col-12 col-lg-6 px-5 text-center">
          <img src="./media/Images/founder.jpg" alt="founder" style={{width:"300px", height:"300px", borderRadius:"50%", objectFit:"cover"}}/>
          <h4 className="mt-3">Akhilesh Talekar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center mt-5 mt-lg-0 text-center text-lg-start">
          <p>
          Akhilesh bootstrapped and founded Prospera in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Prospera has changed the landscape of the Indian broking industry.<br/><br/>

          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/><br/>

          Playing chess is his zen.<br/><br/>

          Connect on <a href="" className="text-decoration-none">Homepage</a> / <a href="" className="text-decoration-none">TradingQnA</a> / <a href="" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
