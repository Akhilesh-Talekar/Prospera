import React from "react";
import { HomeContext } from "./HomeContext";
import { LineChart } from "./LineChart";
import {
  Niftydata,
  Niftyoptions,
  Sensexdata,
  Sensexoptions,
  formatCurrency,
} from "../../constants";

const Summary = () => {
  const { user, wallet, perHoldings, watchlist } = React.useContext(HomeContext);
  const purchaseVal = perHoldings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);
  let currVal = 0;

  for(const holding of perHoldings){
    const stock = watchlist.find((stock) => stock.name === holding.name);

    if(stock && stock.currentPrice != null){
      currVal += stock.currentPrice * holding.qty;
    }
  }

  const percentage = () => {
    return ((currVal - purchaseVal) / purchaseVal) * 100;
  };

  return (
    <>
      <div className="username">
        <h2>Hi, {user} 👋</h2>
        <hr
          className="divider"
          style={{ width: "100%", backgroundColor: "black" }}
        />
      </div>

      <div className="section">
        <span>
          <h3>
            <i className="fa-regular fa-credit-card"></i> Equity
          </h3>
        </span>

        <div className="data" style={{ width: "100%" }}>
          <div className="first">
            <h3 style={{ fontWeight: "700", color: "#0d6efd" }}>
              {formatCurrency(wallet)}
            </h3>
            <p
              style={{
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              Margin available
            </p>
          </div>
          <hr
            style={{
              width: "2px",
              height: "70px",
              border: "none",
              backgroundColor: "#333",
              margin: "0",
            }}
          />

          <div className="second">
            <p style={{fontSize:"1rem", fontWeight:"600"}}>
              Margins used <span>0</span>{" "}
            </p>
            <p style={{fontSize:"1rem", fontWeight:"600"}}>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr
          className="divider"
          style={{ width: "100%", backgroundColor: "black" }}
        />
      </div>

      <div className="section">
        <span>
          <h3>
            <i
              className="fa-solid fa-hand-holding"
              style={{ position: "relative", bottom: "5px" }}
            ></i>{" "}
            Holdings
          </h3>
        </span>

        <div className="data" style={{ width: "100%" }}>
          <div className="first">
            <h3 style={{ fontWeight: "700", color: percentage() > 0 ? "#47c237" : percentage() === 0 || perHoldings.length === 0 ? "#707070" : "#dc3545" }}>
              {formatCurrency(currVal-purchaseVal)}{" "}
              <small style={{color: percentage() > 0 ? "#47c237" : percentage() === 0 || perHoldings.length === 0 ? "#707070" : "#dc3545"}}> {perHoldings.length === 0 ? 0.0 : percentage().toFixed(2)}%</small>{" "}
            </h3>
            <p style={{textAlign:"center", fontWeight:"600"}}>P&L</p>
          </div>
          <hr
            style={{
              width: "2px",
              height: "70px",
              border: "none",
              backgroundColor: "#333",
              margin: "0",
              position: "relative",
              right: "8px",
            }}
          />

          <div className="second">
            <p style={{fontSize:"1rem", fontWeight:"600"}}>
              Current Value <span>{formatCurrency(currVal)}</span>{" "}
            </p>
            <p style={{fontSize:"1rem", fontWeight:"600"}}>
              Investment <span>{formatCurrency(purchaseVal)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="container">
          <div className="row">
            <div className="col-6 p-3">
              <LineChart data={Niftydata} options={Niftyoptions} />
            </div>
            <div className="col-6 p-3">
              <LineChart data={Sensexdata} options={Sensexoptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
