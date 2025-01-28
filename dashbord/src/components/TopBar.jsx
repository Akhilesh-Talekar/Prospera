import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index" style={{margin:"0px", fontSize:"1rem"}}>NASDAQ</p>
          <p className="index-points" style={{margin:"0px", fontSize:"1rem", color:"#19d14d"}}>+612(3.07%) </p>
        </div>
        <div className="sensex">
          <p className="index" style={{margin:"0px", fontSize:"1rem"}}>DOW</p>
          <p className="index-points" style={{margin:"0px", fontSize:"1rem"}}>-289(0.65%)</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
