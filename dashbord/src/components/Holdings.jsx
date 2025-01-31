import React from "react";
import { useState, useEffect, useContext } from "react";
import axios, { all } from "axios";
import { HomeContext } from "./HomeContext";
import { BarGraph } from "./BarGraph";
import { formatCurrency } from "../../constants";
import { Link } from "react-router-dom";
const BACKEND_URL = import.meta.env.BACKEND_URL;

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const { id, watchlist } = useContext(HomeContext);
  let currVal = 0;

  for (const holding of holdings) {
    // Find the stock in the watchlist
    let stock = watchlist.find((user) => user.name === holding.name);

    // If a stock is found in the watchlist, calculate its value
    if (stock && stock.currentPrice != null) {
      currVal += stock.currentPrice * holding.qty;
    }
  }

  useEffect(() => {
    axios.get(`${BACKEND_URL}/allHoldings/${id}`).then((res) => {
      setHoldings(res.data);
    });
  }, [id]);

  const labels = holdings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stocks",
        data: holdings.map((stock) => {
          let stockData = watchlist.find((user) => user.name === stock.name);
          if (stockData) {
            return stockData.currentPrice;
          }
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
    {holdings.length > 0 ? (
      <>
      <h3 className="section-title">
        Holdings <span className="holdings-count">{holdings.length}</span>
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock, index) => {
              const LTP = watchlist.find(
                (user) => user.name === stock.name
              )
              const currValue = stock.qty * LTP.currentPrice;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = LTP.percentageChange < 0 ? "loss" : "profit";
              const net =
              ((currValue - (stock.avg * stock.qty)) / (stock.avg * stock.qty)) * 100
              return (
                <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{LTP.currentPrice}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{net.toFixed(2)}%</td>
                  <td className={dayClass} style={{ fontSize: "0.75rem"}}>
                    {LTP.percentageChange}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1.5rem",
          margin: "1rem 0",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="col"
          style={{
            flex: 1,
            padding: "0.8rem 1.2rem",
            textAlign: "center",
            borderRight: "1px solid #eee",
          }}
        >
          <h5
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              color: "#2c3e50",
              marginBottom: "0.5rem",
            }}
          >
            {formatCurrency(
              holdings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0)
            )}
          </h5>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            Total investment
          </p>
        </div>

        <div
          className="col"
          style={{
            flex: 1,
            padding: "0.8rem 1.2rem",
            textAlign: "center",
            borderRight: "1px solid #eee",
          }}
        >
          <h5
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              color: "#2c3e50",
              marginBottom: "0.5rem",
            }}
          >
            {formatCurrency(currVal)}
          </h5>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            Current value
          </p>
        </div>

        <div
          className="col"
          style={{
            flex: 1,
            padding: "0.8rem 1.2rem",
            textAlign: "center",
          }}
        >
          <h5
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              color: currVal-(holdings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0)) > 0 ? "#22c55e" : currVal-(holdings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0)) === 0 ? "#707070" : "#dc3545",
              marginBottom: "0.5rem",
            }}
          >
            {formatCurrency(currVal-(holdings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0)))}
          </h5>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            P&L
          </p>
        </div>
      </div>
      <div
        style={{
          transform: "scale(0.9)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BarGraph data={data} />
      </div>
    </>
    ) : (
      <div className="no-orders">
          <p>You dont have any holdings hover over stocks</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
      </div>
    )}
      
    </>
  );
};

export default Holdings;
