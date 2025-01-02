import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col">
          <h1 className="mb-3"><span style={{color:"#0d6efd"}}>Unbeatable</span> pricing</h1>
          <p></p>
        <p>Our pricing plans are designed to fit your needs and budget. Choose the plan that works best for you and start enjoying our services today!</p>
        <a href=""className="text-decoration-none">See pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div className="col-2"></div>

        <div className="col">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and<br/>direct mutual funds</p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and FnO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
