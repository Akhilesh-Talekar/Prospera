import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect((res) => {
    axios.get("http://localhost:3000/allPositions").then((res) => {
      setPositions(res.data);
    });
  },[]);
  return (
    <>
      <h3 className="section-title">
        Positions <span className="holdings-count">{positions.length}</span>
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th style={{textAlign:"center"}}>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                  <td style={{padding:"10px 20px"}}>
                    <div style={{textAlign:"center", backgroundColor: "rgb(255, 0, 0, 0.6)"}}>
                    {stock.product}
                    </div>
                  </td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed()}</td>
                  <td>{stock.price.toFixed()}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
