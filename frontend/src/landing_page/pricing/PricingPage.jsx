import React from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount.jsx";
import Brokerage from "./Brokerage";
import AccountOpeningCharges from "./AccountOpeningCharges.jsx";

const PricingPage = () => {
  return (
    <div>
      <Hero/>
      <OpenAccount/>
      <AccountOpeningCharges/>
      <Brokerage/>
    </div>
  );
};

export default PricingPage;
